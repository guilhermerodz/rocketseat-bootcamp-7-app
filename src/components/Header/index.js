import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, CartContainer, ItemCount } from './styles';

function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <ItemCount>3</ItemCount>
        </CartContainer>
      </Container>
    </Wrapper>
  );
}

export default Header;
