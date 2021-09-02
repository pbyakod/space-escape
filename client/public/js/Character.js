let x = ["Health","Ship Health","Gold"]
let y = ["100","110","300"]

var data = [
  {
    histfunc: "sum",
    y: y,
    x: x,
    type: "histogram",
    name: "sum"
  }
]

Plotly.newPlot('status', data)

setTimeout(function() {
  y = ["150","150","330"];
  Plotly.newPlot('status', data);
  console.log("time out");
}, 2000)