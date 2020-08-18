import React, { useState } from "react";
import "./App.css";
import marked from "marked";
import { mockData } from "./mockData";

function App() {
  const [editor, setEditor] = useState(mockData);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(marked(e.target.value));
  };
  return (
    <div>
      <div className='header'>FCC Markdown Previewer</div>

      <div className='box'>
        <div className='container'>
          <div className='label'>Editor</div>
          <textarea
            id='editor'
            className='editor'
            onChange={handleChange}
            placeholder={mockData}
          ></textarea>
        </div>

        <div className='container-preview'>
          <div className='label'>Preview</div>
          <div
            id='preview'
            className='preview'
            dangerouslySetInnerHTML={{
              __html: marked(`${text}`),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
