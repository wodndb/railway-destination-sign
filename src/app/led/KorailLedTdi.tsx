type KorailLedTdi = {
  destination: string;
};

// KORAIL LED TDI(Train Destination Indicator)
// Specification
// - DotMatrix Unit: 16 x 16 LED
// - Resolution: 192 x 48 px (12 x 3 Unit)
export function KorailLedTdi({ destination }: KorailLedTdi) {
  let destinationText = "";
  if (destination.length <= 0 || destination.length >= 4) {
    throw new Error("Destination string length should be between 1 to 3");
  }

  if (destination.length === 1) {
    destinationText = `  ${destination}  `;
  } else if (destination.length === 2) {
    destinationText = `${destination[0]}  ${destination[1]}`;
  } else {
    destinationText = destination;
  }

  return (
    <svg viewBox="0 0 192 48" xmlns="http://www.w3.org/2000/svg" fill="gray">
      <defs>
        <mask id="ledHole">
          <rect x="0" y="0" width="1" height="11" fill="white" />
          <circle cx="0.5" cy="0.5" r="0.4" fill="black" />
        </mask>
        <pattern id="ledUnit" viewBox="0,0,1,1" width="6.25%" height="6.25%">
          <rect
            x="0"
            y="0"
            width="1"
            height="1"
            fill="black"
            mask="url(#ledHole)"
          />
        </pattern>
        <pattern id="dotMatUnit" viewBox="0,0,16,16" width="100%" height="100%">
          <rect x="0" y="0" width="16" height="16" fill="url(#ledUnit)" />
        </pattern>
        <pattern
          id="dotMatFull"
          viewBox="0,0,16,16"
          width="8.33333%"
          height="33.33333%"
        >
          <rect x="0" y="0" width="16" height="16" fill="url(#dotMatUnit)" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="576" height="144" fill="grey" />
      <text
        className="whitespace-pre"
        x="0"
        y="16"
        dy="-3"
        fill="lightgreen"
        fontSize="16"
        fontFamily="dung-guen-mo"
      >
        {`  이번열차 :        행`}
      </text>
      <text
        className="whitespace-pre"
        x={104}
        y="16"
        dy="-3"
        fill="yellow"
        fontSize="16"
        fontFamily="dung-guen-mo"
      >
        {destinationText}
      </text>
      <text
        className="whitespace-pre"
        x={0}
        y={16 + 24}
        dy="-3"
        fill="lightgreen"
        fontSize="16"
        fontFamily="dung-guen-mo"
      >
        {`열차가        도착합니다`}
      </text>
      <text
        className="whitespace-pre"
        x={56}
        y={16 + 24}
        dy="-3"
        fill="coral"
        fontSize="16"
        fontFamily="dung-guen-mo"
      >
        {`잠시후`}
      </text>
      <rect x="0" y="0" width="192" height="48" fill="url(#dotMatFull)" />
    </svg>
  );
}
