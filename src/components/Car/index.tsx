import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import GasolineSvg from '../../assets/gasoline.svg';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

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

 interface Props extends TouchableOpacityProps{
    data: CarDTO;
 }

export function Car({ data, ...rest }: Props){
  const MotorIcon = getAccessoryIcon(data.fuel_type);
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
            <MotorIcon />
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