import { Flex, Item } from "react-flex-ready";
import { Doughnut } from "react-chartjs-2";
import NumberFormat from "react-number-format";
import Container from "../common/Container";
import { Wrapper, Card } from "./styles";

export default ({ stats: { confirmed, recovered, deaths } }) => (
  <Wrapper as={Container}>
    <Flex css="margin-bottom: 4rem;" align="flex-start">
      <Item col={4} colTablet={12} colMobile={12} gap={2} marginBottom={30}>
        <Card color="#5E35B1">
          <h1>Confirmed</h1>
          <p>
            <NumberFormat
              value={confirmed.value}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
        </Card>
      </Item>
      <Item col={4} colTablet={12} colMobile={12} gap={2} marginBottom={30}>
        <Card color="#f44336">
          <h1>Deaths</h1>
          <p>
            <NumberFormat
              value={deaths.value}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
        </Card>
      </Item>
      <Item col={4} colTablet={12} colMobile={12} gap={2}>
        <Card color="#4CAF50">
          <h1>Recovered</h1>
          <p>
            <NumberFormat
              value={recovered.value}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
        </Card>
      </Item>
    </Flex>
    <Doughnut
      data={{
        datasets: [
          {
            data: [deaths.value, recovered.value, confirmed.value],
            backgroundColor: ["#f44336", "#4CAF50", "#5E35B1"],
            hoverBackgroundColor: ["#ff5252", "#00E676", "#7C4DFF"]
          }
        ],
        labels: ["Deaths", "Recovered", "Confirmed"]
      }}
      width={100}
      height={40}
      options={{
        legend: {
          display: true,
          position: "bottom"
        }
      }}
    />
  </Wrapper>
);
