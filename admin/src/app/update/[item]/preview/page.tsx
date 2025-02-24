import PreviewItem from '@/components/base/preview-item/preview-item';
import { generateStaticParams } from '../generate-static-parameters';
// eslint-disable-next-line react-refresh/only-export-components
export { generateStaticParams };

const PreviewUpdateItemPage = async ({
  params,
}: {
  params: { item: string };
}) => {
  if (!params?.item) {
    return <div>Error: Missing params</div>;
  }
  return <PreviewItem id={params.item} />;
};

export default PreviewUpdateItemPage;
