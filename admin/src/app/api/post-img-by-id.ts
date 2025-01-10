import deleteImgAPIById from './delete-img-by-id';

const addImgAPIById = async (imgs: string[], id: string): Promise<string[]> => {
  deleteImgAPIById(id);
  const body = {
    bicycleId: id,
    images: imgs,
  };
  try {
    const response = await fetch(
      `https://bicycleapi.onrender.com/api/bicycle/images/save`,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default addImgAPIById;
