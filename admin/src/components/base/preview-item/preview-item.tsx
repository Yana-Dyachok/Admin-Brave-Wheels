'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store';
import PreviousItem from '@/components/component/previous-item/previous-item';
import createBicycleAPI from 'app/api/post-api';
import updateBicycleAPI from 'app/api/put-api';
import addImgAPIById from 'app/api/post-img-by-id';
import { prepareBicycleData } from 'utils/convert-to-base64';
import Button from '@/components/ui/button/button';

const PreviewItem = ({ id }: { id: string }) => {
  const router = useRouter();
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

  const handleEditBicycle = () => {
    router.push(id ? `/update/${id}/edit` : '/create/edit');
  };

  return (
    <>
      <PreviousItem bicycleData={createdItems} />
      <div>
        <Button btnType="button" onClick={handleSaveItem}>
          Зберегти
        </Button>
        <Button btnType="button" onClick={handleEditBicycle}>
          Редагувати
        </Button>
      </div>
    </>
  );
};

export default PreviewItem;
