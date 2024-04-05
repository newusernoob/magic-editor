var home = `<div class="auto"> <div class="center"> <label for="i1" onclick="">meus projetos</label> <input type="button"> </div> </div>`;var projects = ``;var editor = ``;

function page(part){
    document.querySelector('#app').innerHTML = part;
}

page(home);