let button = document.getElementById('button');
button.onclick = ()=> {
    let output = document.getElementById('output');
    let showGreeting;
    let randomGreeting = Math.floor(Math.random()*4);
    switch(randomGreeting){
        case 0:showGreeting = 'happy birthday'
        break;
        case 1: showGreeting = 'have a great year'
        break;
        case 2: showGreeting = 'you are a great dad'
        break;
        case 3: showGreeting = 'sssladkfjla;skdjf;alsdkjf;slkdjf;askdjf;k   sorry, too exited to type'
        break;
    }
    output.innerHTML = showGreeting;
}