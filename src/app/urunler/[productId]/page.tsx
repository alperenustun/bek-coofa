"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { Product } from "@/types/product";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import Loading from "@/components/Loading/Loading";

export default function Products() {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { productId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch the product");
        }
        const data: Product = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className={styles.main}>
      <Link className={styles.returnBtn} href="/urunler">Geri Dön</Link>
      {product && <ProductDetails product={product} />}
    </main>
  );
}
