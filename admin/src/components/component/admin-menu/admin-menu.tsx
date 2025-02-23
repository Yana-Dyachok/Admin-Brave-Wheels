import { useRouter } from 'next/navigation';
import { RootState } from 'lib/store';
import { useSelector } from 'react-redux';
import getBicycleAPI from 'app/api/get-api-all';
import deleteBicycleAPI from 'app/api/delete-api';
import Button from '@/components/ui/button/button';
import { BicyclesDataProps } from 'types/interface';
import styles from './admin-menu.module.scss';

const AdminMenu: React.FC<Omit<BicyclesDataProps, 'bicycleData'>> = ({
  setBicycleData,
}) => {
  const checkedItems = useSelector(
    (state: RootState) => state.checked.checkedItem,
  );
  const router = useRouter();

  const handleAddClick = () => {
    router.push(`create`);
  };

  const deleteBicycle = async () => {
    try {
      await Promise.all(
        checkedItems.map((element) => deleteBicycleAPI(element.id)),
      );
      const updatedData = await getBicycleAPI();
      if (Array.isArray(updatedData)) {
        setBicycleData(updatedData);
      } else {
        console.error('Expected an array but got:', updatedData);
      }
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  return (
    <div className={styles.adminMenu}>
      <h1 className={styles.adminMenuTitle}>Панель управління</h1>
      <h2 className={styles.adminMenuSubTitle}>Список товарів</h2>
      <div className={styles.adminMenuButtons}>
        <Button btnType="button" onClick={handleAddClick}>
          Додати новий товар
        </Button>
        <Button btnType="button" onClick={deleteBicycle}>
          Видалити
        </Button>
      </div>
    </div>
  );
};

export default AdminMenu;
