import CreateItem from '@/components/component/create-item/create-item';
import { initialStateBicycle } from 'utils/initial-state-bicycle';

const Create = () => {
  return <CreateItem bicyclesPrimary={initialStateBicycle} />;
};

export default Create;
