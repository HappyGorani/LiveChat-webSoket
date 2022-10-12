export const getSixIp = () => {
  const sixIp = fetch("https://geolocation-db.com/json/")
    .then((response) => response.json())
    .then((data) => {
      const ip = data.IPv4.split(".");
      ip.length = 2;
      return `${ip[0]}.${ip[1]}`;
    });

  return sixIp;
};
