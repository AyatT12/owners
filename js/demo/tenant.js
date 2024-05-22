//First_City_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 15.55; // Define the percentage value
var label = anychart.standalones.label();
label
  .useHtml(true)
  .text(
    '<span style = "color: #313136; font-weight:600">' + percentage + '%</span>'
  )
  .position('center')
  .anchor('center')
  .hAlign('center')
  .vAlign('middle');
var data = anychart.data.set([
  ['مكة', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#9747FF' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('First_City_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.center().content(label);
chart.draw();
//Second_City_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 35.58; // Define the percentage value
var label = anychart.standalones.label();
label
  .useHtml(true)
  .text(
    '<span style = "color: #313136; font-weight:600">' + percentage + '%</span>'
  )
  .position('center')
  .anchor('center')
  .hAlign('center')
  .vAlign('middle');
var data = anychart.data.set([
  ['المدينة المنورة', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#FF9F40' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('Second_City_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.center().content(label);
chart.draw();

//Third_City_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 25; // Define the percentage value
var label = anychart.standalones.label();
label
  .useHtml(true)
  .text(
    '<span style = "color: #313136; font-weight:600">' + percentage + '%</span>'
  )
  .position('center')
  .anchor('center')
  .hAlign('center')
  .vAlign('middle');
var data = anychart.data.set([
  ['الرياض', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#4BC0C0' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('Third_City_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.center().content(label);
chart.draw();



//First_Ages_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 15.5; // Define the percentage value
var label = anychart.standalones.label();
label
  .useHtml(true)
  .text(
    '<span style = "color: #313136; font-weight:600">' + percentage + '%</span>'
  )
  .position('center')
  .anchor('center')
  .hAlign('center')
  .vAlign('middle');
var data = anychart.data.set([
  ['أقل من 20  ', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#9747FF' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('First_Ages_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.center().content(label);
chart.draw();
//Second_Ages_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 35.58; // Define the percentage value
var label = anychart.standalones.label();
label
  .useHtml(true)
  .text(
    '<span style = "color: #313136; font-weight:600">' + percentage + '%</span>'
  )
  .position('center')
  .anchor('center')
  .hAlign('center')
  .vAlign('middle');
var data = anychart.data.set([
  ['أكثر من 60', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#FF9F40' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('Second_Ages_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.center().content(label);
chart.draw();
//Third_Ages_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 25; // Define the percentage value
var label = anychart.standalones.label();
label
  .useHtml(true)
  .text(
    '<span style = "color: #313136; font-weight:600">' + percentage + '%</span>'
  )
  .position('center')
  .anchor('center')
  .hAlign('center')
  .vAlign('middle');
var data = anychart.data.set([
  ['من 21 إلى 30', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#4BC0C0' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('Third_Ages_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.center().content(label);
chart.draw();