'use client';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store';
import PreviousItem from '@/components/component/previous-item/previous-item';
import createBicycleAPI from 'app/api/post-api';
import { prepareBicycleData } from 'utils/convert-to-base64';
import Button from 'ui/button/button';

const PreviewItemPage = () => {
  const router = useRouter();
  const createdItems = useSelector(
    (state: RootState) => state.created.createdItem,
  );
  const handelCreateItem = () => {
    createBicycleAPI(prepareBicycleData(createdItems));
  };
  const handleEditBicycle = () => {
    router.push(`/create-bike`);
  };
  return (
    <>
      <PreviousItem bicycleData={createdItems} />
      <div>
        <Button btnType="button" onClick={handelCreateItem}>
          Зберегти
        </Button>
        <Button btnType="button" onClick={handleEditBicycle}>
          Редагувати
        </Button>
      </div>
    </>
  );
};

export default PreviewItemPage;
