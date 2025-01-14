'use client';
import CreateItem from '@/components/component/create-item/create-item';
import { initialStateBicycle } from 'utils/initial-state-bicycle';
import styles from './page.module.scss';

const Create = () => {
  return (
    <div className={styles.bicyclesBlock}>
      <CreateItem bicyclesPrimary={initialStateBicycle} />
    </div>
  );
};

export default Create;
