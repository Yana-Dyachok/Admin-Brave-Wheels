'use client';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store';
import PreviousItem from '@/components/component/previous-item/previous-item';

const PreviewItemPage = () => {
  const createdItems = useSelector(
    (state: RootState) => state.created.createdItem,
  );
  console.log(createdItems);
  return <PreviousItem bicycleData={createdItems} />;
};

export default PreviewItemPage;
