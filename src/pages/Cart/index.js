import React from 'react';
import { FlatList, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import { formatPrice } from '../../util/format';

import {
  Container,
  Products,
  Product,
  Divider,
  ProductInfo,
  ProductImage,
  ProductDetail,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  EmptyContainer,
  TotalAmount,
  Order,
  OrderText,
} from './styles';

import colors from '../../styles/colors';

class Cart extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('products');

    const products = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({
      products,
    });
  };

  renderProduct = ({ item: product }) => {
    return (
      <Product key={String(product.id)}>
        <ProductInfo>
          <ProductImage source={{ uri: product.image }} />
          <ProductDetail>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.formattedPrice}</ProductPrice>
          </ProductDetail>
          <ProductDelete onPress={() => {}}>
            <Icon name="delete-forever" color={colors.primary} size={24} />
          </ProductDelete>
        </ProductInfo>
        <ProductControls>
          <ProductControlButton onPress={() => {}}>
            <Icon
              name="remove-circle-outline"
              size={20}
              color={colors.primary}
            />
          </ProductControlButton>
          <ProductAmount value={String(3)} />
          <ProductControlButton onPress={() => {}}>
            <Icon name="add-circle-outline" size={20} color={colors.primary} />
          </ProductControlButton>
          <ProductSubtotal>{3}</ProductSubtotal>
        </ProductControls>
      </Product>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        {products.length ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Products>
              <FlatList
                vertical
                ItemSeparatorComponent={Divider}
                data={products}
                extraData={this.props}
                keyExtractor={item => String(item.id)}
                renderItem={this.renderProduct}
              />
            </Products>
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalAmount>5678</TotalAmount>
              <Order>
                <OrderText>FINALIZAR PEDIDO</OrderText>
              </Order>
            </TotalContainer>
          </ScrollView>
        ) : (
          <EmptyContainer />
        )}
      </Container>
    );
  }
}

export default Cart;
