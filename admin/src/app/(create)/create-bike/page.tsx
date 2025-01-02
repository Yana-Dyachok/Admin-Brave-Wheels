import CreateItem from '@/components/component/create-item/create-item';
import styles from './page.module.scss';

const Create = () => {
  return (
    <div className={styles.bicyclesBlock}>
      <CreateItem />
    </div>
  );
};

export default Create;
