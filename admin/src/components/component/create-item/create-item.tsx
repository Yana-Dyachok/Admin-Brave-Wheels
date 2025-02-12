'use client';

import React, { useState, useActionState, useEffect /*useRef*/ } from 'react';
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
import Button from '@/components/ui/button/button';
import createBicycleAPI from 'app/api/post-api';
import { prepareBicycleData, convertToBase64 } from 'utils/convert-to-base64';
import RenderImage from '@/components/ui/render-img/render-img';
import { previewPath } from 'utils/get-preview-path';
import styles from './create-item.module.scss';

interface BicycleDataProps {
  bicyclesPrimary: IBicycleData;
}

const CreateItem: React.FC<BicycleDataProps> = ({ bicyclesPrimary }) => {
  const [imagesData, setImagesData] = useState<string[]>(
    bicyclesPrimary.images.slice() || [],
  );
  //const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => {
    if (bicyclesPrimary.images) {
      setImagesData(bicyclesPrimary.images);
    }
  }, [bicyclesPrimary.images]);

  const [btnAction, setBtnAction] = useState<string>('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCreateItem = async (
    state: 'success' | '',
    formData: FormData,
  ): Promise<'success' | ''> => {
    try {
      const bicycle = await handleFormAction(
        formData,
        bicyclesPrimary.id || '',
        bicyclesPrimary.images || [],
      );

      if (bicycle) {
        if (btnAction === 'add') {
          createBicycleAPI(prepareBicycleData(bicycle));
          dispatch(deleteItem());
        }
        if (btnAction === 'prev') {
          dispatch(addItem(bicycle));
          //router.push(`${window.location.pathname}/preview`);
          if (typeof window !== 'undefined') {
            const currentPath = window.location.pathname;
            router.push(previewPath(currentPath));
          }
        }
        return 'success';
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
      setImagesData((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = file;
        return updatedImages;
      });
    }
  };

  const deleteImage = (index: number) => {
    setImagesData((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = '';
      return updatedImages;
    });
    // if (inputRefs.current[index]) {
    //   inputRefs.current[index]!.value = '';
    // }
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
          defaultValue={bicyclesPrimary.name}
          required
        />
        <input
          type="color"
          name="color"
          defaultValue={bicyclesPrimary.color}
          required
        />
        <input
          className={styles.input}
          type="text"
          name="brand"
          defaultValue={bicyclesPrimary.brand}
          required
        />
        <input
          className={styles.input}
          type="text"
          name="brakeType"
          defaultValue={bicyclesPrimary.brakeType}
          required
        />
        <input
          className={styles.input}
          type="number"
          name="price"
          defaultValue={bicyclesPrimary.price}
          required
        />
        <input
          className={styles.input}
          type="number"
          name="weight"
          defaultValue={bicyclesPrimary.weight}
          required
        />
        <input
          className={styles.input}
          type="number"
          name="quantity"
          defaultValue={bicyclesPrimary.quantity}
          required
          min={1}
        />
        <input
          className={styles.input}
          type="number"
          name="guarantee"
          defaultValue={bicyclesPrimary.guarantee}
          required
        />
      </div>
      <div className={styles.selectTypeBlock}>
        <p>Тип товару*</p>
        <select
          className={styles.inputSelect}
          name="bicycleType"
          defaultValue={bicyclesPrimary.bicycleType}
        >
          {bicycleTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.selectTypeBlock}>
        <p>Діаметр колес*</p>
        <select
          className={styles.inputSelect}
          name="wheelSize"
          defaultValue={bicyclesPrimary.wheelSize}
        >
          {wheelSizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.selectTypeBlock}>
        <p>Тип матеріалу*</p>
        <select
          className={styles.inputSelect}
          name="materialType"
          defaultValue={bicyclesPrimary.materialType}
        >
          {materialTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.selectTypeBlock}>
        <p>Тип *</p>
        <select
          className={styles.inputSelect}
          name="frameType"
          defaultValue={bicyclesPrimary.frameType}
        >
          {frameTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>Опис товару*</p>
        <textarea
          name="description"
          defaultValue={bicyclesPrimary.description}
          required
        ></textarea>
        <input
          className={styles.inputCheckbox}
          type="checkbox"
          name="sale"
          defaultChecked={bicyclesPrimary.sale}
        />
        <label>Sale</label>
      </div>
      <div className={styles.imagesBlock}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={`img-block-${index}`} className={styles.inputBlock}>
            <input
              // ref={(el) => { inputRefs.current[index] = el; }}
              type="file"
              name="img"
              accept="image/*"
              multiple
              id={`file-input-${index}`}
              className={styles.hiddenInput}
              onChange={(e) => handleImageChange(e, index)}
            />
            {imagesData[index] ? (
              <>
                <RenderImage base64Image={imagesData[index]} />
                <button
                  className={styles.crossButton}
                  onClick={() => deleteImage(index)}
                ></button>
              </>
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
