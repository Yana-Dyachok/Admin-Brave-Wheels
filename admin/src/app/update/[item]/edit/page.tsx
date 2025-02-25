import EditItem from '@/components/base/edit-item/edit-item';

const EditItemPage = async ({
  params,
}: {
  params: Promise<{ item: string }>;
}) => {
  const resolvedParams = await params;

  if (!resolvedParams?.item) {
    return <div>Error: Missing params</div>;
  }
  return <EditItem id={resolvedParams.item} />;
};

export default EditItemPage;
