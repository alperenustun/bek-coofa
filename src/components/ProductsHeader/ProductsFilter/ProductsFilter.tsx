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
    </div>
  );
};

export default ProductsFilter;
