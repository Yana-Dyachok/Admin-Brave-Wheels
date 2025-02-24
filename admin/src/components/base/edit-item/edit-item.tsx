'use client';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store';
import CreateItem from '@/components/component/create-item/create-item';

const EditItem = ({ id }: { id: string }) => {
  const bicyclesPrimary = useSelector(
    (state: RootState) => state.created.createdItem,
  );

  return <CreateItem bicyclesPrimary={{ ...bicyclesPrimary, id: id || '' }} />;
};

export default EditItem;
