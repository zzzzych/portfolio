import { useState } from "react";
import { PacmanLoader } from "react-spinners";

function Spinner() {
  let [loading, setLoading] = useState(true);
  return (
    <div className="spinner">
      <div className="spinner-inner">
        <PacmanLoader
          color={"var(--main-txt)"}
          loading={loading}
          size={25}
          margin={3}
        />
      </div>
    </div>
  );
}

export default Spinner;
