"use client";
import { useState } from "react";
import styles from "./Story.module.scss";
import Image from "next/image";

interface StoryProps {
  imageUrl: string;
  name: string;
}

const Story: React.FC<StoryProps> = ({ imageUrl, name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isViewed, setIsViewed] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prevOpen) => !prevOpen);
    setIsViewed(true);
  };

  const wrapperStyle = `${styles.imageWrapper} ${isViewed && styles.viewed}`;

  return (
    <div onClick={handleClick} className={styles.main}>
      <div className={wrapperStyle}>
        <Image src={imageUrl} alt="story" layout="fill" objectFit="cover" />
      </div>
      <p>{name}</p>

      {isOpen && (
        <div className={styles.photoOverlay}>
          <div className={styles.overlayImageWrapper}>
            <Image
              onClick={handleClick}
              src={imageUrl}
              alt="story"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Story;
