import styles from "./Dashboard.module.scss";
import Sidebar from "./Sidebar/Sidebar";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftGrid}>
        <article className={`${styles.content1} ${styles.content}`}>Content 1</article>
        <article className={`${styles.content2} ${styles.content}`}>Content 2</article>
        <article className={`${styles.content3} ${styles.content}`}>Content 3</article>
        <article className={`${styles.content4} ${styles.content}`}>Content 4</article>
        <article className={`${styles.content5} ${styles.content}`}>Content 5</article>
      </div>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
