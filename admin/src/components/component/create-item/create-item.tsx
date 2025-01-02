'use client';

import React, { useState } from 'react';
import { IBicycle } from 'types/interface';
import { FrameEnum } from 'types/enum';
import { bicycleTypes, wheelSizes, materialTypes } from 'utils/const-form';
import handleFormAction from './create-item-actions';
import { initialStateBicycle } from 'utils/initial-state-bicycle';
import Button from '@/components/ui/button/button';
import styles from './create-item.module.scss';

interface BicycleProps {
  bicyclesPrimary?: IBicycle;
}

const CreateItem: React.FC<BicycleProps> = ({ bicyclesPrimary }) => {
  const [bicycles] = useState<IBicycle>(bicyclesPrimary || initialStateBicycle);

  return (
    <form action={handleFormAction}>
      <div>
        <p>Назва товару*</p>
        <input
          className={styles.input}
          type="text"
          name="name"
          defaultValue={bicyclesPrimary?.name}
          required
        />
        <input type="color" name="color" defaultValue="#000000" required />
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
          defaultValue={bicycles.bicycleType}
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
              defaultChecked={String(bicycles.wheelSize) === String(size.value)}
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
              defaultChecked={bicycles.materialType === material.value}
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
        {[FrameEnum.CLOSED, FrameEnum.OPEN].map((frameType) => (
          <div className="frame-type__item" key={frameType}>
            <input
              className={styles.inputRadio}
              type="radio"
              name="frameType"
              value={frameType}
              defaultChecked={bicycles?.frameType === frameType}
              id={`frameType${frameType}`}
            />
            <label
              className="frame-type__label"
              htmlFor={`frameType${frameType}`}
            >
              {frameType[0] +
                frameType.slice(1, frameType.length).toLowerCase()}
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
          defaultChecked={bicycles?.sale}
        />
        <label>Sale</label>
      </div>
      <div>
        <input type="file" name="img" accept="image/*" multiple required />
      </div>
      <div>
        <Button btnType="submit">Додати новий товар</Button>
        <Button btnType="button">Попередній перегляд</Button>
      </div>
    </form>
  );
};

export default CreateItem;
