import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg';
import { 
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
 } from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { 
  Calendar, 
  DayProps, 
  generateInterval, 
  MarkedDateProps 
} from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';

export function Scheduling(){ 
  const [lestSelectedDate, setLestSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmSchedulingDetails(){
    navigation.navigate('SchedulingDetails')
  }
  function handleBack(){
    navigation.goBack()
  }
  function handleChangeDate(date: DayProps){
    let start = !lestSelectedDate.timestamp ? date : lestSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp){
      start = end;
      end = start;
    }
    setLestSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval)
  }
  return (
    <Container>
       <StatusBar 
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
       <Header>
        <BackButton onPress={handleBack} color={theme.colors.shape}/>
        <Title>
          {`Escolha uma\ndata de início e\nfim do aluguel`}
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={true}>07/01/2022</DateValue>
          </DateInfo> 
           <ArrowSvg />       
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar 
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>
      <Footer>
        <Button 
          title='Confirmar'
          onPress={handleConfirmSchedulingDetails}
        />
      </Footer>
    </Container>
  );
}