import { eachDayOfInterval, format, parseISO } from 'date-fns'
import {  DayProps, MarkedDateProps} from '.'
import { getPlatformDate } from '../../utils/getPlatformDate'
import theme from '../../styles/theme'

export function generateInterval(start: DayProps, end: DayProps){
  let interval: MarkedDateProps = {}

eachDayOfInterval(
  {start: parseISO(start.dateSting), 
  end: parseISO(end.dateSting)
}).forEach((item)=> {
  const date = format((item), 'yyyy-MM-dd');

  interval = {
    ...interval,
    [date]: {
      color: start.dateSting === date || end.dateSting === date
      ? theme.colors.success : theme.colors.success,

      textColor: start.dateSting === date || end.dateSting === date
      ? theme.colors.shape : theme.colors.header,
    }
  }
 })
 return interval
}