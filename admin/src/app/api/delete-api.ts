import { BASE_URL } from '../../../next.config';
const deleteBicycleAPI = async (id: string): Promise<void> => {
  try {
    await fetch(`${BASE_URL}/delete/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    throw error;
  }
};

export default deleteBicycleAPI;
