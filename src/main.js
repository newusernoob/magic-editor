var home = `<div class="auto"> <div class="center"> <label onclick="page(projects);">meus projetos</label> </div> </div>`;
var configurations = ``;
var projects = `<div class="auto"> <div class="center"> <label class="box">+</label> </div> <div class="center"><content style="display: none;"> <input type="text"> <label style="background: rgb(95, 95, 255)" onclick="page(editor)">crir</label> </content> </div> </div>`;
var editor = ``;

function page(part){
    document.querySelector('#app').innerHTML = part;
}

page(home);