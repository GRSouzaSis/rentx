import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { api } from '../../services/api'
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';
import { Ionicons } from '@expo/vector-icons'

import { 
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  MyCarsButton
 } from './styles';
import { useTheme } from 'styled-components';

 interface NavigationProps{
   navigate:(
     screen: string,
     carObject:{
       car: CarDTO
     }
   )=> void;
 }

export function Home(){
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation<NavigationProps>();
  const theme = useTheme()

  function handleCarDetails(car: CarDTO){
    navigation.navigate('CarDetails', { car })
  }

  function handleOpenMyCars(){
    navigation.navigate('MyCars');
  }
  useEffect(() => {
    async function fetchCars() {
      setLoading(true)
      try {
        const resp = await api.get('/cars') 
        setCars(resp.data)           
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchCars()
  },[])

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
      {loading && <Load />}
      <CarList 
        data={cars}
        keyExtractor={item => (item.id)}
        renderItem={({item}) => 
          <Car 
            data={item} 
            onPress={()=>handleCarDetails(item)}
          />}
      />
      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons 
          name='ios-car-sport'
          size={RFValue(32)}
          color={theme.colors.shape}
        />
      </MyCarsButton>
    </Container>
  );
}

