import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {

  return (
    <Box m="20px">
      <Header title="PIE CHART" subTitle="Simple PIE Chart" />
      <Box height="70vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
