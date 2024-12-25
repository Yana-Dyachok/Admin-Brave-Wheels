import { IBicycleData } from 'types/interface';
import styles from './render-item.module.scss';

interface Props {
  bicycleData: IBicycleData[];
}

export const RenderItem: React.FC<Props> = ({ bicycleData }) => {
  return (
    <>
      {bicycleData.length > 0 ? (
        bicycleData.map((bicycle) => (
          <div key={bicycle.id} className={styles.bicycleItem}>
            <h2>{bicycle.name}</h2>
            <div className={styles.bicycleBlock}>
              <div className={styles.bicycleInfoBlock}>
                <p>Type: {bicycle.bicycleType}</p>
                <p>Material: {bicycle.materialType}</p>
                <p>Frame: {bicycle.frameType}</p>
                <p>Sale: {bicycle.sale ? 'Yes' : 'No'}</p>
                <p>Price: {bicycle.price}</p>
                <p>Wheel Size: {bicycle.wheelSize}</p>
                <p>Color: {bicycle.color}</p>
                <p>Weight: {bicycle.weight}</p>
                <p>Guarantee: {bicycle.guarantee}</p>
                <p>Brake Type: {bicycle.brakeType}</p>
                <p>Brand: {bicycle.brand}</p>
                <p>Quantity: {bicycle.quantity}</p>
              </div>
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
            <div className={styles.description}>
              Description: {bicycle.description}
            </div>
          </div>
        ))
      ) : (
        <div>there are no bicycles</div>
      )}
    </>
  );
};

export default RenderItem;
