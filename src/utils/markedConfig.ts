import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js/lib/core";
import markdown from 'highlight.js/lib/languages/markdown';
import python from 'highlight.js/lib/languages/python';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('python', python);
hljs.registerLanguage('javascript', javascript);

const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight: function (code, language) {
      if (language && hljs.getLanguage(language)) {
        try {
          return hljs.highlight(code, { language, ignoreIllegals: true }).value;
        } catch (__) {
          console.error(`Error highlighting code with language: ${language}`, __);
        }
      }
      try {
        return hljs.highlightAuto(code).value;
      } catch (__) {
        console.error("Error auto-highlighting code", __);
      }
      return code;
    },
  })
);

export default marked;
