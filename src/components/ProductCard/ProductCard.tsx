"use client";
import Image from "next/image";
import styles from "./ProductCard.module.scss";
import { useState } from "react";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
  };
  updateBekPoint: (price: number) => void;
  bekPoint: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  updateBekPoint,
  bekPoint,
}) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [alertedProduct, setAlertedProduct] = useState<boolean>(false);
  const { id, title, image, price } = product;

  const canAfford = bekPoint >= price * Math.max(quantity, 1);

  const handleQuantity = (type: "increment" | "decrement") => {
    if (type === "increment" && !canAfford) {
      setAlertedProduct(true);
      setTimeout(() => {
        setAlertedProduct(false);
      }, 1000);
      return;
    }
    if (type === "decrement" && quantity === 0) return;

    const quantityChange = type === "increment" ? 1 : -1;

    setQuantity((prevQuantity) => Math.max(0, prevQuantity + quantityChange));
    updateBekPoint(quantityChange * price);
  };

  const productCardStyles = `${styles.main} ${
    alertedProduct && styles.alerted
  }`;

  return (
    <div className={productCardStyles}>
      <Link href={`urunler/${product.id}`}>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className={styles.productImage}
        />
        <h3 className={styles.title}>{!alertedProduct && title}</h3>
      </Link>
      {alertedProduct ? (
        <p>Yetersiz BEK Puanı...</p>
      ) : (
        <div className={styles.pricesWrapper}>
          <p>{price} BEK Puan</p>
          <div className={styles.quantityWrapper}>
            <span
              className={styles.quantityHandleBtn}
              onClick={() => handleQuantity("decrement")}
            >
              -
            </span>
            <span>{quantity}</span>
            <span
              className={styles.quantityHandleBtn}
              onClick={() => handleQuantity("increment")}
            >
              +
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
