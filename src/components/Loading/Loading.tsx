import styles from "./Loading.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderText}></div>
      </div>
    </div>
  );
};

export default Loading;
