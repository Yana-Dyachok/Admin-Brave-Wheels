import React from 'react';
import styles from './render-img.module.scss';

const RenderImage: React.FC<{ base64Image: string | null }> = ({
  base64Image,
}) => {
  return (
    <div className={styles.imgBlock} key={`${base64Image}-block`}>
      {base64Image && (
        // eslint-disable-next-line  @next/next/no-img-element
        <img
          src={base64Image}
          alt="img-bicycle"
          className={styles.img}
          key={`${base64Image}-img`}
        />
      )}
    </div>
  );
};

export default RenderImage;
