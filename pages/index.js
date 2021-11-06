import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Countdown, { zeroPad } from "react-countdown";
import Finished from "src/components/Finished";
import classNames from "classnames";
import getImage from "src/helpers/getImage";

export default function Home() {
  const endDateRef = useRef(new Date("2022-03-31"));

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Finished />;
    } else {
      const { colorClassName, url } = getImage(days);

      return (
        <>
          <div>
            <time className="text-8xl">
              {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
            </time>
          </div>
          <div className="flex justify-center items-center text-4xl">
            <Image src={url} width={32} height={32} />
            <div className={classNames("ml-2", colorClassName)}>
              {days} days left
            </div>
          </div>
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
