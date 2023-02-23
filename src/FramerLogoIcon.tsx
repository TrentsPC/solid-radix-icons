import { splitProps } from "solid-js";
import { IconProps } from "./types";

export default function FramerLogoIcon(props: IconProps) {
  const [, rest] = splitProps(props, ["color"]);
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M3.3825 1.29567C3.46241 1.11432 3.64188 0.997284 3.84005 0.997284H11.5C11.7761 0.997284 12 1.22114 12 1.49728V5.5C12 5.77614 11.7761 6 11.5 6H8.63521L11.5288 9.16247C11.6626 9.3087 11.6974 9.52015 11.6175 9.70154C11.5376 9.88293 11.3582 10 11.16 10H8V13.5C8 13.7022 7.87818 13.8845 7.69134 13.9619C7.5045 14.0393 7.28945 13.9966 7.14645 13.8536L3.14645 9.85355C3.05268 9.75979 3 9.63261 3 9.5V5.5C3 5.22386 3.22386 5 3.5 5H6.36531L3.47105 1.83468C3.33732 1.68844 3.30259 1.47701 3.3825 1.29567ZM7.72032 5L4.97474 1.99728H11V5H7.72032ZM7.27978 6H4V9H7.5H10.0247L7.27978 6ZM4.70711 10L7 12.2929V10H4.70711Z"
        fill={props.color || "currentColor"}
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}
