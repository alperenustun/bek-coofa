import Image from "next/image";
import styles from "./page.module.scss";
import StorySlider from "@/components/StorySlider/StorySlider";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function Home() {
  return (
    <main className={styles.main}>
      <StorySlider />
      <Dashboard />
    </main>
  );
}
