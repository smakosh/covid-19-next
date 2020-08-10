import fetch from "node-fetch";
import Stats from "../components/Stats";
import SEO from "../components/common/SEO";

export default ({ stats, countries, perDay }) => (
  <>
    <SEO />
    <Stats stats={stats} countries={countries} perDay={perDay} />
  </>
);

export const getStaticProps = async () => {
  const res = await fetch("https://covid19.mathdro.id/api");
  const data = await res.json();

  const resCountries = await fetch("https://covid19.mathdro.id/api/countries");
  const { countries } = await resCountries.json();

  const resPerDay = await fetch("https://covid19.mathdro.id/api/daily");
  let totalPerDay = await resPerDay.json();

  return {
    revalidate: 8,
    props: {
      stats: data,
      countries: Object.entries(countries).filter(
        ([_, item]) => typeof item.iso2 !== "undefined"
      ),
      perDay: totalPerDay
    }
  };
};
