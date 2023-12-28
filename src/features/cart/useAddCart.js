import { QueryClient } from "@tanstack/react-query";
import { addCart } from "../../services/apiCart";

export const useAddCart = ({quantity, productId}) => {

    const queryClient = new QueryClient();
    
}