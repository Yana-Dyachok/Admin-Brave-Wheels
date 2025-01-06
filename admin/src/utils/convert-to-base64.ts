import { IBicycle } from 'types/interface';

export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};

export const prepareBicycleData = (bicycle: IBicycle) => {
  const updatedImages = bicycle.images.map((image: string) => {
    const parts = image.split(',');
    return parts.length > 1 ? parts[1] : image;
  });

  return {
    ...bicycle,
    images: updatedImages,
  };
};
