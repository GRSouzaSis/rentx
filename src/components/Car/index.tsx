import React from 'react';
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
 interface Props {
    data: CarData;
 }

export function Car({ data }: Props){
  return (
    <Container>
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

      {/* <CarImage source={{uri: 'https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons.jpg'}}/> */}
      <CarImage 
        source={{uri: data?.thumbnail}}
        resizeMode='cover'
      />
    </Container>
  );
}