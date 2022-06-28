/* eslint-disable */
import { Link } from "react-router-dom";
function Published(props) {
  return (
    <div className="post-list">
      {props.post.map(function (postCon, i) {
        return (
          <Link to={`/journal/${props.post[i].id}`}>
            <div className="post-item" key={i}>
              <h3 className="title">{props.post[i].title}</h3>
              <div className="preview">{props.post[i].preview}</div>
              <div className="info">
                <p className="date">{props.post[i].date}</p>
                <p className="author">By. zzzzych</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Published;
