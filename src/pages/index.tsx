import { useState, useRef, ChangeEvent } from "react";
import Toolbar from "@/components/toolbar";
import Preview from "@/components/preview";
import marked from "@/utils/markedConfig";

import styles from "@/styles/layout.module.css";

const Home: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  const html = marked.parse(markdown);

  return (
    <div className={styles.flexColumn}>
      <div className={`${styles.border} ${styles.flex}`}>
        <Toolbar textAreaRef={textAreaRef} html={html as string}/>
      </div>
      <div
        className={`${styles.displayFlex} ${styles.border} ${styles.flex} ${styles.hFull}`}
      >
        <div className={`${styles.border} ${styles.flex}`}>
          <textarea
            value={markdown}
            onChange={handleChange}
            className={styles.textArea}
            placeholder="type you markdown here"
            ref={textAreaRef}
          />
        </div>
        <div className={`${styles.border} ${styles.flex} ${styles.overflowY}`}>
          <Preview html={html} />
        </div>
      </div>
    </div>
  );
};

export default Home;
