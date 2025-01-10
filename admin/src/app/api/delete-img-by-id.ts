const deleteImgAPIById = async (id: string): Promise<void> => {
  try {
    await fetch(
      `https://bicycleapi.onrender.com/api/bicycle/images/delete/byBicycleId?uuid=${id}`,
      {
        method: 'DELETE',
      },
    );
  } catch (error) {
    throw error;
  }
};

export default deleteImgAPIById;
