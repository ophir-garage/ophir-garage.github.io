let button = document.getElementById('button');
let output = document.getElementById('output')
let cps = 0;
let old_time = new Date();
let new_time = new Date();
let filter = 0.95
let bestCPS = 0
button.onclick = () => {
    new_time = new Date();
    let newCPS = 1000/(new_time - old_time)
    cps = filter * cps + (1-filter) * newCPS;
    if(bestCPS < cps){
        bestCPS = cps
    }
    if(newCPS <= 0.5){
        cps = 0
        
    }
    output.innerHTML = 'your cps is : ' + cps.toFixed(2);
    let bestOutput = document.getElementById('reord');
    bestOutput.innerHTML = 'your best is : ' + bestCPS.toFixed(2);
    old_time = new_time;

    addData(chart,'0',cps);
};

// graph plot
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            lineTension: 0,
            //label: 'My First dataset',
            //backgroundColor: 'rgb(255, 99, 132)',
            //borderColor: 'rgb(255, 99, 132)',
            data: []
        }]
    },

    // Configuration options go here
    options: {}
});

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
    removeData(chart)
    
function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}