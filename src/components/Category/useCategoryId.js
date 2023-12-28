import { useQuery } from "@tanstack/react-query";
import { getCategoryId } from "../../services/apiCategory";

export function useCategoryId({ category }) {
    const { data: categoryId, isLoading, error } = useQuery({
        queryKey: ["categoryId"],
        queryFn: () => getCategoryId({ category }),
    });
    return { categoryId, isLoading, error };
}