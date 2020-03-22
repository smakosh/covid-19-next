import fetch from "node-fetch";
import Stats from "../components/Stats";
import SEO from "../components/common/SEO";

const Home = ({ stats }) => (
  <div className="container">
    <SEO />
    <Stats stats={stats} />
  </div>
);

export const getStaticProps = async () => {
  const res = await fetch("https://covid19.mathdro.id/api");
  const data = await res.json();

  return {
    props: {
      stats: data
    }
  };
};

export default Home;
