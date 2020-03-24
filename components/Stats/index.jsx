import NumberFormat from "react-number-format";
import Select from "react-select";
import { useRouter } from "next/router";
import { Flex, Item } from "react-flex-ready";
import { Doughnut } from "react-chartjs-2";
import flags from "emoji-flags";
import Container from "../common/Container";
import { Wrapper, Card, Countries, Flag, ChartWrapper } from "./styles";

export default ({
  stats: { confirmed, recovered, deaths },
  country,
  countries
}) => {
  const router = useRouter();
  const activeCases = confirmed?.value - deaths?.value - recovered?.value;
  return (
    <Wrapper as={Container}>
      {country && (
        <Flag>
          {
            flags.countryCode(
              countries.find(([_, item]) => item.name === country)[1].iso2
            ).emoji
          }
        </Flag>
      )}
      <Flex align="flex-start">
        <Item col={3} colTablet={12} colMobile={12} gap={1} marginBottom={30}>
          <Card color="#5E35B1">
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
          <Card color="#ffb700">
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
          <Card color="#4CAF50">
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
        <Select
          options={countries.map(([_, item]) => ({
            label: item.name,
            value: item.name
          }))}
          onChange={e => router.push(`/${e.value}`)}
          defaultValue={{
            label: country
              ? countries.find(([_, item]) => item.name === country) && country
              : "Select a country",
            value: country
              ? countries.find(([_, item]) => item.name === country) && country
              : "Select a country"
          }}
        />
      </Countries>
      <ChartWrapper>
        <Doughnut
          data={{
            datasets: [
              {
                data: [deaths?.value, recovered?.value, activeCases],
                backgroundColor: ["#f44336", "#4CAF50", "#ffb700"],
                hoverBackgroundColor: ["#ff5252", "#00E676", "#ffb700"]
              }
            ],
            labels: ["Deaths", "Recovered", "Active"]
          }}
          width={160}
          height={256}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: "bottom"
            }
          }}
        />
      </ChartWrapper>
    </Wrapper>
  );
};
