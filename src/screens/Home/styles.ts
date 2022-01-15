import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({theme})=> theme.colors.background_primary};
`;

export const Title = styled.Text`
 font-size: 16px;
 font-family: ${({theme})=> theme.fonts.secondary_500};
`;
