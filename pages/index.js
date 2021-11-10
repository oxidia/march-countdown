import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Countdown, { zeroPad } from "react-countdown";
import Finished from "src/components/Finished";
import Candle from "src/components/Candle";
import classNames from "classnames";
import getImage from "src/helpers/getImage";
import imageStyles from "styles/image.module.css";
import countdownStyles from "styles/countdown.module.css";
import styles from "styles/styles.module.css";
import LightIcon from "src/icons/light";
import useTheme from "src/hooks/useTheme";

export default function Home() {
  const endDateRef = useRef(new Date(Date.UTC(2022, 02, 30, 23)));
  const { toggleTheme } = useTheme();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Finished />;
    } else {
      const { colorClassName, url } = getImage(days);

      return (
        <>
          <time className="text-4xl md:text-5xl lg:text-8xl font-thin text-black dark:text-white">
            <div
              className={classNames(
                "inline-block relative m-5 h-20 w-20 md:h-30 md:w-30 lg:h-40 lg:w-40 text-center bg-neumorphism-white dark:bg-neumorphism-black rounded-lg border-4 border-neumorphism-white-secondary dark:border-neumorphism-black-secondary shadow-neumorphism dark:shadow-darkNeumorphism opacity-0",
                countdownStyles.countdownAnimation1
              )}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {zeroPad(hours)}
                <p className="text-sm font-black">Hours</p>
              </div>
            </div>

            <div
              className={classNames(
                "inline-block relative m-5 h-20 w-20 md:h-30 md:w-30 lg:h-40 lg:w-40 text-center bg-neumorphism-white dark:bg-neumorphism-black rounded-lg border-4 border-neumorphism-white-secondary dark:border-neumorphism-black-secondary shadow-neumorphism dark:shadow-darkNeumorphism opacity-0",
                countdownStyles.countdownAnimation2
              )}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {zeroPad(minutes)}
                <p className="text-sm font-black">Minutes</p>
              </div>
            </div>

            <div
              className={classNames(
                "inline-block relative m-5 h-20 w-20 md:h-30 md:w-30 lg:h-40 lg:w-40 text-center bg-neumorphism-white dark:bg-neumorphism-black rounded-lg border-4 border-neumorphism-white-secondary dark:border-neumorphism-black-secondary shadow-neumorphism dark:shadow-darkNeumorphism opacity-0",
                countdownStyles.countdownAnimation3
              )}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {zeroPad(seconds)}
                <p className="text-sm font-black">Seconds</p>
              </div>
            </div>
          </time>
          <div className={classNames("opacity-0", styles.showAnimation500)}>
            <p className="inline-block mt-2 py-1 px-2 bg-black dark:bg-white font-semibold text-white dark:text-black rounded-md shadow-lg">
              March countdown
            </p>
          </div>
          <div
            className={classNames(
              "flex mt-5 justify-center items-center text-3xl text-black dark:text-white opacity-0",
              styles.showAnimation1000
            )}
          >
            <Image src={url} width={32} height={32} />
            <div className={classNames("ml-2", colorClassName)}>
              {days == 1 ? "1 day left" : `${days} days left`}
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div>
      <Head>
        <title>March Countdown</title>
      </Head>
      <div className="min-h-screen p-10 text-center bg-neumorphism-white dark:bg-neumorphism-black">
        <div className="container m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-neumorphism-white dark:bg-neumorphism-black rounded-lg border-4 border-neumorphism-white-secondary dark:border-neumorphism-black-secondary shadow-neumorphism dark:shadow-darkNeumorphism overflow-hidden">
              <img
                className={classNames(
                  "h-full w-full rounded-lg object-cover",
                  imageStyles.imageAnimation
                )}
                src={"/images/ken.jpg"}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="p-10 bg-neumorphism-white dark:bg-neumorphism-black rounded-lg border-4 border-neumorphism-white-secondary dark:border-neumorphism-black-secondary shadow-neumorphism dark:shadow-darkNeumorphism">
              <Countdown date={endDateRef.current} renderer={renderer} />
            </div>
          </div>
          <div className="m-auto mt-10">
            <Candle value={0} />
          </div>
        </div>
        <div className="mt-10 font-bold dark:text-white">!silentCorner</div>
      </div>
      <div
        className="fixed top-5 right-5 cursor-pointer p-3 rounded-full bg-neumorphism-white dark:bg-neumorphism-black border-4 border-neumorphism-white-secondary dark:border-neumorphism-black-secondary shadow-neumorphism dark:shadow-darkNeumorphism text-black dark:text-white"
        onClick={toggleTheme}
      >
        {<LightIcon className="h-7 w-7" />}
      </div>
    </div>
  );
}
