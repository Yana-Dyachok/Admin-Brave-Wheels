import { IBicycle } from 'types/interface';
import styles from './previous-item.module.scss';

interface Props {
  bicycleData: IBicycle;
}

export const PreviousItem: React.FC<Props> = ({ bicycleData }) => {
  return (
    <div key={bicycleData.name} className={styles.bicycleItem}>
      <h2>{bicycleData.name}</h2>
      <div className={styles.bicycleBlock}>
        <div className={styles.bicycleInfoBlock}>
          <p>Type: {bicycleData.bicycleType}</p>
          <p>Material: {bicycleData.materialType}</p>
          <p>Frame: {bicycleData.frameType}</p>
          <p>Sale: {bicycleData.sale ? 'Yes' : 'No'}</p>
          <p>Price: {bicycleData.price}</p>
          <p>Wheel Size: {bicycleData.wheelSize}</p>
          <p>Color: {bicycleData.color}</p>
          <p>Weight: {bicycleData.weight}</p>
          <p>Guarantee: {bicycleData.guarantee}</p>
          <p>Brake Type: {bicycleData.brakeType}</p>
          <p>Brand: {bicycleData.brand}</p>
          <p>Quantity: {bicycleData.quantity}</p>
        </div>
        <div className={styles.imgBlock}>
          {bicycleData.images.map((image, imgIndex) => (
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
      <div className={styles.description}>
        Description: {bicycleData.description}
      </div>
    </div>
  );
};

export default PreviousItem;
