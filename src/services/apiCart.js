export async function getCartItem({id}) {
    const response = await fetch(`https://fakestoreapi.com/carts/${id}`);
    const data = await response.json();
    return data;
}

export async function addCart({ productId, quantity }) {
    const response = await fetch(`https://fakestoreapi.com/carts`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 1,
            date: new Date(),
            products: [{
                productId,
                quantity
            }]
        })
    });
    const data = await response.json();
    return data;
}