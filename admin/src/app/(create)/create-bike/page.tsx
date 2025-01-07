'use client';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store';
import CreateItem from '@/components/component/create-item/create-item';
import styles from './page.module.scss';

const Create = () => {
  const createdItems = useSelector(
    (state: RootState) => state.created.createdItem,
  );
  return (
    <div className={styles.bicyclesBlock}>
      <CreateItem bicyclesPrimary={createdItems} />
    </div>
  );
};

export default Create;
