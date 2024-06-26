import * as React from 'react';

export interface IStrikeThrouhgProps {
}

export default function StrikeThrough (props: IStrikeThrouhgProps) {
  return (
    <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="currentColor">
              <path
                clip-rule="evenodd"
                d="m5 11.9346c0-.2762.19588-.5.4375-.5h13.125c.2416 0 .4375.2238.4375.5 0 .2761-.1959.5-.4375.5h-13.125c-.24162 0-.4375-.2239-.4375-.5z"
                fill-rule="evenodd"
              ></path>
              <path d="m12.0006 19.5646c-1.02 0-1.8933-.16-2.61997-.48-.72-.3267-1.27334-.8167-1.66-1.47-.38667-.6534-.58001-1.4667-.58001-2.44v-.68h1.71001v.65c0 1.02.26666 1.7566.8 2.21.53337.4466 1.30997.67 2.32997.67 1.0534 0 1.85-.18 2.39-.54s.81-.9434.81-1.75c0-.5667-.1566-1.0367-.47-1.41-.2797-.3466-.6592-.6433-1.1385-.89h2.6353c.0468.0652.0912.1319.1332.2.34.54.51 1.22.51 2.04s-.1966 1.52-.59 2.1c-.3866.58-.9433 1.0233-1.67 1.33-.72.3066-1.5833.46-2.59.46z"></path>
              <path d="m7.80063 10.2446c.04249.0645.08671.1278.13266.19h2.54991c-.4493-.2411-.81352-.52111-1.09258-.84003-.31999-.38-.47999-.86-.47999-1.44 0-.77333.26333-1.33.79-1.67s1.27337-.51 2.23997-.51c1.0067 0 1.7734.20667 2.3.62.5267.40667.79 1.09667.79 2.07v.68h1.71v-.75c0-.93333-.2-1.70667-.6-2.32-.3933-.62-.9533-1.08-1.68-1.38-.72-.30667-1.57-.46-2.55-.46-.9266 0-1.74.14333-2.43997.43-.7.28667-1.24667.70667-1.64 1.26-.38667.55333-.58 1.23-.58 2.03 0 .82.18333 1.51667.55 2.09003z"></path>
            </g>
          </svg>
  );
}
