import EditItem from '@/components/base/edit-item/edit-item';
import { generateStaticParams } from '../generate-static-parameters';

// eslint-disable-next-line react-refresh/only-export-components
export { generateStaticParams };

const EditItemPage = async ({ params }: { params: { item: string } }) => {
  if (!params?.item) {
    return <div>Error: Missing params</div>;
  }
  return <EditItem id={params.item} />;
};

export default EditItemPage;
