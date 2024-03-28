import Image from "next/image";
import styles from "./CheckoutSidebar.module.scss";

interface CheckoutSidebarProps {}

const CheckoutSidebar: React.FC<CheckoutSidebarProps> = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.pointDisplayer}>
        <p>BEK Puanınız: </p>
        <span className={styles.bekPoint}>100</span>
      </div>

      <div className={styles.cartContainer}>
        <div className={styles.detailsContainer}>
          <div className={styles.titleWrapper}>
            <h4 className={styles.title}>Sepetiniz</h4>
            <Image
              src="/cart-icon.png"
              alt="cart icon"
              width={24}
              height={24}
            />
          </div>
          <div className={styles.detailsWrapper}>
            <h5>Toplam Sepet Puanı: 0 BEK Puanı</h5>
            <p className={styles.remainedPoint}>Kalan Sepet Puanı: 0</p>
          </div>
        </div>
        <button className={styles.checkoutBtn}>Siparişi Tamamla</button>
      </div>
    </aside>
  );
};

export default CheckoutSidebar;
