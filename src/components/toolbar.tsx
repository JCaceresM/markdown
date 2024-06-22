import styles from "@/styles/layout.module.css";
import Bold from "@/assets/svg/bold";
import Code from "@/assets/svg/code";
import H1 from "@/assets/svg/h1";
import H2 from "@/assets/svg/h2";
import H3 from "@/assets/svg/h3";
import Italic from "@/assets/svg/italic";
import StrikeThrough from "@/assets/svg/strike-through";
import Underlined from "@/assets/svg/underlined";
import Download from "@/assets/svg/download";

interface ToolbarProps {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  html: string
}

interface Icon {
  Component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  value: string;
}

const icons: Icon[] = [
  { Component: Bold, name: "Bold", value: "** **" },
  { Component: Italic, name: "Italic", value: "* *" },
  { Component: Underlined, name: "Underlined", value: "___ ___" },
  { Component: H1, name: "Heading 1", value: "#" },
  { Component: H2, name: "Heading 2", value: "##" },
  { Component: H3, name: "Heading 3", value: "###" },
  { Component: StrikeThrough, name: "Strike Through", value: "~~ ~~" },
  { Component: Code, name: "Code", value: "``` ```" },
];

const Toolbar: React.FC<ToolbarProps> = ({ textAreaRef, html }) => {
  const applyStyle = (styleValue: string) => {
    const textArea = textAreaRef.current;
    if (textArea) {
      const { selectionStart = 0, selectionEnd = 0, value } = textArea;
      const selectedText = value.substring(selectionStart, selectionEnd);
      const [startStyle, endStyle] = styleValue.split(" ");
      const newText = endStyle !== undefined
        ? `${startStyle}${selectedText}${endStyle}`
        : `${startStyle} ${selectedText}`;
      textArea.setRangeText(newText);
      textArea.selectionStart = selectionStart;
      textArea.selectionEnd = selectionStart + newText.length;
      textArea.focus();
      
      // trigger input event to update the preview
      const event = new Event('input', { bubbles: true });
      textArea.dispatchEvent(event);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rendered_content.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`${styles.toolbar} ${styles.displayFlex} ${styles.justifyBetween} ${styles.alignItems}`}>
      <div className={styles.displayFlex}>
        {icons.map(({ Component, name, value }, idx) => (
          <button
            key={idx}
            aria-label={name}
            type="button"
            className={styles.toolbarButton}
            onClick={() => applyStyle(value)}
          >
            <Component />
          </button>
        ))}
      </div>
      <div className={styles.displayFlex}>
        <button onClick={handleDownload} type="button" className={styles.button} aria-label="Download">
          <Download />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
