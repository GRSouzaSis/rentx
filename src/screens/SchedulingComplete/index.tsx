import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components';
import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import * as S from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function SchedulingComplete(){ 
  const { width } = useWindowDimensions()
  const theme = useTheme()
  const navigation = useNavigation();

  function handleHome(){
    navigation.navigate('Home')
  }
  return (
    <S.Container>
       <StatusBar 
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <LogoSvg width={width}/>
      <S.Content>
        <DoneSvg />
        <S.Title>Carro alugado!</S.Title>
        <S.Message>
          {`Agora você só precisa ir\n até a concessionária da RENTX\n pegar o seu automóvel.`}
        </S.Message>
        <S.ContentButton>
         <Button 
          title='OK' 
          color={theme.colors.shape_dark}
          onPress={handleHome}
        />
        </S.ContentButton>
      </S.Content>
    </S.Container>
  );
}