import * as React from 'react';

export interface IUnderlinedProps {
}

export default function Underlined (props: IUnderlinedProps) {
  return (
    <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor" stroke="currentColor" stroke-width=".5">
      <path d="m16.104 12.0476c0 1.5307-.3573 2.6667-1.072 3.408-.7147.736-1.7093 1.104-2.984 1.104-1.2693 0-2.26133-.368-2.976-1.104-.71467-.7413-1.072-1.8773-1.072-3.408 0-.2347 0-.4827 0-.744 0-.2667 0-.5467 0-.84v-5.86399h1.368v5.98399.776.664c0 1.184.22667 2.032.68 2.544.4533.5067 1.12.76 2 .76.8853 0 1.5547-.2533 2.008-.76.4587-.512.688-1.36.688-2.544v-7.42399h1.36z"></path>
      <path
        clip-rule="evenodd"
        d="m7 18.8994c0-.2761.2132-.5.47619-.5h9.04761c.263 0 .4762.2239.4762.5 0 .2762-.2132.5-.4762.5h-9.04761c-.26299 0-.47619-.2238-.47619-.5z"
        fill-rule="evenodd"
      ></path>
    </g>
  </svg>
  );
}
