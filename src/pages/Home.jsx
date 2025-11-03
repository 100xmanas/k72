import Video from "../components/home/Video";
import HomeTop from "../components/home/HomeTop";
import HomeBottom from "../components/home/HomeBottom";

function Home() {
  return (
    <>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>

      <div className="h-screen w-screen relative flex flex-col items-center justify-between py-2 pt-16">
        <HomeTop />
        <HomeBottom />
      </div>
    </>
  );
}

export default Home;
