import styled from 'styled-components/native';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 250px;
`;

export const ProductImage = styled.Image`
  height: 230px;
  width: 230px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductFooter = styled.View`
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0;

  font-size: 22px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  flex: 1;
  text-align: center;

  font-size: 20px;
  font-weight: bold;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  font-size: 20px;
  color: #fff;
  margin: 0px 4px 0px 10px;
`;
