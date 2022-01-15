import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import { 
  Container,
  Header,
  TotalCars,
  HeaderContent,
 } from './styles';

export function Home(){
  const carData = {
    brand: 'audi',
    name: 'rs 5 coupé',
    rent: {
      period: 'ao minuto',
      price: 120,
    },
    thumbnail: 'https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons.jpg'
  }
  return (
    <Container>
      <StatusBar 
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 142 cars 
          </TotalCars>
        </HeaderContent>
      </Header>
      <Car data={carData}/>
    </Container>
  );
}

