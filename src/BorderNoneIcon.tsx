import { splitProps } from "solid-js";
import { IconProps } from "./types";

export default function BorderNoneIcon(props: IconProps) {
  const [, rest] = splitProps(props, ["color"]);
  const color = () => props.color || "currentColor";
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect x="7" y="5.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="13" y="5.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="7" y="3.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="13" y="3.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="7" y="7.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="7" y="13.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="7" y="1.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="13" y="7.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect
        x="13"
        y="13.025"
        width="1"
        height="1"
        rx=".5"
        fill={color()}
      ></rect>
      <rect x="13" y="1.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="5" y="7.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="5" y="13.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="5" y="1.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="3" y="7.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="3" y="13.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="3" y="1.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="9" y="7.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="9" y="13.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="9" y="1.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="11" y="7.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect
        x="11"
        y="13.025"
        width="1"
        height="1"
        rx=".5"
        fill={color()}
      ></rect>
      <rect x="11" y="1.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="7" y="9.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="13" y="9.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="7" y="11.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect
        x="13"
        y="11.025"
        width="1"
        height="1"
        rx=".5"
        fill={color()}
      ></rect>
      <rect x="1" y="5.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="1" y="3.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="1" y="7.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="1" y="13.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="1" y="1.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="1" y="9.025" width="1" height="1" rx=".5" fill={color()}></rect>
      <rect x="1" y="11.025" width="1" height="1" rx=".5" fill={color()}></rect>
    </svg>
  );
}
