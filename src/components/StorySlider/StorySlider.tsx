import Story from "../Story/Story";
import styles from "./StorySlider.module.scss";
import { stories } from "@/mockdata/db";

interface StorySliderProps {}

const StorySlider: React.FC<StorySliderProps> = () => {
  return (
    <div className={styles.main}>
      {stories.map((story) => (
        <Story key={story.id} imageUrl={story.imageUrl} name={story.title} />
      ))}
    </div>
  );
};

export default StorySlider;
