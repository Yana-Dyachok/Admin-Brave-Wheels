import { IBicycleData } from 'types/interface';

const getBicycleAPI = async (): Promise<IBicycleData[]> => {
  try {
    const response = await fetch(
      `https://bicycleapi.onrender.com/api/bicycle/page-request?size=100000&page=0`,
    );
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
