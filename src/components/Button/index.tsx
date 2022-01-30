import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Load } from '../Load';

import { 
  Container,
  Title
 } from './styles'; 
 interface Props extends TouchableOpacityProps {
   title: string;
   color?: string;
   textColor?: string;
   disable_button?: boolean;
   onLoading?: boolean;
  //  onPress: () => void;
 }

export function Button({ 
  title, 
  color, 
  textColor, 
  disable_button = true,
  onLoading, 
  ...rest 
}: Props){
  const theme = useTheme()
  return (
    <Container 
      {...rest} 
      color={color}   
      enabled={disable_button}  
    >
      {onLoading 
        ? <ActivityIndicator color={theme.colors.header}/> 
        : <Title textColor={textColor}>{title}</Title>
      }
    </Container>
  );
}