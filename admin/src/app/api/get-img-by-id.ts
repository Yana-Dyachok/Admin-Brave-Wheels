import { BASE_URL } from '../../../next.config';

const getImagesByIdAPI = async (id: string): Promise<string[]> => {
  try {
    const response = await fetch(`${BASE_URL}/images/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default getImagesByIdAPI;
