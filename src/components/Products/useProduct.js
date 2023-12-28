import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../../services/apiProducts';

export function useProduct({ id }) {
    const { isLoading, error, data } = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductById({ id }),
    });
    return { isLoading, error, data };
}