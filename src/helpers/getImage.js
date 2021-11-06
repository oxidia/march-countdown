export default function getImage(days) {
  if (days <= 10) {
    return {
      colorClassName: "text-dark-red",
      url: "/images/sad-extra.png"
    };
  }

  if (days <= 30) {
    return {
      colorClassName: "text-red",
      url: "/images/sad.png"
    };
  }

  if (days <= 40) {
    return {
      colorClassName: "text-orange",
      url: "/images/surprise.png"
    };
  }

  return {
    colorClassName: "text-green",
    url: "/images/happy.png"
  };
}
