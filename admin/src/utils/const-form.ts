import { BicycleEnum, MaterialEnum, FrameEnum } from 'types/enum';

export const wheelSizes = [
  { value: 26, label: '26' },
  { value: 28, label: '28' },
  { value: 29, label: '29' },
];

export const materialTypes = [
  { value: MaterialEnum.ALUMINIUM, label: 'Алюміній' },
  { value: MaterialEnum.CARBON, label: 'Карбон' },
  { value: MaterialEnum.TITANIUM, label: 'Титан' },
];

export const bicycleTypes = [
  { value: BicycleEnum.MOUNTAIN, label: 'Гірський' },
  { value: BicycleEnum.HIGHWAY, label: 'Шосейний' },
  { value: BicycleEnum.CITY, label: 'Міський' },
  { value: BicycleEnum.ELECTRO, label: 'Електричний' },
];

export const frameTypes = [
  { value: FrameEnum.CLOSED, label: 'Закрита' },
  { value: FrameEnum.OPEN, label: 'Відкрита' },
];
