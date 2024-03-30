import styles from "./page.module.scss";
import { Product } from "@/types/product";
import Link from "next/link";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

import type { Metadata } from "next";

type Props = {
  params: { productId: string };
  product: Product;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.productId;

  const product = await fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    title: `${product.title} | BEK Mağaza`,
  };
}

async function ProductDetailsPage({ params, product }: Props) {
  const { productId } = params;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    if (!res.ok) {
      throw new Error("Failed to fetch the product");
    }
    const data: Product = await res.json();

    return (
      <main className={styles.main}>
        <Link className={styles.returnBtn} href="/urunler">
          Geri Dön
        </Link>
        {data && <ProductDetails product={data} />}
      </main>
    );
  } catch (error: any) {
    console.error(error.message || "An error occurred");
  }
}

export default ProductDetailsPage;
