import { IBicycleData } from 'types/interface';
import { BASE_URL } from '../../../next.config';

const getBicycleAPI = async (): Promise<IBicycleData[]> => {
  try {
    const response = await fetch(`${BASE_URL}/page-request?size=100000&page=0`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.content;
  } catch (error) {
    throw error;
  }
};

export default getBicycleAPI;
