import './App.css';

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";

import React, { useState, useEffect } from "react";

function App() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = 'Jira-f0a58af0975141848f364b86aa33ce61';
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, [])
  
  return (
    <div className="App">
      <NotionRenderer blockMap={response} fullPage={true}/>
    </div>
  );
}

export default App;
