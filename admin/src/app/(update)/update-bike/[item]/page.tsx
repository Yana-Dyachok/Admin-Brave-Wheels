'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import getBicycleByIdAPI from 'app/api/get-api-by-id';
import { IBicycleData } from 'types/interface';
import Loader from 'ui/loader/loader';
import CreateItem from '@/components/component/create-item/create-item';

const EditItem = () => {
  const params = useParams();
  const id = Array.isArray(params.item) ? params.item[0] : params.item;
  const [bicyclesPrimary, setBicyclesPrimary] = useState<IBicycleData>();

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const data = await getBicycleByIdAPI(id);
          setBicyclesPrimary(data);
        } catch (error) {
          console.log(`Failed to fetch data ${error}`);
        }
      })();
    }
  }, [id]);
  return (
    <Suspense fallback={<Loader />}>
      <CreateItem bicyclesPrimary={bicyclesPrimary} />
    </Suspense>
  );
};

export default EditItem;
