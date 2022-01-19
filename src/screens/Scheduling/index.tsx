import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg';
import { 
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
 } from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';

export function Scheduling(){ 
  const theme = useTheme();
  return (
    <Container>
       <StatusBar 
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
       <Header>
        <BackButton onPress={()=> {}} color={theme.colors.shape}/>
        <Title>
          {`Escolha uma\ndata de início e\nfim do aluguel`}
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={true}>07/01/2022</DateValue>
          </DateInfo> 
           <ArrowSvg />       
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>

      </Content>
      <Footer>
        <Button title='Confirmar'/>
      </Footer>
    </Container>
  );
}