import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../../services/apiProducts';


export function useAllProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });
  return { isLoading, error, products };
}