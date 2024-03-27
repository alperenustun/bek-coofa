import ProductsHeader from "@/components/ProductsHeader/ProductsHeader";
import styles from "./page.module.scss";
import ProductCard from "@/components/ProductCard/ProductCard";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <main className={styles.main}>
      <ProductsHeader />
      <div className={styles.productsContainer}>
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
