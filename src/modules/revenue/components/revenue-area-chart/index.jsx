import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { formatToUSD } from '../../../../utils/money';
import Divider from '../../../components/divider';
import LabelValue from '../../../components/label-value';
import { selectValidations } from '../../store/revenue.store';
import { extractSerieData } from './serie-extractor';
import './revenue-area-chart.scss';

const RevenueAreaChart = () => {
  const validations = useSelector(selectValidations);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const serieData = extractSerieData(validations);
    setSeries([
      {
        name: 'Net revenue',
        data: serieData,
      },
    ]);
  }, [validations]);

  return (
    <div className='revenue-area-chart'>
      <Divider thick />
      <div className='chart-legend'>
        <LabelValue text='Revenue' />
        <div className='net-revenue'>Net</div>
      </div>
      <Divider className='smaller-divider' />

      <Chart
        options={chartOptions}
        series={series}
        type='area'
        width='100%'
        height='320'
      />
    </div>
  );
};

const chartOptions = {
  chart: {
    axisBorder: {
      show: false,
    },
    fontFamily: 'Open Sans',
    toolbar: { show: false },
  },
  colors: ['#0099B7'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    colors: 'rgba(0, 153, 183, 0.25)',
    type: 'solid',
  },
  grid: {
    padding: {
      left: 0,
      right: 0,
    },
    row: {
      colors: ['rgba(255, 255, 255, 0.05', '#354659'],
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  markers: {
    colors: '#131B1F',
    hover: {
      size: 6,
    },
    size: 4,
    strokeColors: '#0099B7',
    strokeWidth: 2,
  },
  stroke: {
    colors: ['#0099B7'],
    curve: 'straight',
    width: 2,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      formatter: (value) => formatToUSD(value),
    },
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
    labels: {
      style: {
        cssClass: 'revenue-area-chart-xaxis-label',
      },
    },
    tickPlacement: 'between',

    type: 'category',
  },
  yaxis: {
    show: false,
  },
};

export default RevenueAreaChart;
