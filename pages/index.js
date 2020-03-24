import fetch from "node-fetch";
import Stats from "../components/Stats";
import SEO from "../components/common/SEO";

export default ({ stats, countries }) => (
  <>
    <SEO />
    <Stats stats={stats} countries={countries} />
  </>
);

export const getStaticProps = async () => {
  const res = await fetch("https://covid19.mathdro.id/api");
  const data = await res.json();

  const resCountries = await fetch("https://covid19.mathdro.id/api/countries");
  const { countries } = await resCountries.json();

  return {
    revalidate: 8,
    props: {
      stats: data,
      countries: Object.entries(countries).filter(
        ([_, item]) => typeof item.iso2 !== "undefined"
      )
    }
  };
};
