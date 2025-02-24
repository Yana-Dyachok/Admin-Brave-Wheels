import deleteImgAPIById from './delete-img-by-id';
import { BASE_URL } from '../../../next.config';

const addImgAPIById = async (imgs: string[], id: string): Promise<string[]> => {
  deleteImgAPIById(id);
  const body = {
    bicycleId: id,
    images: imgs,
  };
  try {
    const response = await fetch(`${BASE_URL}/images/save`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default addImgAPIById;
