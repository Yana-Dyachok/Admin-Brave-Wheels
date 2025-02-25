'use client';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store';
import createBicycleAPI from 'app/api/post-api';
import updateBicycleAPI from 'app/api/put-api';
import addImgAPIById from 'app/api/post-img-by-id';
import { prepareBicycleData } from 'utils/convert-to-base64';
import Button from '@/components/ui/button/button';

const SaveButton = ({ id }: { id: string }) => {
  const createdItems = useSelector(
    (state: RootState) => state.created.createdItem,
  );

  const handleSaveItem = () => {
    const preparedData = prepareBicycleData(createdItems);
    if (id) {
      updateBicycleAPI(preparedData, id);
      addImgAPIById(preparedData.images, id);
    } else {
      createBicycleAPI(preparedData);
    }
  };

  return (
    <Button btnType="button" onClick={handleSaveItem}>
      Зберегти
    </Button>
  );
};

export default SaveButton;
