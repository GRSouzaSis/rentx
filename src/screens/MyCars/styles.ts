import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;  
  background-color: ${({theme})=> theme.colors.background_primary};
`;
export const Header = styled.View`
  width: 100%;
  height: 280px;
  background-color: ${({theme})=> theme.colors.header};
  
  justify-content: center;
  padding: 16px;
  padding-top: ${getStatusBarHeight() + 16}px;
`;
export const Title = styled.Text` 
  color: ${({theme})=>  theme.colors.shape};
  font-family: ${({theme})=> theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  margin-top: 20px;
`;

export const SubTitle = styled.Text` 
  color: ${({theme})=>  theme.colors.shape};
  font-family: ${({theme})=> theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;
  margin-top: 20px;
`;

export const Content = styled.View`
    padding: 0 16px;
`;
export const Appointments = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding-top: 16px;
`;

export const AppointmentsTitle = styled.Text` 
  color: ${({theme})=>  theme.colors.text};
  font-family: ${({theme})=> theme.fonts.primary_400};
  font-size: ${RFValue(15)}px; 
`;
export const AppointmentsQuantity = styled.Text` 
  color: ${({theme})=>  theme.colors.text};
  font-family: ${({theme})=> theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;  
`;

export const CarWapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  flex-direction: row;
  padding: 12px;

  margin-top: -10px;
  justify-content: space-between;
  align-items: center;

  background-color: ${({theme})=> theme.colors.background_secondary};
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CarFooterTitle = styled.Text` 
  color: ${({theme})=>  theme.colors.text_detail};
  font-family: ${({theme})=> theme.fonts.secondary_500};
  font-size: ${RFValue(12)}px;  
`;
export const CarFooterDate = styled.Text` 
  color: ${({theme})=>  theme.colors.title};
  font-family: ${({theme})=> theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;  
`;
