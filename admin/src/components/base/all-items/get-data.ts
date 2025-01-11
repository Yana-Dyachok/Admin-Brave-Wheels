import { IBicycleData } from 'types/interface';
export const mapBicycleData = (data: IBicycleData[]): IBicycleData[] =>
  data.map((item) => ({
    id: item.id,
    name: item.name,
    bicycleType: item.bicycleType,
    materialType: item.materialType,
    frameType: item.frameType,
    sale: item.sale,
    price: item.price,
    wheelSize: item.wheelSize,
    color: item.color,
    description: item.description,
    weight: item.weight,
    guarantee: item.guarantee,
    brakeType: item.brakeType,
    brand: item.brand,
    quantity: item.quantity,
    images: item.images,
  }));
