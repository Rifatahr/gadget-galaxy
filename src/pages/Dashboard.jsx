import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import toast, { Toaster } from "react-hot-toast";
import {
  getCart,
  getWishlist,
  removeFromCart,
  removeFromWishlist,
  addToCart,
  clearAllItemCart
} from "../components/Utility";
import modalSuccessImg from "../assets/Group.png";
import { RxCrossCircled } from "react-icons/rx";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";


const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation(); //  Access location state
  const [activeTab, setActiveTab] = useState(location.state?.tab || "cart");
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);


useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
      loadData();
  }, []);


  const loadData = () => {
    const storedCart = getCart() || [];
    const storedWishlist = getWishlist() || [];

    setCartItems(storedCart);
    setWishlistItems(storedWishlist);

    const sum = storedCart.reduce((acc, curr) => acc + (curr.price || 0), 0);
    setTotalCost(sum);
  };

  //  Enhanced Sort Handler (Toggles High->Low and Low->High with Toast)
  const handleSortByPrice = () => {
    if (cartItems.length <= 1) return;

    // Toggle: if null or 'asc', switch to 'desc' (High to Low); otherwise switch to 'asc' (Low to High)
    const nextOrder = sortOrder === "desc" ? "asc" : "desc";
    setSortOrder(nextOrder);

    const sorted = [...cartItems].sort((a, b) => {
      return nextOrder === "desc" ? b.price - a.price : a.price - b.price;
    });

    setCartItems(sorted);

    // Show Toast Notification
    toast.success(
      `Sorted by price: ${nextOrder === "desc" ? "H to L" : "L to H"}`
    );
  };

  const handleDeleteFromCart = (id) => {
    removeFromCart(id);
    loadData();
    setSortOrder(null); // Reset sort state when item removed
  };


  const handleDeleteFromWishlist = (id) => {
    removeFromWishlist(id);
    loadData();
  };

  const handleAddToCartFromWishlist = (product) => {
    addToCart(product);
    removeFromWishlist(product.product_id);
    loadData();
  };

  const handlePurchase = () => {
    setPurchaseAmount(totalCost);
    clearAllItemCart();
    setCartItems([]);
    setTotalCost(0);
    setSortOrder(null);

    setIsModalOpen(true); // Triggers modal display
  };

  // 3. Close Modal and navigate to Home
  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div className="relative w-full bg-gray-50  pb-24">
      {/* Header */}
      <div className="bg-[#9538E2] text-white pt-8 pb-12 px-4">
        <Heading
          title={"Dashboard"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />

        <div className="flex justify-center pt-8 space-x-4 text-lg">
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-10 py-2 rounded-full font-medium transition-all ${activeTab === "cart"
              ? "bg-white text-[#9538E2] font-bold shadow-md"
              : "border border-white text-white hover:bg-white/10"
              }`}
          >
            Cart
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`px-10 py-2 rounded-full font-medium transition-all ${activeTab === "wishlist"
              ? "bg-white text-[#9538E2] font-bold shadow-md"
              : "border border-white text-white hover:bg-white/10"
              }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-11/12 max-w-6xl mx-auto pt-8">
        {activeTab === "cart" ? (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <h3 className="text-2xl font-bold text-gray-800">Cart</h3>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <p className="text-xl font-bold text-gray-800">
                  Total cost: ${totalCost.toFixed(2)}
                </p>
                {/* 4. Functional Sort Button */}
                <button
                  disabled={cartItems.length <= 1}
                  onClick={handleSortByPrice}
                  className={`btn rounded-full px-6 font-semibold flex items-center gap-2 transition-all ${cartItems.length <= 1
                    ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                    : "border-[#9538E2] text-[#9538E2] hover:bg-[#9538E2] hover:text-white"
                    }`}
                >
                  Sort by Price{" "}
                  {sortOrder === "desc"
                    ? <HiSortDescending className="text-xl" />
                    : sortOrder === "asc"
                      ? <HiSortAscending className="text-xl" />
                      : ""}


                </button>
                <button
                  disabled={cartItems.length === 0 || totalCost === 0}
                  onClick={handlePurchase}
                  className={`btn rounded-full px-8 text-white font-semibold ${cartItems.length === 0 || totalCost === 0
                    ? "bg-gray-400 cursor-not-allowed border-none"
                    : "bg-[#9538E2] hover:bg-[#7e2ec2] border-none"
                    }`}
                >
                  Purchase
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div
                    key={`${item.product_id}-${index}`}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-6"
                  >
                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
                      <img
                        src={item.product_image}
                        alt={item.product_title}
                        className="w-32 h-28 object-contain rounded-xl bg-gray-50 p-2"
                      />
                      <div className="space-y-2 text-center sm:text-left">
                        <h4 className="text-xl font-bold text-gray-800">
                          {item.product_title}
                        </h4>
                        <p className="text-gray-500 text-sm max-w-xl">
                          {item.description}
                        </p>
                        <p className="font-semibold text-gray-700 text-lg">
                          Price: $ {item.price}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteFromCart(item.product_id)}
                      className="text-red-500 hover:text-red-700 transition-colors p-2"
                      aria-label="Remove item"
                    >
                      <RxCrossCircled className="text-3xl" />
                    </button>
                  </div>
                ))
              ) : (
                <div className="bg-white p-12 text-center rounded-2xl border border-gray-100">
                  <p className="text-xl font-bold text-gray-500">
                    Your cart is currently empty.
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">WishList</h3>
            </div>

            <div className="space-y-4">
              {wishlistItems.length > 0 ? (
                wishlistItems.map((item, index) => (
                  <div
                    key={`${item.product_id}-${index}`}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-6"
                  >
                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
                      <img
                        src={item.product_image}
                        alt={item.product_title}
                        className="w-32 h-28 object-contain rounded-xl bg-gray-50 p-2"
                      />
                      <div className="space-y-2 text-center sm:text-left">
                        <h4 className="text-xl font-bold text-gray-800">
                          {item.product_title}
                        </h4>
                        <p className="text-gray-500 text-sm max-w-xl">
                          <span className="font-semibold text-gray-800">
                            Description:{" "}
                          </span>
                          {item.description}
                        </p>
                        <p className="font-semibold text-gray-700 text-lg">
                          Price: $ {item.price}
                        </p>
                        <button
                          onClick={() => handleAddToCartFromWishlist(item)}
                          className="btn bg-[#9538E2] hover:bg-[#7e2ec2] text-white rounded-full px-6 py-2 font-medium border-none shadow-sm"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteFromWishlist(item.product_id)}
                      className="text-red-500 hover:text-red-700 transition-colors p-2 self-start sm:self-center"
                      aria-label="Remove item"
                    >
                      <RxCrossCircled className="text-3xl" />
                    </button>
                  </div>
                ))
              ) : (
                <div className="bg-white p-12 text-center rounded-2xl border border-gray-100">
                  <p className="text-xl font-bold text-gray-500">
                    Your wishlist is currently empty.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Success Modal */}
      <dialog className={`modal modal-bottom sm:modal-middle ${isModalOpen ? "modal-open" : ""}`}>
        <div className="modal-box text-center p-8 rounded-3xl">
          <div className="flex justify-center mb-4">
            <img src={modalSuccessImg} alt="Success" className="w-16 h-16" />
          </div>
          <h3 className="font-bold text-2xl text-gray-800">
            Payment Successfully
          </h3>
          <p className="py-2 text-gray-500 font-medium text-sm">
            Thanks for purchasing.
          </p>
          <p className="text-gray-500 font-medium text-sm">
            Total: ${purchaseAmount.toFixed(2)}
          </p>
          <div className="modal-action justify-center mt-6">
            <button
              onClick={handleCloseModal}
              className="btn w-full bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full font-bold border-none"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;