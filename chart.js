google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawbearingChart);
  function drawbearingChart() {
    var data = google.visualization.arrayToDataTable([
      ['Failure', '% of reason'],
      ['Lubrication',     11],
      ['Corrosion',      4],
      ['Other',  5],
      ['Overloading', 4],
      ['Misalignment',    13],
      ['Disassembly',    15],
      ['Particle Contamination',     48],
    ]);

    var options = {
      is3D: true,
      colors: ['#003675', '#b0181d', '#888C8F', '#002A5B', '#b5b6b9', '#dcdcdc', '#dd1e25'],
      'legend': {position: 'right', alignment:'center'},
      'chartArea':{'top':'0'},
    };

    var chart = new google.visualization.PieChart(document.getElementById('bearing_protection'));
    chart.draw(data, options);
    function resizeHandler () {
      chart.draw(data, options);
    }
    if (window.addEventListener) {
      window.addEventListener('resize', resizeHandler, false);
    }
    else if (window.attachEvent) {
      window.attachEvent('oneresize', resizeHandler);
    }
  }

  google.charts.load("current",{packages:["corechart"]});
  google.charts.setOnLoadCallback(drawsealChart);
  function drawsealChart() {
    var data = google.visualization.arrayToDataTable([
      ['Failure', '% of reason'],
      ['Seal System',     22],
      ['Operations',      37],
      ['Bearing',  13],
      ['Workshop', 7],
      ['Install/Align',    5],
      ['Process',    12],
      ['Seal',     4],
   ]);

   var options = {
     'legend':{position:'left', alignment:'center'},
     is3D: true,
     colors: ['#dd1e25', '#dcdcdc', '#b5b6b9', '#003675', '#888C8F','#002A5B', '#a8bfd9' ],
     'chartArea':{'top':'0'},
   };

    var chart = new google.visualization.PieChart(document.getElementById('seal_support'));
    chart.draw(data, options);

    function resizeHandler () {
      chart.draw(data, options);
    }
    if (window.addEventListener) {
      window.addEventListener('resize', resizeHandler, false);
    }
    else if (window.attachEvent) {
      window.attachEvent('oneresize', resizeHandler);
    }
  }
