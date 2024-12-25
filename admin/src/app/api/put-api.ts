import { IBicycleData, IBicycle } from 'types/interface';

const updateBicycleAPI = async (
  body: IBicycle,
  id: string,
): Promise<IBicycleData> => {
  try {
    const response = await fetch(
      `https://bicycleapi.onrender.com/api/bicycle/update/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) {
      throw new Error('Failed to update bicycle.');
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export default updateBicycleAPI;
