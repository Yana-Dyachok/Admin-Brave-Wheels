import PreviewItem from '@/components/base/preview-item/preview-item';

const PreviewUpdateItemPage = async ({
  params,
}: {
  params: { item: string };
}) => {
  if (!params?.item) {
    return <div>Error: Missing params</div>;
  }
  const item = await params.item;
  return <PreviewItem id={item} />;
};

export default PreviewUpdateItemPage;
