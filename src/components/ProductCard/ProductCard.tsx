import Image from "next/image";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, title, description, image } = product;
  return (
    <div>
      <Image src={image} alt={title} width={250} height={250} />
      <h3>{title}</h3>
    </div>
  );
};

export default ProductCard;
