"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { Product } from "@/types/product";
import ProductsHeader from "@/components/ProductsHeader/ProductsHeader";
import ProductCard from "@/components/ProductCard/ProductCard";
import CheckoutSidebar from "@/components/CheckoutSidebar/CheckoutSidebar";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterValue, setFilterValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.main}>
      <ProductsHeader
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <main className={styles.content}>
        <div className={styles.productsContainer}>
          {filteredProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <CheckoutSidebar />
      </main>
    </div>
  );
}
