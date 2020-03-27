import fetch from "node-fetch";
import Stats from "../components/Stats";
import SEO from "../components/common/SEO";
import Router from "next/router";
import { LAST_VISITED_COUNTRY } from "../constants.js";
import {useEffect} from 'react';

export default function index({stats,countries}) {
  useEffect(() => {
    const lastVisited = window.localStorage.getItem(LAST_VISITED_COUNTRY);
    const valueExistsAndValid =
      lastVisited && countries.some(e => e[1].iso2 === lastVisited);
    if (valueExistsAndValid) {
      Router.push(`/${lastVisited}`);
    }
    
  }, [])
  return (
    <>
        <SEO />
        <Stats stats={stats} countries={countries} />
      </>
  )
}


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
