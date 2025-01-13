import { IBicycle } from 'types/interface';
import { BicycleType, MaterialType, FrameType } from 'types/type';
import { convertToBase64, convertUrlToBase64 } from 'utils/convert-to-base64';
import { hexToRGB, rgbToHex } from 'utils/get-color-hex';
import getImagesByIdAPI from 'app/api/get-img-by-id';

const processImages = async (
  files: File[],
  prevImgUrls: string[],
): Promise<string[]> => {
  const base64Images: string[] = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const base64 =
      file.size > 0
        ? await convertToBase64(file)
        : await convertUrlToBase64(prevImgUrls[i] || '');

    if (base64 && base64.startsWith('data:image')) {
      base64Images.push(base64);
    }
  }
  return base64Images;
};

const validateAndConvertColor = (color: string): string => {
  const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
  if (isValidHex) return color;

  const rgbColor = hexToRGB(color);
  return rgbColor ? rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b) : color;
};

const handleFormAction = async (
  formData: FormData,
  id: string,
): Promise<IBicycle> => {
  const files = formData.getAll('img') as File[];
  const prevImgUrls = id ? await getImagesByIdAPI(id) : [];
  const base64Images = await processImages(files, prevImgUrls);

  const color = validateAndConvertColor(formData.get('color') as string);

  return {
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
};

export default handleFormAction;
