"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { Product } from "@/types/product";
import { useParams } from "next/navigation";
import Link from "next/link";

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
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.main}>
      <Link href="/urunler">Geri Dön</Link>
      <div className={styles.card}>
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
        <img src={product?.image} alt={product?.title} />
        <p>{product?.price} BEK Puan</p>
      </div>
    </div>
  );
}
