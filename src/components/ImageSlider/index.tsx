import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
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
interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
export function ImageSlider({ imageUri }: Props){
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps)=>{
    setImageIndex(info.viewableItems[0].index!);
  });

  return (
    <Container>    
      <ImageIndexes >
        {imageUri.map((_, index)=>(
          <ImageIndex 
            key={String(index)}
            active={index === imageIndex} 
          />
        ))}
        
      </ImageIndexes>
        <FlatList
          data={imageUri}
          keyExtractor={key => key}
          renderItem={({item})=>(
            <CarImageWrapper>
              <CarImage 
                source={{uri: item}}
                resizeMode="contain"
              />
            </CarImageWrapper>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={indexChanged.current}
        />
    </Container>
  );
}