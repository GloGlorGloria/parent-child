import ParentToChild from "./ParentOne";
//you can change the shown name, just make sure the path is correct.
import styles from "@/styles/Home.module.css";
import ChildToParent from "./ParentTwo";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <ParentToChild/> 
        <ChildToParent/>
      </main>
    </>
  );
}
