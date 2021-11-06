import { useRef } from "react";
import Head from "next/head";
import Countdown, { zeroPad } from "react-countdown";
import Finished from "src/components/Finished";

export default function Home() {
  const endDateRef = useRef(new Date("2022-03-31"));

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Finished />;
    } else {
      return (
        <>
          <div>
            <time className="text-8xl">
              {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
            </time>
          </div>
          <div className="text-4xl text-center">{days} days left</div>
        </>
      );
    }
  };
  return (
    <div className="text-center">
      <Head>
        <title>March Countdown</title>
      </Head>
      <Countdown date={endDateRef.current} renderer={renderer} />
    </div>
  );
}
