import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import { BackButton } from '../../components/BackButton';
import { AntDesign } from '@expo/vector-icons'

import * as S from './styles';
import { Car } from '../../components/Car';
import { Load } from '../../components/Load';
interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}
export function MyCars(){ 
  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(false)
  const theme = useTheme()
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack()
  }

  useEffect(()=>{
    async function fetchCars(){
      setLoading(true)
      try {
        const response = await api.get('/schedules_byuser?user_id=1')
        setCars(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchCars()
  },[])
  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={handleBack} color={theme.colors.shape}/>
          <S.Title>
            {`Seus agendamentos,\nestão aqui.`}
          </S.Title> 
        <S.SubTitle>Conforto, segurança e praticidade.</S.SubTitle>      
       </S.Header>
      {loading ? 
      <Load /> :       
        <>
            <S.Content>
              <S.Appointments>
                <S.AppointmentsTitle>Agendamentos feitos</S.AppointmentsTitle>
                <S.AppointmentsQuantity>{cars?.length || 0}</S.AppointmentsQuantity>
              </S.Appointments>
            </S.Content>
            <FlatList 
              data={cars}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({item})=> (
                <S.CarWapper>
                  <Car data={item.car}/>
                  <S.CarFooter>
                    <S.CarFooterTitle>Período</S.CarFooterTitle>
                    <S.CarFooterPeriod>
                      <S.CarFooterDate>{item.startDate}</S.CarFooterDate>
                        <AntDesign 
                          name='arrowright'
                          size={20}
                          color={theme.colors.title}
                          style={{marginHorizontal: 10}}
                        />
                      <S.CarFooterDate>{item.endDate}</S.CarFooterDate>
                      
                    </S.CarFooterPeriod>
                  </S.CarFooter>
                </S.CarWapper>
              )}      
              contentContainerStyle={{padding: 16}}   
            />
        </>
      }


    </S.Container>
  );
}