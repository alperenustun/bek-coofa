import { Product } from "@/types/product";
import styles from "./ProductDetails.module.scss";
import { makeDiscount } from "@/utils/makeDiscount";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { title, description, image, price, rating } = product;
  return (
    <div className={styles.main}>
      <img className={styles.image} src={image} alt={title} />
      <div>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.ratingWrapper}>
          <p className={styles.rate}>
            {rating.rate}/5 ({rating.count} inceleme)
          </p>
          <p className={styles.stockStatus}>Stokta Var</p>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.pricesWrapper}>
          <p className={styles.discountPrice}>
            {makeDiscount(price, 30).toFixed(2)} BEK Puan
          </p>
          <s className={styles.originalPrice}>{price} BEK Puan</s>
        </div>
        <button className={styles.buyBtn}>Satın Al</button>
      </div>
    </div>
  );
};

export default ProductDetails;
