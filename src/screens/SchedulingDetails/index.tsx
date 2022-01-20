import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Feather } from '@expo/vector-icons';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg';
import ForceSvg from '../../assets/force.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import  * as S from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';


export function SchedulingDetails(){ 
  const theme = useTheme()
  const navigation = useNavigation();

  function handleConfirmSchedulingComplete(){
    navigation.navigate('SchedulingComplete')
  }
  return (
    <S.Container>     
      <S.Header>
        <BackButton />
      </S.Header>
      <S.CarImages>
        <ImageSlider 
          imageUri={['https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons.jpg']}
        />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>Audi</S.Brand>
            <S.Name>R8</S.Name>
          </S.Description>
          <S.Rent>
            <S.Period>Ao dia</S.Period>
            <S.Price>R$ 560</S.Price>
          </S.Rent>
        </S.Details>
        <S.Accessories>
          <Accessory icon={SpeedSvg} name='256km/h'/>
          <Accessory icon={ForceSvg} name='sf'/>
          <Accessory icon={AccelerationSvg} name='1.5s'/>
          <Accessory icon={GasolineSvg} name='sf'/>
          <Accessory icon={ExchangeSvg} name='sf'/>
          <Accessory icon={PeopleSvg} name='2'/>
        </S.Accessories>

        
        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather 
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </S.CalendarIcon>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue>19/01/2022</S.DateValue>
          </S.DateInfo>
            <Feather 
              name="chevron-right"
              size={RFValue(15)}
              color={theme.colors.text}
            />
          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue>19/01/2022</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
          <S.RentalPriceDetails>
            <S.RentalPriceQuota>R$ 580 x3</S.RentalPriceQuota>
            <S.RentalPriceTotal>R$ 2.900,00</S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>
      <S.Footer>
        <Button 
          title='Alugar agora' 
          color={theme.colors.success}
          onPress={handleConfirmSchedulingComplete}
        />
      </S.Footer>
    </S.Container>
  );
}