type MillisecondProp = {
  milliseconds: number;
};
export const MillisecondsToMinutesSeconds = ({
  milliseconds,
}: MillisecondProp) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);

  return (
    <span>
      {minutes}:{seconds}
    </span>
  );
};
