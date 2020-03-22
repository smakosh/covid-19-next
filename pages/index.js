import Head from "next/head";
import fetch from "node-fetch";
import Stats from "../components/Stats";

const Home = ({ stats }) => (
  <div className="container">
    <Head>
      <title>Corona stats</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
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
