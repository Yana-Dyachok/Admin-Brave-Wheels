import UpdateItem from '@/components/base/update-item/update-item';
import { generateStaticParams } from './generate-static-parameters';
import getBicycleByIdAPI from 'app/api/get-api-by-id';

// eslint-disable-next-line react-refresh/only-export-components
export { generateStaticParams };

const UpdateItemPage = async ({
  params,
}: {
  params: Promise<{ item: string }>;
}) => {
  const resolvedParams = await params;

  if (!resolvedParams?.item) {
    return <div>Error: Missing params</div>;
  }
  const bicyclesPrimary = await getBicycleByIdAPI(resolvedParams.item);
  return <UpdateItem bicyclesPrimary={bicyclesPrimary} />;
};

export default UpdateItemPage;
