import { IBicycle } from 'types/interface';
import { BicycleEnum, FrameEnum, MaterialEnum } from 'types/enum';
export const initialStateBicycle: IBicycle = {
  name: '',
  bicycleType: BicycleEnum.MOUNTAIN,
  materialType: MaterialEnum.ALUMINIUM,
  frameType: FrameEnum.OPEN,
  sale: false,
  price: 0,
  wheelSize: 26,
  color: '#000000',
  description: '',
  weight: 0,
  guarantee: 0,
  brakeType: '',
  brand: '',
  quantity: 1,
  images: [],
};
