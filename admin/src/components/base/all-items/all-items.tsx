'use client';
import { useEffect, Suspense } from 'react';
import RenderItem from '../../component/render-item/render-item';
import getBicycleAPI from 'app/api/get-api-all';
import { BicycleDataProps } from 'types/interface';
import { mapBicycleData } from './get-data';
import Loader from 'ui/loader/loader';
import styles from './all-items.module.scss';

const AllItems: React.FC<BicycleDataProps> = ({
  setBicycleData,
  bicycleData,
}) => {
  useEffect(() => {
    getBicycleAPI()
      .then((response) => {
        if (Array.isArray(response)) {
          const product = mapBicycleData(response);
          setBicycleData(product);
        } else {
          console.error('Expected an array but got:', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching products', error);
      });
  }, [setBicycleData]);

  return (
    <Suspense fallback={<Loader />}>
      {' '}
      {bicycleData.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}></th>
              <th className={styles.th}>Фото</th>
              <th className={styles.th}>Назва</th>
              <th className={styles.th}>Ціна</th>
              <th className={styles.th}>Кількість</th>
              <th className={styles.th}>Статус</th>
              <th className={styles.th}></th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <RenderItem bicycleData={bicycleData} />
          </tbody>
        </table>
      ) : (
        <div>There is not bicycles</div>
      )}
    </Suspense>
  );
};

export default AllItems;
