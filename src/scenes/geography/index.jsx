import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="GEOGRAPHY CHART" subTitle="Simple Geography Chart" />
      <Box height="71vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
        <GeographyChart /> 
      </Box>
    </Box>
  );
};

export default Geography;
