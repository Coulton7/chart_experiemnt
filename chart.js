<script type="text/javascript">
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
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
