import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Feather } from '@expo/vector-icons';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon'

import  * as S from './styles';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { api } from '../../services/api';
import { Alert } from 'react-native';

interface Params {
  car: CarDTO;
  dates: string[];
}
interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails(){ 
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
  const [loading, setLoading] = useState(false);
  const theme = useTheme()
  const route = useRoute();
  const { car, dates } = route.params as Params;
  const navigation = useNavigation();

  const rentTotal = Number(dates.length * car.rent.price);

  async function handleConfirmSchedulingComplete(){
    setLoading(true);
      try { 
        const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);
        const unavailable_dates = [
          ...schedulesByCar.data.unavailable_dates,
          ...dates,
        ];
        
        await api.post('schedules_byuser', {
          user_id: 1,
          car,
          startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
          endDate: format(getPlatformDate(new Date(dates[dates.length -1 ])), 'dd/MM/yyyy'),
        })
  
        await api.put(`/schedules_bycars/${car.id}`, {
          id: car.id,
          unavailable_dates
        })
        .then(() => navigation.navigate('SchedulingComplete'))
        .catch(()=> Alert.alert('N??o foi poss??vel salvar o agendamento.'))
      } catch (error) {
        console.log(error)
      }
    setLoading(false);
  }

  function handleBack(){
    navigation.goBack()
  }

  useEffect(()=>{
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length -1 ])), 'dd/MM/yyyy'), 
    })
  },[])

  return (
    <S.Container>     
      <S.Header>
        <BackButton onPress={handleBack}/>
      </S.Header>
      <S.CarImages>
        <ImageSlider 
          imageUri={car?.photos}
        />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car?.brand}</S.Brand>
            <S.Name>{car?.name}</S.Name>
          </S.Description>
          <S.Rent>
            <S.Period>{car?.rent.period}</S.Period>
            <S.Price>R$ {car?.rent.price.toFixed(2)}</S.Price>
          </S.Rent>
        </S.Details>
        <S.Accessories>
          {
              car.accessories.map(accessory =>(
                <Accessory 
                  key={accessory.type}
                  name={accessory.name}
                  icon={getAccessoryIcon(accessory.type)} 
                />
              ))
          }
    
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
            <S.DateValue>{rentalPeriod.start}</S.DateValue>
          </S.DateInfo>
            <Feather 
              name="chevron-right"
              size={RFValue(15)}
              color={theme.colors.text}
            />
          <S.DateInfo>
            <S.DateTitle>AT??</S.DateTitle>
            <S.DateValue>{rentalPeriod.end}</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
          <S.RentalPriceDetails>
            <S.RentalPriceQuota>R$ {car?.rent.price.toFixed(2)} x {dates?.length} di??rias</S.RentalPriceQuota>
            <S.RentalPriceTotal>R$ {rentTotal.toFixed(2)}</S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>
      <S.Footer>
        <Button 
          title='Alugar agora' 
          color={theme.colors.success}
          onPress={handleConfirmSchedulingComplete}
          onLoading={loading}
          disabled={loading}
          disable_button={!loading}
        />
      </S.Footer>
    </S.Container>
  );
}