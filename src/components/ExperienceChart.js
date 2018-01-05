import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';

const chartOptions = {
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each bar to be 2px wide and green
  elements: {
    rectangle: {
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,.8)',
      borderSkipped: 'bottom'
    }
  },
  responsive: true,
  title: {
    display: false
  },
  scales: {
    yAxes: [{
        ticks: {
            beginAtZero:true
        }
    }]
  }
}

const chartData = {
  labels: [
    "HTML",
    "CSS",
    "Javascript",
    "PHP",
    "Ruby",
    "SCSS"
  ],
  datasets: [
    {
      label: "Years of experience",
      data: [
        22, 15, 20, 13, 8, 8
      ],
      backgroundColor: "rgba(255,255,255,.8)"
    }
  ]
}

class ExperienceChart extends Component {
 render() {
  return (
   <Bar data={chartData} options={chartOptions}/>
  )
 }
}
export default ExperienceChart;
