import Link from "next/link";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { useRouter } from "next/router";
import { Flex, Item } from "react-flex-ready";
import { Doughnut, Bar } from "react-chartjs-2";
import flags from "emoji-flags";
import Container from "../common/Container";
import { Wrapper, Card, Countries, Flag, ChartWrapper, Source } from "./styles";

export default ({
  stats: { confirmed, recovered, deaths },
  country,
  countries,
  perDay
}) => {
  const dates = [];
  const comfirmedPerDay = [];
  const recoveredPerDay = [];
  const deathsPerDay = [];
  perDay.forEach(item => {
    dates.push(item?.reportDate);
    comfirmedPerDay.push(item?.confirmed?.total);
    recoveredPerDay.push(item?.recovered?.total);
    deathsPerDay.push(item?.deaths?.total);
  });
  const router = useRouter();
  const activeCases = confirmed?.value - deaths?.value - recovered?.value;
  return (
    <Wrapper as={Container}>
      {country && country !== "XK" && country !== "/" && (
        <Link
          href="/[country]/"
          as={`/${
            countries.find(([_, item]) => item.iso2 === country)[1].iso2
          }`}
        >
          <a>
            <Flag>
              {
                flags.countryCode(
                  countries.find(([_, item]) => item.iso2 === country)[1].iso2
                ).emoji
              }
            </Flag>
          </a>
        </Link>
      )}
      <Flex align="flex-start">
        <Item col={3} colTablet={12} colMobile={12} gap={1} marginBottom={30}>
          <Card color="#356bb1">
            <h1>Confirmed</h1>
            <p>
              <NumberFormat
                value={confirmed?.value}
                displayType={"text"}
                thousandSeparator={true}
              />
            </p>
          </Card>
        </Item>
        <Item col={3} colTablet={12} colMobile={12} gap={1} marginBottom={30}>
          <Card color="#8008e9">
            <h1>Active Cases</h1>
            <p>
              <NumberFormat
                value={activeCases}
                displayType={"text"}
                thousandSeparator={true}
              />
            </p>
          </Card>
        </Item>
        <Item col={3} colTablet={12} colMobile={12} gap={1} marginBottom={30}>
          <Card color="#f44336">
            <h1>Deaths</h1>
            <p>
              <NumberFormat
                value={deaths?.value}
                displayType={"text"}
                thousandSeparator={true}
              />
            </p>
          </Card>
        </Item>
        <Item col={3} colTablet={12} colMobile={12} gap={1}>
          <Card color="#09920f">
            <h1>Recovered</h1>
            <p>
              <NumberFormat
                value={recovered?.value}
                displayType={"text"}
                thousandSeparator={true}
              />
            </p>
          </Card>
        </Item>
      </Flex>
      <Countries>
        <label htmlFor="country">Select a country</label>
        <Select
          inputId="country"
          options={countries.map(([_, item]) => ({
            label: item.name,
            value: item.iso2,
          }))}
          onChange={(e) => router.push(`/${e.value}`)}
          defaultValue={{
            label: country
              ? countries.find(([_, item]) => item.iso2 === country)[1].name
              : "Select a country",
            value: country
              ? countries.find(([_, item]) => item.iso2 === country)[1].iso2
              : "Select a country",
          }}
        />
      </Countries>
      <ChartWrapper>
        <Doughnut
          data={{
            datasets: [
              {
                data: [deaths?.value, recovered?.value, activeCases],
                backgroundColor: ["#f44336", "#09920f", "#8008e9"],
                hoverBackgroundColor: ["#ff5252", "#00E676", "#9e3ff1"],
              },
            ],
            labels: ["Deaths", "Recovered", "Active"],
          }}
          width={160}
          height={256}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      </ChartWrapper>
      <ChartWrapper>
        <Bar
          data={{
            datasets: [ 
              {
                label: "Active",
                data: comfirmedPerDay,
                backgroundColor: "#8008e9",
                hoverBackgroundColor: "#8008e9",
              },
              {
                label: "Recovered",
                data: recoveredPerDay,
                backgroundColor: "#09920f",
                hoverBackgroundColor: "#09920f",
              },
              {
                label: "Deaths",
                data: deathsPerDay,
                backgroundColor: "#f44336",
                hoverBackgroundColor: "#f44336",
              },
            ],
            labels: dates,
          }}
          width={200}
          height={256}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      </ChartWrapper>
      <Source>
        <a
          href="https://github.com/smakosh/covid-19-next"
          target="__blank"
          rel="noopener noreferrer"
        >
          Contribute
        </a>
        <span>|</span>
        <a
          href="https://github.com/mathdroid/covid-19-api"
          target="__blank"
          rel="noopener noreferrer"
        >
          Data source
        </a>
      </Source>
    </Wrapper>
  );
};
