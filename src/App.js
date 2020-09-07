import React, { useState, useEffect } from "react";
import "./App.css";
import marked from "marked";
import { mockData } from "./mockData";

function App() {
  const [editor, setEditor] = useState("");
  const [text, setText] = useState("");

  const renderer = new marked.Renderer();

  marked.setOptions({
    breaks: true,
  });

  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + "</a>";
  };

  useEffect(() => {
    setEditor(mockData);
    setText(marked(editor));
  }, []);

  const handleChange = (e) => {
    setEditor(e.target.value);
  };
  return (
    <div>
      <div className="header">FCC Markdown Previewer</div>

      <div className="box">
        <div className="container">
          <div className="label">Editor</div>
          <textarea
            id="editor"
            className="editor"
            onChange={handleChange}
            value={editor}
            type="text"
          ></textarea>
        </div>

        <div className="container-preview">
          <div className="label">Preview</div>
          <div
            id="preview"
            className="preview"
            dangerouslySetInnerHTML={{
              __html: marked(`${editor}`, { renderer: renderer }),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
