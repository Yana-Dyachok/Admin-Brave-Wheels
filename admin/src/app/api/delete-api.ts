const deleteBicycleAPI = async (id: string): Promise<void> => {
  try {
    await fetch(`https://bicycleapi.onrender.com/api/bicycle/delete/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    throw error;
  }
};

export default deleteBicycleAPI;
