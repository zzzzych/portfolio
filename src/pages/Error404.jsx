import { Link } from "react-router-dom";

/* eslint-disable */
function Error404() {
  return (
    <div className="error404">
      <p>제가 준비하지 못한 공간을 찾으셨네요.</p>
      <p>준비된 공간으로 안내 해 드릴게요.</p>
      <Link to="/">준비된 공간 보러 가기</Link>
    </div>
  );
}

export default Error404;
