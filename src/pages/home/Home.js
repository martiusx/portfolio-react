import HomeHeader from "./homeHeader";
import HomeContent from "./homeContent";
import HomeFooter from "./homeFooter";
import HomeNav from "./homeNav";

const Home = function () {
  return (
    <>
      <HomeNav />
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </>
  );
};

export default Home;
