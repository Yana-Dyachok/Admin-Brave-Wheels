'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IBicycleData } from 'types/interface';
import updateBicycleAPI from 'app/api/put-api';
import styles from './render-item.module.scss';
import { toggleComplete } from 'lib/slices/checked-item-slice';

interface Props {
  bicycleData: IBicycleData[];
}

const RenderItem: React.FC<Props> = ({ bicycleData }) => {
  const dispatch = useDispatch();
  const [isActive] = useState<boolean>(true);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setCheckedItems((prev) => ({ ...prev, [id]: checked }));
    dispatch(toggleComplete({ id, checked }));
  };

  const updateBicycle = async (bicycle: IBicycleData) => {
    const { id, ...body } = bicycle;
    try {
      await updateBicycleAPI(body, id);
    } catch (error) {
      console.error('Error updating bicycle:', error);
    }
  };

  return (
    <>
      {bicycleData.length > 0 ? (
        bicycleData.map((bicycle) => (
          <div key={bicycle.id} className={styles.bicycleItem}>
            <div className={styles.bicycleInnerFirstChild}>
              <input
                className={styles.inputCheckbox}
                type="checkbox"
                checked={!!checkedItems[bicycle.id]}
                onChange={(e) =>
                  handleCheckboxChange(bicycle.id, e.target.checked)
                }
              />
              <div className={styles.imgBlock}>
                {bicycle.images.map((image, imgIndex) => (
                  // eslint-disable-next-line  @next/next/no-img-element
                  <img
                    className={styles.cardImg}
                    key={imgIndex}
                    src={image}
                    alt={`Image ${imgIndex}`}
                  />
                ))}
              </div>
            </div>
            <div
              className={`${styles.bicycleInnerBlock} ${styles.bicycleName}`}
            >
              <p>{bicycle.bicycleType}</p>
              <p>{bicycle.name}</p>
            </div>
            <div className={styles.bicycleInnerBlock}>
              <p>{bicycle.price}</p>
            </div>
            <div className={styles.bicycleInnerBlock}>
              <p>{bicycle.quantity}</p>
            </div>
            <div className={styles.bicycleInnerBlock}>
              {isActive ? (
                <p className={styles.active}>Активний</p>
              ) : (
                <p className={styles.inActive}>Не активний</p>
              )}
            </div>
            <div className={styles.bicycleInnerBlock}>
              <button
                className={styles.btnUpdate}
                onClick={() => updateBicycle(bicycle)}
              ></button>
            </div>
          </div>
        ))
      ) : (
        <div>There are no bicycles</div>
      )}
    </>
  );
};

export default RenderItem;
