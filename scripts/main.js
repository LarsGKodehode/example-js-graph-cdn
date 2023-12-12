/// <reference path="../index.d.ts" />

// Generate some points
const datasetA = [13, 23, 41, 12, 32]
const xAxisLabelsA = [1, 2, 3, 4, 5]

new Chart(
  document.getElementById("chart-a"),
  {
    type: "line",
    data: {
      labels: xAxisLabelsA,
      datasets: [{
        label: 'My First Dataset',
        data: datasetA,
      }]
    },
  }
)

// Generate some points
const numberOfPoints = 10
// Yhea... Generating arrays in JavaScript is not nice
const datasetB = Array(numberOfPoints).fill("").map(() => Math.floor(Math.random() * 100))
const xAxisLabelsB = Array(datasetB.length).fill("").map((_, i) => i)

new Chart(
  document.getElementById("chart-b"),
  {
    type: "line",
    data: {
      labels: xAxisLabelsB,
      datasets: [{
        label: 'My Second Dataset',
        data: datasetB,
      }]
    },
  }
)
