import { IBicycleData } from 'types/interface';
import { BASE_URL } from '../../../next.config';

const getBicycleByIdAPI = async (id: string): Promise<IBicycleData> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default getBicycleByIdAPI;
