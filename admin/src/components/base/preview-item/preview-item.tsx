'use client';

import { useRouter, useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store';
import PreviousItem from '@/components/component/previous-item/previous-item';
import createBicycleAPI from 'app/api/post-api';
import updateBicycleAPI from 'app/api/put-api';
import addImgAPIById from 'app/api/post-img-by-id';
import { prepareBicycleData } from 'utils/convert-to-base64';
import Button from 'ui/button/button';

type PreviewItemProps = {
  isEditMode?: boolean;
};

const PreviewItem = ({ isEditMode = false }: PreviewItemProps) => {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params?.item) ? params.item[0] : params?.item;
  const createdItems = useSelector(
    (state: RootState) => state.created.createdItem,
  );

  const handleSaveItem = () => {
    const preparedData = prepareBicycleData(createdItems);
    if (isEditMode && id) {
      updateBicycleAPI(preparedData, id);
      addImgAPIById(preparedData.images, id);
    } else {
      createBicycleAPI(preparedData);
    }
  };

  const handleEditBicycle = () => {
    router.push(isEditMode ? '/preview' : '/update-bike');
  };

  return (
    <>
      <PreviousItem bicycleData={createdItems} />
      <div>
        <Button btnType="button" onClick={handleSaveItem}>
          Зберегти
        </Button>
        <Button btnType="button" onClick={handleEditBicycle}>
          {isEditMode ? 'Повернутись' : 'Редагувати'}
        </Button>
      </div>
    </>
  );
};

export default PreviewItem;
