import { useEffect } from "react";
import moleImg from "src/Mole";

function Mole(props) {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 2000);
    let timer = setTimeout(() => {
      props.setDisplayMole(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img
        style={{ width: "30vw" }}
        src={moleImg}
        onClick={props.handleClick}
      />
    </div>
  );
}
