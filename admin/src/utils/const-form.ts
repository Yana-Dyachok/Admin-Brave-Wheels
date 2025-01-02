import { BicycleEnum, MaterialEnum } from 'types/enum';

export const wheelSizes = [
  { value: 26, label: '26' },
  { value: 28, label: '28' },
  { value: 29, label: '29' },
];

export const materialTypes = [
  { value: MaterialEnum.ALUMINIUM, label: MaterialEnum.ALUMINIUM },
  { value: MaterialEnum.CARBON, label: MaterialEnum.CARBON },
  { value: MaterialEnum.TITANIUM, label: MaterialEnum.TITANIUM },
];

export const bicycleTypes = [
  { value: BicycleEnum.MOUNTAIN, label: BicycleEnum.MOUNTAIN },
  { value: BicycleEnum.HIGHWAY, label: BicycleEnum.HIGHWAY },
  { value: BicycleEnum.CITY, label: BicycleEnum.CITY },
  { value: BicycleEnum.ELECTRO, label: BicycleEnum.ELECTRO },
];
