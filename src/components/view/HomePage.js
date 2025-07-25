import { useState } from "react";
import ProductList from "../ProductList.jsx";
import SearchFilter from "../SearchFilter.jsx";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination.jsx";
import useProductApi from "../../hooks/useProductApi.js";
import { useSelector } from "react-redux";

function Home() {
  useProductApi();
  const navigate = useNavigate();

  const allProducts = useSelector((state) => state.product.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [modal, setModal] = useState(false);
  const itemsPerPage = 4;

  const search = searchTerm.toLowerCase();
  const cartItems = useSelector((state) => state.addCart);
  const filteredProducts = allProducts.filter(
    (product) =>
      product?.title?.toLowerCase().includes(search) ||
      product?.category?.toLowerCase().includes(search)
  );
  const noOfPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;

  const paginatedProducts = filteredProducts.slice(start, end);
  // console.log(filteredProducts)

  const handleCartModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="bg-lime-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div
          onClick={() => navigate("/cart")}
          className="cursor-pointer flex items-center space-x-2 text-lime-700 font-semibold hover:text-lime-800 transition duration-200"
        >
          <span className="text-2xl">🛒</span>
          <span className="hidden sm:inline text-base ">
            {cartItems.length > 0
              ? `${cartItems.length} item(s) in cart`
              : "Cart"}
          </span>
        </div>
      </div>

      <ProductList products={paginatedProducts} />
      <Pagination
        currentPage={currentPage}
        totalPages={noOfPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Home;
