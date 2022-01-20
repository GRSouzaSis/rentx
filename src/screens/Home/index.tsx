import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { api } from '../../services/api'
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';

import { 
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList
 } from './styles';

export function Home(){
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation();

  function handleCarDetails(){
    navigation.navigate('CarDetails')
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
            onPress={handleCarDetails}
          />}
      />
    </Container>
  );
}

