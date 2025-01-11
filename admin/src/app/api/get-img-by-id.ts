const getImagesByIdAPI = async (id: string): Promise<string[]> => {
  try {
    const response = await fetch(
      `https://bicycleapi.onrender.com/api/bicycle/images/${id}`,
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

export default getImagesByIdAPI;
