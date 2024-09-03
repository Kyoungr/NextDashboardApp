import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query?.toString() || '';
  console.log('Query', query);
  const customers = await fetchFilteredCustomers(query);
  return <CustomersTable customers={customers} />;
}
