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

export const convertUrlToBase64 = async (url: string): Promise<string> => {
  try {
    const secureUrl = url.startsWith('http://')
      ? url.replace('http://', 'https://')
      : url;
    const response = await fetch(secureUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    throw new Error(`Error converting URL to Base64: ${error}`);
  }
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

export const processImages = async (
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
