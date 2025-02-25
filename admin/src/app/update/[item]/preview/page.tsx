import PreviewItem from '@/components/base/preview-item/preview-item';

const PreviewUpdateItemPage = async ({
  params,
}: {
  params: Promise<{ item: string }>;
}) => {
  const resolvedParams = await params;

  if (!resolvedParams?.item) {
    return <div>Error: Missing params</div>;
  }
  return <PreviewItem id={resolvedParams.item} />;
};

export default PreviewUpdateItemPage;
