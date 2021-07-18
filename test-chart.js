 var labels = [ 'January', 'February', 'March', 'April', 'May', 'June'];

 var data = {
     labels: labels, 
     datasets: [{
         label: '初めてのグラフ用データセット',
         borderColor: 'rgb(130, 60, 70)',
         backgroundColor: 'rgb(255, 100, 130)',
         data: [0, 10, 15, 3, 60, 10],
     }]
 };

 var config = {
     type: 'line',
     data,
     options: {},
 };

 var LineChart = new Chart(
     document.getElementById('LineChart'),
     config,
 );