import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg';
import ForceSvg from '../../assets/force.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import { 
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer
 } from './styles';
import { Button } from '../../components/Button';

export function CarDetails(){ 
  return (
    <Container>     
      <Header>
        <BackButton />
      </Header>
      <CarImages>
        <ImageSlider 
          imageUri={['https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons.jpg']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>R8</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 560</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory icon={SpeedSvg} name='256km/h'/>
          <Accessory icon={ForceSvg} name='sf'/>
          <Accessory icon={AccelerationSvg} name='1.5s'/>
          <Accessory icon={GasolineSvg} name='sf'/>
          <Accessory icon={ExchangeSvg} name='sf'/>
          <Accessory icon={PeopleSvg} name='2'/>
        </Accessories>

        
        <About>
        conjunto das palavras escritas, em livro, folheto, documento etc. (p.opos. a comentários, aditamentos, sumário etc.); redação original de qualquer obra escrita.
"um t. manuscrito"
        </About>
      </Content>
      <Footer>
        <Button title='Confirmar'/>
      </Footer>
    </Container>
  );
}