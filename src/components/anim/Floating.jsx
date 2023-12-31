import React from "react";

export const Floating = () => {
  return (
    <div
      style={{
        animation: "rotateAndFloat 6s linear infinite",
        position: "fixed",
      }}
      className="h-96 opacity-40 blur-[150px] fixed top-0 left-0 right-0 bottom-0 -z-50"
    >
      <svg
        width="768"
        height="942"
        viewBox="0 0 512 628"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M229.43 288.702L282.022 62.0264L452.033 220.91L229.43 288.702Z"
          fill="#2F3EFD"
        />
        <circle
          cx="175.775"
          cy="268.797"
          r="116.387"
          transform="rotate(-106.498 175.775 268.797)"
          fill="#C003FF"
        />
        <rect
          x="278.745"
          y="497.552"
          width="234.211"
          height="234.211"
          transform="rotate(-106.498 278.745 497.552)"
          fill="#0AE6FD"
        />
        <path
          d="M46.3032 474.235L142.234 408.308L109.178 296.7L201.522 367.563L297.453 301.635L258.594 411.358L350.939 482.221L234.578 479.171L195.72 588.893L162.664 477.285L46.3032 474.235Z"
          fill="#FF4EDA"
        />
      </svg>
    </div>
  );
};
