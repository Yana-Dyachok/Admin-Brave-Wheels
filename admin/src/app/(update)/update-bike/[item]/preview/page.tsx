'use client';
import { useRouter, useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store';
import PreviousItem from '@/components/component/previous-item/previous-item';
import updateBicycleAPI from 'app/api/put-api';
import addImgAPIById from 'app/api/post-img-by-id';
import { prepareBicycleData } from 'utils/convert-to-base64';
import Button from 'ui/button/button';

const PreviewItemPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params.item) ? params.item[0] : params.item;
  const createdItems = useSelector(
    (state: RootState) => state.created.createdItem,
  );
  const handelUpdateItem = () => {
    const newItems = prepareBicycleData(createdItems);
    if (id) {
      updateBicycleAPI(prepareBicycleData(newItems), id);
      addImgAPIById(newItems.images, id);
    }
  };
  const handleEditBicycle = () => {
    router.push('preview');
  };
  return (
    <>
      <PreviousItem bicycleData={createdItems} />
      <div>
        <Button btnType="button" onClick={handelUpdateItem}>
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
