import { IBicycle } from 'types/interface';
import { BicycleType, MaterialType, FrameType } from 'types/type';
import { convertToBase64 } from 'utils/convert-to-base64';
import { hexToRGB, rgbToHex } from 'utils/get-color-hex';

const handleFormAction = async (formData: FormData): Promise<IBicycle> => {
  const files = formData.getAll('img') as File[];
  const validFiles = files.filter((file) => file && file.size > 0);

  const base64Images: string[] = [];
  for (const file of validFiles) {
    const result = await convertToBase64(file);
    if (result) {
      base64Images.push(result);
    }
  }
  let color = formData.get('color') as string;
  if (color) {
    const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
    if (!isValidHex) {
      const rgbColor = hexToRGB(color);
      if (rgbColor) {
        color = rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b);
      }
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
