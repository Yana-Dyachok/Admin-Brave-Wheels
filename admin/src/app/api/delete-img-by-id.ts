import { BASE_URL } from '../../../next.config';
const deleteImgAPIById = async (id: string): Promise<void> => {
  try {
    await fetch(`${BASE_URL}/images/delete/byBicycleId?uuid=${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    throw error;
  }
};

export default deleteImgAPIById;
