let button = document.getElementById('button');
let output = document.getElementById('output')
let cps = 0;
let old_time = new Date();
let new_time = new Date();
let filter = 0.95
button.onclick = () => {
    new_time = new Date();
    let newCPS = 1000/(new_time - old_time)
    cps = filter * cps + (1-filter) * newCPS;
    if(newCPS <= 1){
        cps = 0
    }
    output.innerHTML = 'your cps is : ' + cps.toFixed(2)
    old_time = new_time
};