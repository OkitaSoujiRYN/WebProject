let rotateL = 0;
function create_robot(){
    let bender = document.createElement('img');
    bender.src = "../img/cake.png";
    bender.style.height = "100px";
    bender.style.position = "absolute";
    bender.style.top = "0px";
    bender.style.left = "0px";
    bender.style.transition = "all 2s";
    bender.id = "bender";
    document.body.append(bender);
}

function create_cake(){
    let cake = document.createElement('img');
    cake.src="../img/cake.png";
    cake.style.transition="all 2s";
    cake.style.left = `${parseInt(bender.style.left)}px`;
    cake.style.top = `${parseInt(bender.style.top)}px`;
    cake.style.height="50px";
    cake.style.position="absolute";
    cake.id = "cake";
    document.body.append(cake);  
}

function move_bot_right()
{
    bender.style.left = `${parseInt(bender.style.left)+100}px`;

}
function move_bot_left()
{
    bender.style.left = `${parseInt(bender.style.left)-100}px`;
    
}
function move_bot_down()
{
    bender.style.top = `${parseInt(bender.style.top)+100}px`;
    
}
function move_bot_up()
{
    bender.style.top = `${parseInt(bender.style.top)-100}px`;
    
}

function cake()
{  
    create_cake();

}
function activate_bot()
{
    const taskTd = document.createElement('td');
    taskTd.textContent = document.newTaskF.tache.value;
    console.log(taskTd.textContent);
    get_bot_action(taskTd.textContent)
}


function get_bot_action(query)
{
    switch(query){
        case "BOT_RUN":
            alert("BOT GO");
            return create_robot();

        case "BOT_UP":
            return move_bot_up();

        case "BOT_DOWN":
            return move_bot_down();

        case "BOT_RIGHT":
            return move_bot_right();

        case "BOT_LEFT":
            return move_bot_left();
        case "BOT_CAKE":
            return cake();
    } 
}

function get_bot_action1(){('keyup',(e) => {
    switch(e.key){
        case 'ArrowLeft':
            return move_bot_left;
        case 'ArrowRight':
            return move_bot_right;
        case 'ArrowUp':
            return move_bot_up;
        case 'ArrowDown':
            return move_bot_down;
    }
})}
