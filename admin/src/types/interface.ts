import { BicycleType, MaterialType, FrameType } from './type';

export interface IBicycle {
  name: string;
  bicycleType: BicycleType;
  materialType: MaterialType;
  frameType: FrameType;
  sale: boolean;
  price: number;
  wheelSize: number;
  color: string;
  description: string;
  weight: number;
  guarantee: number;
  brakeType: string;
  brand: string;
  quantity: number;
  images: string[];
}

export interface IBicycleData extends IBicycle {
  id: string;
}

export interface IAllBicycles {
  bicycles: IBicycleData[];
}

export interface IChecked {
  id: string;
  checked: boolean;
}

export interface BicycleDataProps {
  bicycleData: IBicycleData[];
}

export interface BicycleSetDataProps {
  setBicycleData: React.Dispatch<React.SetStateAction<IBicycleData[]>>;
}

export interface BicycleAllDataProps {
  setBicycleData: React.Dispatch<React.SetStateAction<IBicycleData[]>>;
  bicycleData: IBicycleData[];
}
