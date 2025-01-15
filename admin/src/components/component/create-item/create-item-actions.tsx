import { IBicycle } from 'types/interface';
import { BicycleType, MaterialType, FrameType } from 'types/type';
import { processImages } from 'utils/convert-to-base64';
import { validateAndConvertColor } from 'utils/get-color-hex';
import getImagesByIdAPI from 'app/api/get-img-by-id';

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
