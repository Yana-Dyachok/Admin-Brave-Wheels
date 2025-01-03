import { IBicycle } from 'types/interface';
import { BicycleType, MaterialType, FrameType } from 'types/type';

const handleFormAction = async (formData: FormData): Promise<IBicycle> => {
  const files = formData.getAll('img') as File[];
  const base64Images: string[] = [];
  for (const file of files) {
    const result = await new Promise<string | null>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    });

    if (result) {
      const base64String = result.split(',')[1];
      base64Images.push(base64String);
    }
  }
  const color = formData.get('color') as string;
  if (color) {
    const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
    if (!isValidHex) {
      console.error('Invalid color format');
    }
  }
  const bicycle: IBicycle = {
    name: formData.get('name') as string,
    brand: formData.get('brand') as string,
    price: Number(formData.get('price')),
    weight: Number(formData.get('weight')),
    quantity: Number(formData.get('quantity')),
    guarantee: Number(formData.get('guarantee')),
    bicycleType: formData.get('bicycleType') as BicycleType,
    materialType: formData.get('materialType') as MaterialType,
    frameType: formData.get('frameType') as FrameType,
    color,
    sale: formData.get('sale') === 'on',
    description: (formData.get('description') as string) || '',
    wheelSize: Number(formData.get('wheelSize')),
    brakeType: formData.get('brakeType') as string,
    images: base64Images,
  };
  return bicycle;
};

export default handleFormAction;
