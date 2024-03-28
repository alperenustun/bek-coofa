import Link from "next/link";
import styles from "./ProductsHeader.module.scss";
import ProductsFilter from "./ProductsFilter/ProductsFilter";

interface ProductsHeaderProps {
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
}

const ProductsHeader: React.FC<ProductsHeaderProps> = ({ filterValue, setFilterValue}) => {
  return (
    <header className={styles.header}>
      <div className={styles.filterWrapper}>
        <Link className={styles.returnBtn} href="/">
          Ana Ekrana Dön
        </Link>
        <ProductsFilter filterValue={filterValue} setFilterValue={setFilterValue} />
      </div>
      <p>Sponsorlu Ürünler Listesi</p>
    </header>
  );
};

export default ProductsHeader;
