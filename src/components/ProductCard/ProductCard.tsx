"use client";
import Image from "next/image";
import styles from "./ProductCard.module.scss";
import { useEffect, useState } from "react";
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
  const { id, title, image, price } = product;

  const canAfford = bekPoint >= price * Math.max(quantity, 1);

  const handleQuantity = (type: "increment" | "decrement") => {
    if (type === "increment" && !canAfford) {
      alert("Yetersiz Bek Puanı!");
      return;
    }
    if (type === "decrement" && quantity === 0) return;

    const quantityChange = type === "increment" ? 1 : -1;

    setQuantity((prevQuantity) => Math.max(0, prevQuantity + quantityChange));
    updateBekPoint(quantityChange * price);
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
