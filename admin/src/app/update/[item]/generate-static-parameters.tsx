import getBicycleAPI from 'app/api/get-api-all';
import { IBicycleData } from 'types/interface';

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  const data = await getBicycleAPI();
  if (!data || data.length === 0) {
    console.error('No data found');
    return [];
  }
  return data.map((el: IBicycleData) => ({ id: el.id }));
}
