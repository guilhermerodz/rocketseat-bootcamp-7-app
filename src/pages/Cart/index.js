import React from 'react';
import { FlatList, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

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
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

import colors from '../../styles/colors';

function Cart({ products, total, removeFromCart, updateAmountRequest }) {
  function updateAmount(product, add) {
    updateAmountRequest(product.id, product.amount + (add ? 1 : -1));
  }

  function renderProduct({ item: product }) {
    return (
      <Product key={String(product.id)}>
        <ProductInfo>
          <ProductImage source={{ uri: product.image }} />
          <ProductDetail>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.formattedPrice}</ProductPrice>
          </ProductDetail>
          <ProductDelete onPress={() => removeFromCart(product.id)}>
            <Icon name="delete-forever" color={colors.primary} size={24} />
          </ProductDelete>
        </ProductInfo>
        <ProductControls>
          <ProductControlButton onPress={() => updateAmount(product, false)}>
            <Icon
              name="remove-circle-outline"
              size={20}
              color={colors.primary}
            />
          </ProductControlButton>
          <ProductAmount value={String(product.amount)} />
          <ProductControlButton onPress={() => updateAmount(product, true)}>
            <Icon name="add-circle-outline" size={20} color={colors.primary} />
          </ProductControlButton>
          <ProductSubtotal>{product.subtotal}</ProductSubtotal>
        </ProductControls>
      </Product>
    );
  }

  return (
    <Container>
      {products.length ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Products>
            <FlatList
              vertical
              ItemSeparatorComponent={Divider}
              data={products}
              keyExtractor={item => String(item.id)}
              renderItem={renderProduct}
            />
          </Products>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>{total}</TotalAmount>
            <Order>
              <OrderText>FINALIZAR PEDIDO</OrderText>
            </Order>
          </TotalContainer>
        </ScrollView>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
