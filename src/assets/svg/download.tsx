import * as React from "react";

export interface IDownloadProps {}

export default function Download(props: IDownloadProps) {
  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24"  />
      <path
        d="M5 12V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V12"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 3L12 15M12 15L16 11M12 15L8 11"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
