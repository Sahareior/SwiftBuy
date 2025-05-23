// https://server-sijans-projects-f3bcab8f.vercel.app/
const addToDb = (product) => {
   

    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart6')) || [];

    // Check if the product already exists
    let existingProduct = shoppingCart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if exists
    } else {
        product.quantity = 1; // Add new product with quantity 1
        shoppingCart.push(product);
    }

    localStorage.setItem('shopping-cart6', JSON.stringify(shoppingCart));
};

const decrease = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if  (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity - 1;
        shoppingCart[id] = newQuantity;
      
    }
    localStorage.setItem('shopping-cart6', JSON.stringify(shoppingCart));
    
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart6', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart6');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
        
    }
    return shoppingCart;
}

function deleteShoppingCart(itemid) {
    let shoppingCart = getShoppingCart();
  
    if (itemid in shoppingCart) {
      delete shoppingCart[itemid];
  
      // Convert the modified object back to a string and update local storage
      localStorage.setItem('shopping-cart6', JSON.stringify(shoppingCart));
    }
  }
  
  

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart,
    decrease
}
