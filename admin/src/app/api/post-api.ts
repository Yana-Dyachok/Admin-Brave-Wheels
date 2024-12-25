import { IBicycleData, IBicycle } from 'types/interface';

const createBicycleAPI = async (body: IBicycle): Promise<IBicycleData> => {
  try {
    const response = await fetch(
      `https://bicycleapi.onrender.com/api/bicycle/save`,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

export default createBicycleAPI;
