import fetch from "node-fetch";
import Error from 'next/error';
import Stats from "../components/Stats";
import SEO from "../components/common/SEO";

export default ({ stats, country, countries }) => {
  if(!country) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <SEO title={countries.find(([_, item]) => item.iso2 === country)[1].name} />
      <Stats stats={stats} country={country} countries={countries} />
    </>
  )
};

export const getStaticPaths = async () => {
  const res = await fetch("https://covid19.mathdro.id/api/countries");
  const { countries } = await res.json();

  const paths = countries
    .filter((item) => typeof item.iso2 !== "undefined")
    .map(({ iso2 }) => ({
      params: {
        country: iso2 || "/404",
      },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { country } }) => {
  const res = await fetch(
    `https://covid19.mathdro.id/api/countries/${country}`
  );
  const data = await res.json();

  const resCountries = await fetch("https://covid19.mathdro.id/api/countries");
  const { countries } = await resCountries.json();

  return {
    revalidate: 8,
    props: {
      stats: data,
      countries: Object.entries(countries).filter(
        ([_, item]) => typeof item.iso2 !== "undefined"
      ),
      country,
    },
  };
};
