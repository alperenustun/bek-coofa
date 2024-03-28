import Image from "next/image";
import styles from "./ProductsFilter.module.scss";

interface ProductsFilterProps {
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
}

const ProductsFilter: React.FC<ProductsFilterProps> = ({
  filterValue,
  setFilterValue,
}) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className={styles.searchbar}>
      <input
        className={styles.searchbarInput}
        type="text"
        id="filter"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Ürün ara..."
      />
      <Image className={styles.searchIcon} src="/search-icon.svg" alt="search-icon" width={20} height={20} />
    </div>
  );
};

export default ProductsFilter;
