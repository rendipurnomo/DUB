export async function getCategories() {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const data = await response.json();
  return data;
}

export async function getCategoryId({ category }) {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = await response.json();
  return data;
}