import { useState } from "react";
function BrowserNotice(props) {
  let [clear, setClear] = useState(true);

  return (
    <div className="browser-notice">
      <p>이 사이트는 크롬 브라우저에 최적화 되어 있습니다.</p>
      <button type="button" onClick={setClear(false)}>
        &times;
      </button>
    </div>
  );
}

export default BrowserNotice;
