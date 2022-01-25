import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg';
import ForceSvg from '../../assets/force.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import { 
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer
 } from './styles';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
interface Params {
  car: CarDTO;
}
export function CarDetails(){ 
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;
  function handleConfirmRental(){
    navigation.navigate('Scheduling')
  }
  function handleBack(){
    navigation.goBack()
  }
  return (
    <Container>     
      <Header>
        <BackButton onPress={handleBack}/>
      </Header>
      <CarImages>
        <ImageSlider 
          imageUri={car.photos}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price.toFixed(2)}</Price>
          </Rent>
        </Details>
        <Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory
                key={accessory.type} 
                name={accessory.name}
                icon={SpeedSvg} 
              />
            ))
          }
         
        </Accessories>
        
        <About>{car.about}</About>

      </Content>
      <Footer>
        <Button 
          title='Período do aluguel'
          onPress={handleConfirmRental} 
        />
      </Footer>
    </Container>
  );
}