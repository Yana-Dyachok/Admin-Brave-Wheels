'use client';
import { useEffect } from 'react';
import RenderItem from '../../component/render-item/render-item';
import getBicycleAPI from 'app/api/get-api-all';
import { BicycleDataProps } from 'types/interface';

import styles from './all-items.module.scss';

const AllItems: React.FC<BicycleDataProps> = ({
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
    <div className={styles.bicyclesBlock}>
      {bicycleData.length > 0 ? (
        <RenderItem bicycleData={bicycleData} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default AllItems;
