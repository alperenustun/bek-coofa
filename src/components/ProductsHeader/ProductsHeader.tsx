import Link from "next/link";
import styles from "./ProductsHeader.module.scss";

interface ProductsHeaderProps {}

const ProductsHeader: React.FC<ProductsHeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.returnBtn} href="/">
        Ana Ekrana Dön
      </Link>
      <p>Sponsorlu Ürünler Listesi</p>
    </header>
  );
};

export default ProductsHeader;
