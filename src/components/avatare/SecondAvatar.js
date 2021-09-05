import React, { useState, useEffect } from "react";
import md5 from "md5";

const Colors = {};
Colors.generate = function(str) {
  return "#" + md5(str).slice(0, 6);
};

const getAbr = (fname) => {
  let str = "";
  if (fname) {
    if (fname.length > 0) {
      var splitStr = fname.toLowerCase().split(" ");
      for (var i = 0; i < 2; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase();
        str += splitStr[i];
      }
      //console.log("str = "+str)
    }
  }
  return str;
};

function SecondAvatar(props) {

  const [abr, setAbr] = useState(undefined);
  const [size, setSize] = useState(props.size);
  const [color, setColor] = useState("#fff");
  const [fontSize, setfontSize] = useState(size * 0.03);

  useEffect(() => {
    if (props.fullname) {
      const abr = getAbr(props.fullname);
      const color = Colors.generate(abr);
      setAbr(abr);
      setColor(color);
    }
  }, [props.fullname]);

  useEffect(() => {
    if (props.size) {
      setSize(props.size);
      setfontSize(props.size * 0.02);
    }
  }, [props.size]);

  if (abr) {
    return (
      <div
        href="#"
        className="avatar rounded-circle p-3"
        style={{
          width: size + "px",
          height: size + "px",
          backgroundColor: color,
        }}
      >
        <span style={{ fontSize: fontSize + "em", textAlign: "center" }}>
          {abr}
        </span>
      </div>
    );
  } else return <div></div>;
}

export default SecondAvatar