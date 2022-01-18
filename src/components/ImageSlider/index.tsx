import React from 'react';
import { 
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
 } from './styles'; 

interface Props {
  imageUri: string[];
}

export function ImageSlider({ imageUri }: Props){
 
  return (
    <Container>    
      <ImageIndexes >
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>
      <CarImageWrapper>
        <CarImage 
          source={{uri: imageUri[0]}}
          resizeMode="contain"
        />
      </CarImageWrapper>
    </Container>
  );
}