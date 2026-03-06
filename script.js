const canvas = document.getElementById("canvas")

function makeEditable(el){

el.classList.add("element")

el.onclick = function(){

let action = prompt("Type: edit / delete")

if(action==="delete"){
el.remove()
}

if(action==="edit"){
let text = prompt("Edit text",el.innerText)
if(text) el.innerText = text
}

}

}

function addHeading(){

let text = prompt("Heading text")

let h = document.createElement("h1")

h.innerText = text

makeEditable(h)

canvas.appendChild(h)

}

function addText(){

let text = prompt("Paragraph text")

let p = document.createElement("p")

p.innerText = text

makeEditable(p)

canvas.appendChild(p)

}

function addImage(){

let url = prompt("Image URL")

let img = document.createElement("img")

img.src = url

img.style.width="300px"

makeEditable(img)

canvas.appendChild(img)

}

function addButton(){

let text = prompt("Button text")

let btn = document.createElement("button")

btn.innerText = text

makeEditable(btn)

canvas.appendChild(btn)

}

function addVideo(){

let url = prompt("Paste YouTube embed link")

let iframe = document.createElement("iframe")

iframe.src = url

iframe.width="400"

iframe.height="250"

makeEditable(iframe)

canvas.appendChild(iframe)

}

function changeBackground(){

let color = prompt("Enter background color")

canvas.style.background = color

}

function exportHTML(){

let content = canvas.innerHTML

let html = `
<html>
<head>
<title>My Website</title>
</head>
<body>

${content}

</body>
</html>
`

let blob = new Blob([html],{type:"text/html"})

let a = document.createElement("a")

a.href = URL.createObjectURL(blob)

a.download="website.html"

a.click()

  }
