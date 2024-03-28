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
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const { id, title, description, image, price } = product;

  const handleQuantity = (type: string) => {
    if (type === "increment") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      if (quantity > 0) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    }
  };

  return (
    <div className={styles.main}>
      <Link href={`urunler/${product.id}`}>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          style={{ width: "100%", height: "200px" }}
        />
        <h3 className={styles.title}>{title}</h3>
      </Link>
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
    </div>
  );
};

export default ProductCard;
