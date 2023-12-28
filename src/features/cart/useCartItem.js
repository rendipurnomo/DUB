import { useQuery } from "@tanstack/react-query";
import {getCartItem} from "../../services/apiCart";

export const useCartItem = ({ id }) => {
    const { data, isLoading } = useQuery({
        queryKey: ["cart", id],
        queryFn: getCartItem({id})
    });
    return {
        data,
        isLoading
    };
}