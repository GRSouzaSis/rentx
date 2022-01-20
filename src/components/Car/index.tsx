import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import GasolineSvg from '../../assets/gasoline.svg';

import { 
  Container,
  Detail,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
 } from './styles';

 interface CarData {
    brand: string;
    name: string;
    rent: {
      period: string;
      price: number;
    }
    thumbnail: string;
 }
 interface Props extends TouchableOpacityProps{
    data: CarData;
 }

export function Car({ data, ...rest }: Props){
  return (
    <Container {...rest}>
      <Detail>
        <Brand>{data?.brand}</Brand>
        <Name>{data?.name}</Name>

        <About>
          <Rent>
            <Period>{data?.rent?.period}</Period>
            <Price>{`R$ ${data?.rent?.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Detail>
      
      <CarImage 
        source={{uri: data?.thumbnail}}
        resizeMode='cover'
      />
    </Container>
  );
}