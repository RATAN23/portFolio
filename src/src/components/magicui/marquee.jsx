
export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 2,
  gap = '0.5rem',  // Default gap
  duration = '10s',  // Default duration
  ...props
}) {
  const direction = vertical ? 'vertical' : 'horizontal';
  const reverseDirection = reverse ? 'reverse' : 'normal';

  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: ${vertical ? 'translateY(0)' : 'translateX(0)'}; }
          100% { transform: ${vertical ? `translateY(calc(-100% - ${gap}))` : `translateX(calc(-100% - ${gap}))`}; }
        }

        .marquee {
          display : flex;
          overflow : hidden;
         
          padding: 2rem;
          --gap: ${gap};
        }

        .marquee-content {
          display : flex;
        
          animation: marquee var(--duration) linear infinite;
          animation-direction: ${reverseDirection};
          gap : var(--gap)
        }

        .marquee:hover .marquee-content {
          animation-play-state: ${pauseOnHover ? 'paused' : 'running'};
        }

        .vertical {
          flex-direction: column;
        }

        .horizontal {
          flex-direction: row;
        }
      `}</style>

      <div {...props} className={`marquee ${direction} ${className}`}>
        {Array(repeat).fill(0).map((_, i) => (
          <div key={i} className="px-2 marquee-content ">
            {children}
          </div>
        ))}
      </div>
    </>
  );
}

