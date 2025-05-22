import React, { useState } from "react";

const Movie = () => {
  const [btn, setBtn] = useState(true);
  const [src, setSrc] = useState("./img/seoul1.jpg");

  const handleToggle = () => {
    if (btn == true) {
      setBtn(false);
      // console.log(btn);
      setSrc("./img/seoul2.jpg");
    } else {
      setBtn(true);
      // console.log(btn);
      setSrc("./img/seoul1.jpg");
    }
  };

  return (
    <div>
      <img src={src} alt="" width="300" height="500" />
      <button onClick={handleToggle}>change</button>
    </div>
  );
};

export default Movie;
<button>change</button>;
