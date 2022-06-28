/* eslint-disable */
import "./Projects.css";
import Masonry from "react-masonry-css";
import projectItem from "../../datajs/projectData";
function Projects() {
  let breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <div className="projects">
      <h3 className="title">참여 프로젝트와 작업물을 모아두었습니다.</h3>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {projectItem.map(function (a, i) {
          return (
            <div className="list-item" key={i}>
              <div className="thumnail">
                <img
                  src={projectItem[i].thunmail}
                  alt={projectItem[i].imgalt}
                />
              </div>
              <h4 className="project-name">{projectItem[i].name}</h4>
              <div className="lang-keyword">
                {projectItem[i].keyword.map(function (b, j) {
                  return <span key={j}>{projectItem[i].keyword[j]}</span>;
                })}
              </div>
              <p className="period">기간 : {projectItem[i].period}</p>
              <div className="work">
                {projectItem[i].work.map(function (c, k) {
                  return <span key={k}>{projectItem[i].work[k]}</span>;
                })}
              </div>
              <p className="description">{projectItem[i].description}</p>
              <div className="link-list">
                <a
                  href={projectItem[i].link}
                  target="_blank"
                  className={projectItem[i].hover}
                >
                  {projectItem[i].exist}
                </a>
                {projectItem[i].gitlink !== null ? (
                  <a
                    href={projectItem[i].gitlink}
                    className={projectItem[i].hover}
                    target="_blank"
                  >
                    깃허브 소스 보기
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}

export default Projects;
