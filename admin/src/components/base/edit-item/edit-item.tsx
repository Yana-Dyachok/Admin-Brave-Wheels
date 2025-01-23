'use client';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store';
import CreateItem from '@/components/component/create-item/create-item';

const EditItem = () => {
  const params = useParams();
  const id = Array.isArray(params.item) ? params.item[0] : params.item;
  const bicyclesPrimary = useSelector(
    (state: RootState) => state.created.createdItem,
  );

  return <CreateItem bicyclesPrimary={{ ...bicyclesPrimary, id: id || '' }} />;
};

export default EditItem;
