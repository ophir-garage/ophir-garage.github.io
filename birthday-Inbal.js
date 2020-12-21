let button = document.getElementById('button');
button.onclick = ()=> {
    let output = document.getElementById('output');
    let showGreeting;
    let randomGreeting = Math.floor(Math.random()*3);
    switch(randomGreeting){
        case 0:showGreeting = 'happy birthday'
        break;
        case 1: showGreeting = 'have a great year'
        break;
        case 2:
        case 3: showGreeting = 'you are a great friand'
        break;
    }
    output.innerHTML = showGreeting;
}