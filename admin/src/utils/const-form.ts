import { BicycleEnum, MaterialEnum } from 'types/enum';

export const wheelSizes = [
  { value: 26, label: '26' },
  { value: 28, label: '28' },
  { value: 29, label: '29' },
];

export const materialTypes = [
  { value: MaterialEnum.ALUMINIUM, label: 'Aluminium' },
  { value: MaterialEnum.CARBON, label: 'Carbon' },
  { value: MaterialEnum.TITANIUM, label: 'Titanum' },
];

export const bicycleTypes = [
  { value: BicycleEnum.MOUNTAIN, label: 'Mountain' },
  { value: BicycleEnum.HIGHWAY, label: 'Highway' },
  { value: BicycleEnum.CITY, label: 'City' },
  { value: BicycleEnum.ELECTRO, label: 'Electro' },
];
