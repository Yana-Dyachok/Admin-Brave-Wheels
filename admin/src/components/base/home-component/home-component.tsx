'use client';
import { useState } from 'react';
import AllItems from '../../component/all-items/all-items';
import AdminMenu from '@/components/component/admin-menu/admin-menu';
import { IBicycleData } from 'types/interface';
import styles from '../../../styles/pages-styles/page.module.scss';

const HomeComponent = () => {
  const [bicycleData, setBicycleData] = useState<IBicycleData[]>([]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <AdminMenu setBicycleData={setBicycleData} />
        <AllItems bicycleData={bicycleData} setBicycleData={setBicycleData} />
      </div>
    </div>
  );
};

export default HomeComponent;
