let button = document.getElementById('button');
let output = document.getElementById('output');
let cps = 0;
let old_time = new Date();
let new_time = new Date();
let filter = 0.98;
let bestCPS = 0;
let graphDiv = document.getElementById('divdavdov');
graphDiv.style.height = '200px';
graphDiv.style.width = '1400px';
document.body.style.backgroundColor = "black";
button.onclick = () => {
    new_time = new Date();
    let newCPS = 1000/(new_time - old_time);
    if (cps == 0){
        cps=newCPS;
    }else{
        cps = filter * cps + (1-filter) * newCPS;
    }
    if(bestCPS < cps){
        bestCPS = cps;
    }
    if(newCPS <= 2){
        cps = 0;
        removeData(chart);
    }
    output.innerHTML = 'your cps is : ' + cps.toFixed(2);
    let bestOutput = document.getElementById('reord');
    bestOutput.innerHTML = 'your best is : ' + bestCPS.toFixed(2);
    old_time = new_time;
    if(cps>0){
    addData(chart,'',cps.toFixed(2));
    }
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
            label: 'cps',
            //backgroundColor: 'rgb(0, 0, 0)',
            borderColor: 'rgb(0, 255, 0)',
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
    
    
function removeData(chart) {
    chart.data.labels = [];
    chart.data.datasets.forEach((dataset) => {
        dataset.data = [];
    });
    chart.update();
}