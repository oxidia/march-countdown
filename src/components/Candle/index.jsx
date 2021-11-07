import clsx from "clsx";
import styles from "styles/candle.module.css";

function Candle(props) {
  const { value } = props;
  return (
    <div className="relative h-full w-full text-center rounded-md bg-candle-green-800 shadow-neumorphism dark:shadow-darkNeumorphism overflow-hidden">
      <div className={clsx("h-96 w-96 overflow-hidden")}>
        {value < 100 ? (
          <div
            className={clsx(
              "inline-block relative h-full w-full p-5",
              styles.candleInnerContainer
            )}
            style={{ marginTop: value / 2 + "%" }}
          >
            <div
              className={clsx(
                "h-full w-full p-5 bg-candle-green-700 rounded-full opacity-0",
                styles.lightCircleAnimation1
              )}
            >
              <div
                className={clsx(
                  "h-full w-full p-5 bg-candle-green-600 rounded-full opacity-0",
                  styles.lightCircleAnimation2
                )}
              >
                <div
                  className={clsx(
                    "h-full w-full p-5 bg-candle-green-500 rounded-full opacity-0",
                    styles.lightCircleAnimation3
                  )}
                >
                  <div
                    className={clsx(
                      "h-full w-full p-5 bg-candle-green-400 rounded-full opacity-0",
                      styles.lightCircleAnimation4
                    )}
                  >
                    <div
                      className={clsx(
                        "h-full w-full p-5 bg-candle-green-300 rounded-full opacity-0",
                        styles.lightCircleAnimation5
                      )}
                    >
                      <div
                        className={clsx(
                          "h-full w-full p-5 bg-candle-green-200 rounded-full opacity-0",
                          styles.lightCircleAnimation6
                        )}
                      >
                        <div
                          className={clsx(
                            "h-full w-full p-5 bg-candle-green-100 rounded-full opacity-0",
                            styles.lightCircleAnimation7
                          )}
                        >
                          <div
                            className={clsx(
                              "h-full w-full p-5 bg-candle-green-50 rounded-full opacity-0",
                              styles.lightCircleAnimation8
                            )}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={clsx(styles.candleAnimation)}>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-36 w-32 bg-gradient-to-br from-candle-green-800 via-candle-green-700 to-candle-green-700">
                <div className="absolute -top-16 left-0 h-32 w-32 bg-gradient-to-tl from-candle-green-200 via-candle-green-200 to-candle-green-100 rounded-full transform scale-y-25">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 h-24 w-2 bg-black rounded-full"></div>
                </div>
                <div
                  className={clsx(
                    "absolute -top-16 left-1/2 transform -translate-x-1/2 h-10 w-10 bg-white rounded-b-4xl rounded-l-4xl -rotate-45 opacity-0",
                    styles.fireAnimation1
                  )}
                >
                  <div
                    className={clsx(
                      "absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-7 w-7 bg-red rounded-b-4xl rounded-l-4xl",
                      styles.fireAnimation2
                    )}
                  >
                    <div
                      className={clsx(
                        "absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-4 w-4 bg-yellow-500 rounded-b-4xl rounded-l-4xl",
                        styles.fireAnimation3
                      )}
                    ></div>
                  </div>
                </div>
                <div className={clsx("opacity-0", styles.dropAnimation1)}>
                  <div
                    className={clsx(
                      "absolute top-5 -left-1 h-3 w-3 bg-candle-green-500 rounded-b-4xl rounded-l-4xl transform -rotate-45"
                    )}
                  ></div>
                </div>
                <div className={clsx("opacity-0", styles.dropAnimation2)}>
                  <div
                    className={clsx(
                      "absolute top-5 left-10 h-4 w-4 bg-candle-green-600 rounded-b-4xl rounded-l-4xl transform -rotate-45"
                    )}
                  ></div>
                </div>
                <div className={clsx("opacity-0", styles.dropAnimation3)}>
                  <div
                    className={clsx(
                      "absolute top-5 left-15 h-5 w-5 bg-candle-green-600 rounded-b-4xl rounded-l-4xl transform -rotate-45"
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="absolute top-1/2 right-32 transform -translate-y-1/2 text-white text-left">
        <p
          className={clsx(
            "invisible sm:visible sm:text-3xl lg:text-5xl xl:text-7xl font-bold opacity-0",
            styles.showAnimation500
          )}
        >
          Lorem Ipsum
        </p>
        <p
          className={clsx(
            "mt-3 invisible sm:visible sm:text-xl lg:text-3xl xl:text-5xl font-regular opacity-0",
            styles.showAnimation1000
          )}
        >
          Lorem Ipsum
        </p>
      </div>
    </div>
  );
}

export default Candle;
