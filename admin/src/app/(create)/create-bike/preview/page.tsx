'use client';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store';
import PreviousItem from '@/components/component/previous-item/previous-item';
import Button from 'ui/button/button';

const PreviewItemPage = () => {
  const createdItems = useSelector(
    (state: RootState) => state.created.createdItem,
  );
  return (
    <>
      <PreviousItem bicycleData={createdItems} />
      <div>
        <Button btnType="button">Зберегти</Button>
        <Button btnType="button">Редагувати</Button>
      </div>
    </>
  );
};

export default PreviewItemPage;
