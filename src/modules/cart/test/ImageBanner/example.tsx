// App.tsx

import ImageBanner from "./ImageBanner";

const images = [
  "https://s.pstatic.net/static/www/mobile/edit/20231016_1095/upload_1697416662735yT2fo.png",
  "https://s.pstatic.net/static/www/mobile/edit/20230524_1095/upload_1684893984366Ka03q.jpg",
  "https://s.pstatic.net/static/www/mobile/edit/20231016_1095/upload_1697415015020UZVOX.jpg",
];

const Example = () => {
  return (
    <div>
      <h1>Image Banner Example</h1>
      <ImageBanner images={images} />
    </div>
  );
};

export default Example;
