import React, { useEffect, useState } from "react";
import "./pagination-style.css";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    /*const res = await fetch(
      `https://dummyjson.com/products?limit=100`
    );*/
    const data = await res.json();
    console.log("file: Pagination.jsx:11 ~ fetchProducts ~ data:", data);
    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 10);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [page]);
  const handlePagination = (i) => {
    setPage(i);
  };
  return (
    <div>
      {products.length > 0 && (
        <div className="container">
          <div className="products">
            {/* {products.slice(page * 10 - 10, page * 10).map((product) => { */}
            {products.map((product) => {
              return (
                <span className="product__single" key={product.title}>
                  <img src={product.thumbnail} alt={product.title} />
                  <span>{product.title}</span>
                </span>
              );
            })}
          </div>
          <div className="reload" onClick={fetchProducts}>
            Reload
          </div>
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          {page == 1 ? (
            ""
          ) : (
            <span
              onClick={() => {
                handlePagination(page - 1);
              }}
            >
              Prev
            </span>
          )}
          {/* {[...Array(products.length / 10)].map((_, i) => ( */}
          {[...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              onClick={() => handlePagination(i + 1)}
              className={page === i + 1 ? "pagination__selected" : ""}
            >
              {i + 1}
            </span>
          ))}
          {totalPages !== page ? (
            <span
              onClick={() => {
                handlePagination(page + 1);
              }}
            >
              Next
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Pagination;
