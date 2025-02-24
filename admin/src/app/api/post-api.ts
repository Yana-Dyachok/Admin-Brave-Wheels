import { IBicycleData, IBicycle } from 'types/interface';
import { BASE_URL } from '../../../next.config';

const createBicycleAPI = async (body: IBicycle): Promise<IBicycleData> => {
  try {
    const response = await fetch(`${BASE_URL}/save`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export default createBicycleAPI;
