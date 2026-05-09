import toast from "react-hot-toast";



const getAllCartData = () => {
    const getDataLS = localStorage.getItem('my-cart');
    if (getDataLS) {
        const cartData = JSON.parse(getDataLS);
        return cartData;
    }
    else {
        return [];
    }
}



// add
const addToCart = (obj) => {
    const getData = getAllCartData();
    const checkDuplicate = getData.find(item => item.product_id === obj.product_id);
    if (checkDuplicate) {
        return toast.error('already added to cart', {
            duration: 2000,
        });

    }
    getData.push(obj);
    localStorage.setItem('my-cart', JSON.stringify(getData));
    return toast.success('Added to cart', {
        duration: 2000,
    })

}

// delete
// clear all data of cart in ls
const clearAllItemCart = () => {
    localStorage.removeItem("my-cart");

}

// remove selected item

const removeProduct = (id) => {
    const getData = getAllCartData();
    const deleteData = getData.filter(item => id !== item.product_id);
    localStorage.setItem('my-cart', JSON.stringify(deleteData));
    toast.success('Item removed from cart');

}

// wishlist.
// get
const getAllWishlistData = () => {
    const getDataLS = localStorage.getItem('my-wishlist');
    if (getDataLS) {
        const wishlistData = JSON.parse(getDataLS);
        return wishlistData;
    }
    else {
        return [];
    }
}

// add
const addToWishlist = (obj) => {
    const getData = getAllWishlistData();
    const checkDuplicate = getData.find(item => item.product_id === obj.product_id);
    if (checkDuplicate) {
        return toast.error('already added to wishlist', {
            duration: 2000,
        });
    }
    getData.push(obj);
    localStorage.setItem('my-wishlist', JSON.stringify(getData));
    return toast.success('Added to wishlist', {
        duration: 2000,
    })
}




export { addToCart, getAllCartData, getAllWishlistData, addToWishlist, clearAllItemCart, removeProduct };