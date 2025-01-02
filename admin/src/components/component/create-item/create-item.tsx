'use client';

import React, { useState } from 'react';
import { IBicycle } from 'types/interface';
import { FrameEnum } from 'types/enum';
import { bicycleTypes, wheelSizes, materialTypes } from 'utils/const-form';
import createBicycleAPI from 'app/api/post-api';
import { initialStateBicycle } from 'utils/initial-state-bicycle';
import styles from './create-item.module.scss';

interface BicycleProps {
  bicyclesPrimary?: IBicycle;
}

const CreateItem: React.FC<BicycleProps> = ({ bicyclesPrimary }) => {
  const [bicycles, setBicycles] = useState<IBicycle>(
    bicyclesPrimary || initialStateBicycle,
  );

  const handleFormAction = async (formData: FormData) => {
    const files = formData.getAll('img') as File[];
    const base64Images: string[] = [];
    for (const file of files) {
      const result = await new Promise<string | null>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(file);
      });

      if (result) {
        const base64String = result.split(',')[1];
        base64Images.push(base64String);
      }
    }
    const color = formData.get('color') as string;
    if (color) {
      const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
      if (!isValidHex) {
        console.error('Invalid color format');
        return;
      }
    }

    const bicycle: IBicycle = {
      name: formData.get('name') as string,
      brand: formData.get('brand') as string,
      price: Number(formData.get('price')),
      weight: Number(formData.get('weight')),
      quantity: Number(formData.get('quantity')),
      guarantee: Number(formData.get('guarantee')),
      bicycleType: bicycles.bicycleType || formData.get('bicycleType'),
      materialType: bicycles.materialType || formData.get('materialType'),
      frameType: bicycles.frameType || formData.get('frameType'),
      color,
      sale: formData.get('sale') === 'on',
      description: (formData.get('description') as string) || 'No description',
      wheelSize: Number(formData.get('wheelSize')),
      brakeType: formData.get('brakeType') as string,
      images: base64Images,
    };

    try {
      const createdBicycle = await createBicycleAPI(bicycle);
      setBicycles(createdBicycle);
      console.log('Bicycle created successfully:', createdBicycle);
    } catch (error) {
      console.error('Error creating bicycle:', error);
    }
  };

  return (
    <form action={handleFormAction}>
      <div>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input type="color" name="color" defaultValue="#000000" required />
        <input
          className={styles.input}
          type="text"
          name="brand"
          placeholder="Brand name"
          required
        />
        <input
          className={styles.input}
          type="text"
          name="brakeType"
          placeholder="Brake type"
          required
        />
        <input
          className={styles.input}
          type="number"
          name="price"
          placeholder="Price"
          required
        />
        <input
          className={styles.input}
          type="number"
          name="weight"
          placeholder="Weight"
          required
        />
        <input
          className={styles.input}
          type="number"
          name="quantity"
          placeholder="Quantity"
          required
          min={1}
        />
        <input
          className={styles.input}
          type="number"
          name="guarantee"
          placeholder="Guarantee"
          required
        />
      </div>
      <div className="radio-input__block">
        {bicycleTypes.map((type) => (
          <div key={type.value}>
            <input
              type="radio"
              name="bicycleType"
              value={type.value}
              checked={bicycles.bicycleType === type.value}
              onChange={() =>
                setBicycles({ ...bicycles, bicycleType: type.value })
              }
            />
            <label htmlFor={type.value}>{type.label}</label>
          </div>
        ))}
      </div>
      <div className="radio-input__block">
        {wheelSizes.map((size) => (
          <div className="radio-input__item" key={size.value}>
            <input
              type="radio"
              name="wheelSize"
              value={String(size.value)}
              checked={String(bicycles.wheelSize) === String(size.value)}
              onChange={() =>
                setBicycles({ ...bicycles, wheelSize: size.value })
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
              type="radio"
              name="materialType"
              value={material.value}
              checked={bicycles.materialType === material.value}
              onChange={() =>
                setBicycles({ ...bicycles, materialType: material.value })
              }
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
              type="radio"
              name="frameType"
              value={frameType}
              checked={bicycles.frameType === frameType}
              onChange={() => setBicycles({ ...bicycles, frameType })}
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
        <textarea
          name="description"
          placeholder="Description"
          required
        ></textarea>
        <input type="checkbox" name="sale" />
        <label>Sale</label>
      </div>
      <div>
        <input type="file" name="img" accept="image/*" multiple required />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default CreateItem;
