import Masonry from "react-masonry-css";
import illustData from "../../datajs/illustData";
function Illust() {
  let breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <div className="illust">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {illustData.map(function (illustimg, i) {
          return (
            <div className="illust-thum" key={i}>
              <img src={illustData[i].thunmail} alt="" />
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}

export default Illust;
