import SpeedSvg from '../assets/speed.svg';
import ForceSvg from '../assets/force.svg';
import AccelerationSvg from '../assets/acceleration.svg';
import GasolineSvg from '../assets/gasoline.svg';
import HybridSvg from '../assets/hybrid.svg';
import EnergySvg from '../assets/energy.svg';
import ExchangeSvg from '../assets/exchange.svg';
import PeopleSvg from '../assets/people.svg';
import CarSvg from '../assets/car.svg';

export function getAccessoryIcon(type: string){
  switch (type) {
    case 'speed':
      return SpeedSvg;
    case 'exchange':
      return ExchangeSvg;
    case 'seats':
      return PeopleSvg;
    case 'electric_motor':
      return EnergySvg;
    case 'acceleration':
      return AccelerationSvg;
    case 'turning_diameter':
      return ForceSvg;
    case 'hybrid_motor':
      return HybridSvg;
    case 'gasoline_motor':
      return GasolineSvg;
    default:
      return CarSvg;
  }
}