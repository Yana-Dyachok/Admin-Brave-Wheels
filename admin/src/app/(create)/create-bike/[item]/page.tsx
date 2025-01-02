'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import getBicycleByIdAPI from 'app/api/get-api-by-id';
import { IBicycle } from 'types/interface';
import CreateItem from '@/components/component/create-item/create-item';

const EditItem = () => {
  const params = useParams();
  const id = Array.isArray(params.item) ? params.item[0] : params.item;
  const [bicyclesPrimary, setBicyclesPrimary] = useState<IBicycle>();

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchData = async () => {
      try {
        const data = await getBicycleByIdAPI(id);
        setBicyclesPrimary(data);
      } catch (error) {
        console.log(`Failed to fetch data ${error}`);
      }
    };

    fetchData();
  }, [id]);
  return !bicyclesPrimary ? (
    <div>Loading...</div>
  ) : (
    <CreateItem bicyclesPrimary={bicyclesPrimary} />
  );
};

export default EditItem;
