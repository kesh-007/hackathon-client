"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Slider from '@mui/material/Slider';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarAnimation({data}) {
//   const [seriesNb, setSeriesNb] = React.useState(2);
//   const [itemNb, setItemNb] = React.useState(5);
//   const [skipAnimation, setSkipAnimation] = React.useState(false);

  return (
    <Box sx={{ width: '100%' }}>
      <BarChart
        height={300}
        width={370}
        series={data
          .slice(0, 2)
          .map((s) => ({ ...s, data: s.data.slice(0, 5) }))}
        skipAnimation={false}
      />
    </Box>
  );
}

