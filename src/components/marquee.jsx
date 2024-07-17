import React from "react";

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical,
  repeat = 10,
  gap = "0.5rem", // Default gap
  duration = "20s", // Default duration
  ...props
}) {
  const direction = vertical ? "vertical" : "horizontal";
  const reverseDirection = reverse ? "reverse" : "normal";
  const contentClassName = `marquee-content ${reverseDirection}`;
  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: ${vertical ? "translateY(0)" : "translateX(0)"};
          }
          100% {
            transform: ${vertical
              ? `translateY(calc(-100% - ${gap}))`
              : `translateX(calc(-100% - ${gap}))`};
          }
        }

        .marquee {
          display: flex;
          overflow: hidden;
          padding: 2rem;
          --gap: ${gap};
        }

        .marquee-content {
          display: flex;
          animation: marquee ${duration} linear infinite;
          gap: var(--gap);
        }

        .marquee-content.reverse {
          animation-direction: reverse;
        }

        .marquee:hover .marquee-content {
          animation-play-state: ${pauseOnHover ? "paused" : "running"};
        }

        .vertical {
          flex-direction: column;
        }

        .horizontal {
          flex-direction: row;
        }
      `}</style>

      <div className={`marquee  ${direction} ${className}`}>
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div key={i} className={`px-5 ${contentClassName}`}>
              {children}
            </div>
          ))}
      </div>
    </>
  );
}
