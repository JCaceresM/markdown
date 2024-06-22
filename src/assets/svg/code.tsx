import * as React from "react";

export interface ICodeProps {}

export default function Code(props: ICodeProps) {
  return (
    <svg
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <path d="m9.87254 6.52426c.29756.31879.29756.83567 0 1.15447l-4.03273 4.32077 4.03273 4.3208c.29756.3188.29756.8357 0 1.1545-.29754.3188-.77996.3188-1.07751 0l-4.57148-4.8981c-.29755-.3188-.29755-.8356 0-1.1544l4.57148-4.89804c.29755-.3188.77997-.3188 1.07751 0z"></path>
        <path d="m14.1275 17.4748c-.2976-.3188-.2976-.8357 0-1.1545l4.0327-4.3208-4.0327-4.32077c-.2976-.3188-.2976-.83567 0-1.15447.2975-.3188.7799-.3188 1.0775 0l4.5714 4.89804c.2976.3188.2976.8356 0 1.1544l-4.5714 4.8981c-.2976.3188-.78.3188-1.0775 0z"></path>
      </g>
    </svg>
  );
}
