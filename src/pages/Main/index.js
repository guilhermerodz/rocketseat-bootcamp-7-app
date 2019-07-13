import React from 'react';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import { formatPrice } from '../../util/format';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductFooter,
  ProductPrice,
  AddButton,
  AddButtonText,
  ProductAmount,
  ProductAmountText,
} from './styles';

class Main extends React.Component {
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

  renderProduct = ({ item }) => {
    return (
      <Product key={String(item.id)}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductFooter>
          <ProductPrice>{item.formattedPrice}</ProductPrice>
          <AddButton>
            <ProductAmount>
              <Icon name="add-shopping-cart" color="#fff" size={25} />
              <ProductAmountText>0</ProductAmountText>
            </ProductAmount>
            <AddButtonText>ADICIONAR</AddButtonText>
          </AddButton>
        </ProductFooter>
      </Product>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

export default Main;
