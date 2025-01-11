'use client';
import { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { IBicycleData, BicycleDataProps } from 'types/interface';
import { toggleComplete } from 'lib/slices/checked-item-slice';
import getImagesByIdAPI from 'app/api/get-img-by-id';
import Loader from 'ui/loader/loader';
import styles from './render-item.module.scss';

const RenderItem: React.FC<BicycleDataProps> = ({ bicycleData }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isActive] = useState<boolean>(true);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setCheckedItems((prev) => ({ ...prev, [id]: checked }));
    dispatch(toggleComplete({ id, checked }));
  };

  const handleEditBicycle = async (bicycle: IBicycleData) => {
    router.push(`update-bike/${bicycle.id}`);
    const imgs = await getImagesByIdAPI(bicycle.id);
    console.log('imgs', imgs);
  };

  return (
    <Suspense fallback={<Loader />}>
      {bicycleData.map((bicycle) => (
        <tr key={bicycle.id} className={styles.tr}>
          <td className={styles.td}>
            {' '}
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              checked={!!checkedItems[bicycle.id]}
              onChange={(e) =>
                handleCheckboxChange(bicycle.id, e.target.checked)
              }
            />
          </td>
          <td className={styles.td}>
            <div className={styles.imgBlock}>
              {/* eslint-disable-next-line  @next/next/no-img-element */}
              <img
                className={styles.cardImg}
                src={bicycle.images[0]}
                alt={`Image ${bicycle.name}`}
              />
            </div>
          </td>
          <td className={styles.td}>
            <div className={styles.bicycleName}>
              <p>{bicycle.bicycleType}</p>
              <p>{bicycle.name}</p>
            </div>
          </td>
          <td className={styles.td}>
            {' '}
            <p>{bicycle.price}</p>
          </td>
          <td className={styles.td}>
            {' '}
            <p>{bicycle.quantity}</p>
          </td>
          <td className={styles.td}>
            {' '}
            {isActive ? (
              <p className={styles.active}>Активний</p>
            ) : (
              <p className={styles.inActive}>Не активний</p>
            )}
          </td>
          <td className={styles.td}>
            {' '}
            <button
              className={styles.btnUpdate}
              onClick={() => handleEditBicycle(bicycle)}
            ></button>
          </td>
        </tr>
      ))}
    </Suspense>
  );
};

export default RenderItem;
