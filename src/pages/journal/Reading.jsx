/* eslint-disable */
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editAuthor } from "../../store";

function Reading(props) {
  let { id } = useParams();
  let matchPost = props.post.find((ele) => ele.id == id);
  //redux store
  //state 모든 스테이트를 의미함
  //return state.작명 해당 state만 불러올 수 있음
  let reduxData = useSelector((state) => {
    return state;
  });
  // state 변경시 dispatch(함수명())
  let dispatch = useDispatch();
  //dispatch(editAuthor(payload))
  return (
    <div className="reading">
      <nav className="nav">
        <button
          type="button"
          className="back"
          onClick={() => {
            props.navigate(-1);
          }}
        >
          <BiArrowBack />
        </button>
      </nav>
      <div className="post-section">
        <div className="top">
          <h3 className="title">{matchPost.title}</h3>
          <div className="info">
            <p className="author">By. zzzzych</p>
            <p className="date">{matchPost.date}</p>
          </div>
        </div>
        <div className="content-section">
          <div className="content">
            {matchPost.content.split("\n").map((line) => {
              return (
                <p>
                  {line}
                  {/* <br /> */}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="author-section"></div>
    </div>
  );
}

export default Reading;
