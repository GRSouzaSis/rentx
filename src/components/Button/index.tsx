import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import { 
  Container,
  Title
 } from './styles'; 
 interface Props extends TouchableOpacityProps {
   title: string;
   color?: string;
   textColor?: string;
  //  onPress: () => void;
 }

export function Button({ title, color, textColor, ...rest }: Props){
  const theme = useTheme()
  return (
    <Container {...rest} color={color}>
      <Title 
        textColor={textColor}
      >
        {title}
      </Title>
    </Container>
  );
}