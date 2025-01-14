'use client';

import React, { useState, useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem } from 'lib/slices/create-item-slice';
import { IBicycleData } from 'types/interface';
import {
  bicycleTypes,
  wheelSizes,
  materialTypes,
  frameTypes,
} from 'utils/const-form';
import handleFormAction from './create-item-actions';
import Button from 'ui/button/button';
import createBicycleAPI from 'app/api/post-api';
import { prepareBicycleData, convertToBase64 } from 'utils/convert-to-base64';
import RenderImage from 'ui/render-img/render-img';
import styles from './create-item.module.scss';

interface BicycleProps {
  bicyclesPrimary?: IBicycleData;
}

const CreateItem: React.FC<BicycleProps> = ({ bicyclesPrimary }) => {
  const [imagesData, setImagesData] = useState<string[]>(
    bicyclesPrimary?.images?.slice() || [],
  );
  useEffect(() => {
    if (bicyclesPrimary?.images) {
      setImagesData(bicyclesPrimary.images);
    }
  }, [bicyclesPrimary]);

  const [btnAction, setBtnAction] = useState<string>('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCreateItem = async (
    state: 'succes' | '',
    formData: FormData,
  ): Promise<'succes' | ''> => {
    try {
      const bicycle = await handleFormAction(
        formData,
        bicyclesPrimary?.id || '',
      );
      if (bicycle) {
        if (btnAction === 'add') {
          createBicycleAPI(prepareBicycleData(bicycle));
          dispatch(deleteItem());
        }
        if (btnAction === 'prev') {
          dispatch(addItem(bicycle));
          router.push(`${window.location.pathname}/preview`);
        }
        return 'succes';
      } else {
        console.error('Failed to create bicycle: Invalid data');
        return '';
      }
    } catch (error) {
      console.error('Error creating bicycle:', error);
      return '';
    }
  };

  const handleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = await convertToBase64(e.target.files[0]);
      console.log('file', file);
      setImagesData((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = file;
        return updatedImages;
      });
    }
  };

  const [message, formAction, isPending] = useActionState(handleCreateItem, '');
  return (
    <form action={formAction}>
      <div>
        <p>Назва товару*</p>
        <input
          className={styles.input}
          type="text"
          name="name"
          defaultValue={bicyclesPrimary?.name}
          required
        />
        <input
          type="color"
          name="color"
          defaultValue={bicyclesPrimary?.color}
          required
        />
        <input
          className={styles.input}
          type="text"
          name="brand"
          defaultValue={bicyclesPrimary?.brand}
          required
        />
        <input
          className={styles.input}
          type="text"
          name="brakeType"
          defaultValue={bicyclesPrimary?.brakeType}
          required
        />
        <input
          className={styles.input}
          type="number"
          name="price"
          defaultValue={bicyclesPrimary?.price}
          required
        />
        <input
          className={styles.input}
          type="number"
          name="weight"
          defaultValue={bicyclesPrimary?.weight}
          required
        />
        <input
          className={styles.input}
          type="number"
          name="quantity"
          defaultValue={bicyclesPrimary?.quantity}
          required
          min={1}
        />
        <input
          className={styles.input}
          type="number"
          name="guarantee"
          defaultValue={bicyclesPrimary?.guarantee}
          required
        />
      </div>
      <div className="select-input__block">
        <p>Тип товару*</p>
        <select
          className={styles.inputSelect}
          name="bicycleType"
          defaultValue={bicyclesPrimary?.bicycleType}
        >
          {bicycleTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div className="radio-input__block">
        {wheelSizes.map((size) => (
          <div className="radio-input__item" key={size.value}>
            <input
              className={styles.inputRadio}
              type="radio"
              name="wheelSize"
              value={String(size.value)}
              defaultChecked={
                String(bicyclesPrimary?.wheelSize) === String(size.value)
              }
            />
            <label
              className="wheel-diameter__label"
              htmlFor={`wheelSize-${size.value}`}
            >
              {size.label}
            </label>
          </div>
        ))}
      </div>
      <div className="radio-input__block">
        {materialTypes.map((material) => (
          <div className="material-type__item" key={material.value}>
            <input
              className={styles.inputRadio}
              type="radio"
              name="materialType"
              value={material.value}
              defaultChecked={bicyclesPrimary?.materialType === material.value}
            />
            <label
              className="material-type__label"
              htmlFor={`materialType-${material.value}`}
            >
              {material.label}
            </label>
          </div>
        ))}
      </div>
      <div className="radio-input__block frame-type">
        {frameTypes.map((frameType) => (
          <div className="frame-type__item" key={frameType.value}>
            <input
              className={styles.inputRadio}
              type="radio"
              name="frameType"
              value={frameType.value}
              defaultChecked={bicyclesPrimary?.frameType === frameType.value}
              id={`frameType${frameType}`}
            />
            <label
              className="frame-type__label"
              htmlFor={`frameType${frameType.label}`}
            >
              {frameType.label}
            </label>
          </div>
        ))}
      </div>
      <div>
        <p>Опис товару*</p>
        <textarea
          name="description"
          defaultValue={bicyclesPrimary?.description}
          required
        ></textarea>
        <input
          className={styles.inputCheckbox}
          type="checkbox"
          name="sale"
          defaultChecked={bicyclesPrimary?.sale}
        />
        <label>Sale</label>
      </div>
      <div className={styles.imagesBlock}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={`img-block-${index}`} className={styles.inputBlock}>
            <input
              type="file"
              name="img"
              accept="image/*"
              multiple
              id={`file-input-${index}`}
              className={styles.hiddenInput}
              onChange={(e) => handleImageChange(e, index)}
            />
            {imagesData[index] ? (
              <RenderImage base64Image={imagesData[index]} />
            ) : (
              <label
                htmlFor={`file-input-${index}`}
                className={styles.inputImg}
              ></label>
            )}
          </div>
        ))}
      </div>
      <div>
        <Button
          btnType="submit"
          disabled={isPending}
          onClick={() => setBtnAction('add')}
        >
          Додати новий товар
        </Button>
        {message}
        <Button btnType="submit" onClick={() => setBtnAction('prev')}>
          Попередній перегляд
        </Button>
      </div>
    </form>
  );
};

export default CreateItem;
