import { IBicycleData } from 'types/interface';

const getBicycleByIdAPI = async (id: string): Promise<IBicycleData> => {
  try {
    const response = await fetch(
      `https://bicycleapi.onrender.com/api/bicycle/${id}`,
    );
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
