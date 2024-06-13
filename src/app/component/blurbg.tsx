import React from "react";

interface Props {
  background?: string;
  pxBlur?: string;
  x?: string;
  y?: string;
}
const BlurBg = (props: Props) => {
  return (
    <div
      className={`w-[300px] h-[300px] rounded-full -z-10 absolute `}
      style={{
        backgroundColor: props.background,
        top: `${props.y}px`,
        left: `${props.x}px`,
        filter: `blur(${props.pxBlur}px)`,
      }}
    >
      Rick
    </div>
  );
};

export default BlurBg;
