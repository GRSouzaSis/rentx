import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.header};
  padding-top: 95px;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ContentButton = styled.View`
  margin: 26px 0 46px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({theme})=> theme.colors.shape};
  font-family: ${({theme})=> theme.fonts.secondary_600};

  margin-top: 36px;
`;

export const Message = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme})=> theme.colors.text_detail};
  font-family: ${({theme})=> theme.fonts.primary_400};
  text-align: center;
  margin-top: 16px;
  line-height: ${RFValue(25)}px;
`;

