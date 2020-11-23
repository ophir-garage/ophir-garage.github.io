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
    if(newCPS <= 1){
        cps = 0
    }
    output.innerHTML = 'your cps is : ' + cps.toFixed(2);
    let bestOutput = document.getElementById('reord');
    bestOutput.innerHTML = 'your best is : ' + bestCPS.toFixed(2);
    old_time = new_time
    setTimeout(() => {
        if(newCPS <= 1){
            cps = 0
        }
    }, 1000);
};