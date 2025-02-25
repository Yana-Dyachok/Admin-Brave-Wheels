import EditItem from '@/components/base/edit-item/edit-item';

const EditItemPage = async ({ params }: { params: { item: string } }) => {
  if (!params?.item) {
    return <div>Error: Missing params</div>;
  }
  return <EditItem id={params.item} />;
};

export default EditItemPage;
