import * as React from "react";
import {useHistory} from "react-router-dom";
import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";

const ComponentCode = (code) => {
  const codeEl = React.useRef();
  
  React.useEffect(() => {
    // history.listen(_ => {
    //   hljs.registerLanguage("javascript", javascript);
    //   document.querySelectorAll("pre.code").forEach(block => {
    //     hljs.highlightBlock(block);
    //   });
    // });

    
   
  }, []);

  // window.onpopstate = function(){
  //   console.log("changed")
  //  }

  

  return (
    <>
      <pre className="javascript code">
        <code>{code}</code>
      </pre>
    </>
  );
};

export default ComponentCode;
