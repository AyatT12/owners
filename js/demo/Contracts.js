//First_Time_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 42; // Define the percentage value
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
  ['9 pm - 1 am', percentage],
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
chart.container('First_Time_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.center().content(label);
chart.draw();
//Second_Time_Charts ///////////////////////////////////////////////////////////////////////
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
  ['3 pm - 5 pm', percentage],
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
chart.container('Second_Time_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.center().content(label);
chart.draw();

//Third_Time_Charts ///////////////////////////////////////////////////////////////////////
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
  ['7 am - 9 am', percentage],
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
chart.container('Third_Time_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.center().content(label);
chart.draw();



//First_Distance_Charts ///////////////////////////////////////////////////////////////////////
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
  ['130 كم', percentage],
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
chart.container('First_Distance_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.center().content(label);
chart.draw();
//Second_Distance_Charts ///////////////////////////////////////////////////////////////////////
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
  ['167 كم', percentage],
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
chart.container('Second_Distance_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.center().content(label);
chart.draw();
//Third_Distance_Charts ///////////////////////////////////////////////////////////////////////
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
  ['90 كم  ', percentage],
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
chart.container('Third_Distance_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.center().content(label);
chart.draw();