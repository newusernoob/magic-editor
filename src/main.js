const home = `
<div class="auto">
    <div class="center">
        <label for="i1">botão</label>
        <input type="button" id="i1">
    </div>
</div>
`
const projects = `
<div class="auto">
    <div class="center">
        <label for="i1"><img src="img/icon.png"></img></label>
        <input type="button" id="i1">
    </div>
    <div class="box">
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
document.querySelector('#app').innerHTML = projects;