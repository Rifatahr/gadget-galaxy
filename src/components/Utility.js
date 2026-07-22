import toast from "react-hot-toast";



// Get Cart Data from LocalStorage
const getAllCartData = () => {
  const getDataLS = localStorage.getItem('my-cart');
  if (getDataLS) {
    return JSON.parse(getDataLS);
  }
  return [];
};



// add
const addToCart = (obj) => {
    const getData = getAllCartData();
    const checkDuplicate = getData.find(item => item.product_id === obj.product_id);
    if (checkDuplicate) {
        return toast.error('already added to cart', {
            duration: 2000});

    }
    getData.push(obj);
    localStorage.setItem('my-cart', JSON.stringify(getData));
    return toast.success('Added to cart', {
        duration: 2000})

}

// delete
// clear all data of cart in ls
const clearAllItemCart = () => {
    localStorage.removeItem("my-cart");

};

// remove selected item

const removeProduct = (id) => {
    const getData = getAllCartData();
    const deleteData = getData.filter(item => item.product_id !== id);
    localStorage.setItem('my-cart', JSON.stringify(deleteData));
    toast.success('Item removed from cart');

}

// wishlist.
// get
const getAllWishlistData = () => {
    const getDataLS = localStorage.getItem('my-wishlist');
    if (getDataLS) {
    return JSON.parse(getDataLS);
  }
  return [];
};

// add
const addToWishlist = (obj) => {
    const getData = getAllWishlistData();
    const checkDuplicate = getData.find(item => item.product_id === obj.product_id);
    if (checkDuplicate) {
        return toast.error('already added to wishlist', {
            duration: 2000  });
    }
    getData.push(obj);
    localStorage.setItem('my-wishlist', JSON.stringify(getData));
    return toast.success('Added to wishlist', {
        duration: 2000});
};

// Remove single item from Wishlist (Added)
const removeFromWishlist = (id) => {
  const getData = getAllWishlistData();
  const deleteData = getData.filter(item => item.product_id !== id);
  localStorage.setItem('my-wishlist', JSON.stringify(deleteData));
  toast.success('Item removed from wishlist');
};




export { 
    addToCart, 
    getAllCartData, 
    getAllCartData as getCart,
    getAllWishlistData, 
    getAllWishlistData as getWishlist,
    addToWishlist, 
    clearAllItemCart, 
    removeProduct,
    removeProduct as removeFromCart,
    removeFromWishlist };