'use client';
import { useEffect } from 'react';
import RenderItem from '../../component/render-item/render-item';
import getBicycleAPI from 'app/api/get-api-all';
import { BicycleAllDataProps } from 'types/interface';

import styles from './all-items.module.scss';

const AllItems: React.FC<BicycleAllDataProps> = ({
  setBicycleData,
  bicycleData,
}) => {
  useEffect(() => {
    getBicycleAPI()
      .then((response) => {
        if (Array.isArray(response)) {
          const product = response.map((data) => ({
            id: data.id,
            name: data.name,
            bicycleType: data.bicycleType,
            materialType: data.materialType,
            frameType: data.frameType,
            sale: data.sale,
            price: data.price,
            wheelSize: data.wheelSize,
            color: data.color,
            description: data.description,
            weight: data.weight,
            guarantee: data.guarantee,
            brakeType: data.brakeType,
            brand: data.brand,
            quantity: data.quantity,
            images: data.images,
          }));
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
    <>
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
    </>
  );
};

export default AllItems;
