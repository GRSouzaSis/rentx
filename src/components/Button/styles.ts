import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonProps {
  color?: string;
  textColor?: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({color, theme}) => color ? color : theme.colors.main};
`;
export const Title = styled.Text<ButtonProps>`
  font-family: ${({theme})=> theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({theme, textColor})=> textColor ? textColor : theme.colors.shape};
  text-transform: uppercase;
`;