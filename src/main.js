var home = `<div class="auto"> <div class="center"> <label onclick="page(projects);">meus projetos</label> <br> <label onclick="page(configurations);">configurações</label> </div> </div>`;
var configurations = `<div class="auto"> <div class="center"> <input type="text" placeholder="cor de fundo"> <input type="text" placeholder=" cor de fonte"> <input type="text" placeholder="cor de caixa"> <br> <label onclick="localStorage.setiten('configurado', true); page(home)"></label> </div> </div>`;
var projects = `<div class="auto"> <div class="center"> <label class="box">+</label> </div> <div class="center"><content style="display: none;"> <input type="text"> <label style="background: rgb(95, 95, 255)" onclick="page(editor)">crir</label> </content> </div> </div>`;
var editor = `<div class="auto"> <div class="right"> </div> </div>`;

function page(part){
    document.querySelector('#app').innerHTML = part;
}

page(home);