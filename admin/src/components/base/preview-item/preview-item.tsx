import PreviousItem from '@/components/component/previous-item/previous-item';
import EditButton from '@/components/component/edit-button/edit-button';
import SaveButton from '@/components/component/save-button/save-button';

const PreviewItem = ({ id }: { id: string }) => {
  return (
    <>
      <PreviousItem />
      <div>
        <SaveButton id={id} />
        <EditButton id={id} />
      </div>
    </>
  );
};

export default PreviewItem;
