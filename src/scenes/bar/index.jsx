import React from "react";
import BarChart from "../../components/BarChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";
// import { mockBarData as data } from "../../data/mockData";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subTitle="Simple Bar Chart" />
      <Box height="71vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
