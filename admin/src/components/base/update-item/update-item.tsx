import { BicycleDataProps } from 'types/interface';
import Loader from '@/components/ui/loader/loader';
import CreateItem from '@/components/component/create-item/create-item';

const UpdateItem: React.FC<BicycleDataProps> = ({ bicyclesPrimary }) => {
  return (
    <>
      {!bicyclesPrimary ? (
        <Loader />
      ) : (
        <CreateItem bicyclesPrimary={bicyclesPrimary} />
      )}
    </>
  );
};

export default UpdateItem;
