'use client';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button/button';

const EditButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleEditBicycle = () => {
    router.push(id ? `/update/${id}/edit` : '/create/edit');
  };

  return (
    <Button btnType="button" onClick={handleEditBicycle}>
      Редагувати
    </Button>
  );
};

export default EditButton;
