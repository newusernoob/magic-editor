const home = `
<div class="auto">
    <div class="center">
        <label for="i1" onclick="page(projects)">meus projetos</label>
        <input type="button" id="i1">
        <label for=""></label>
        <input id=">
    </div>
</div>
`
const projects = `
<div class="auto">
    <div class="center">
        <label for="i1"" style="font-size:75px" 
        onclick="
            page(projects);
            document.querySelector('#box').style.opacity = 0;
        ">+</label>
        <input type="button" id="i1">
    </div>
    <div class="box" id="box">
        <div class="center">
            <input type="text" id="i2">
        </div>
    </div>
</div>
`
const editor = `
<div>
    
</div>
`

function page(part){
    document.querySelector('#app').innerHTML = part;
}

page(home);