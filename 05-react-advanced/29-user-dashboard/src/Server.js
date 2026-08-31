export async function getUsers() {
    const response = await fetch('https://dummyjson.com/users');
    const result =  await response.json();
    return result;
}

export async function getProducts(){
    const response = await fetch('https://dummyjson.com/products');
    const result =  await response.json();
    return result;
}
export async function getOrders() {
  const response = await fetch("https://dummyjson.com/carts");
  const result = await response.json();
  return result;
}
