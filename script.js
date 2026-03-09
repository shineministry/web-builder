let selectedElement = null

function allowDrop(ev){
ev.preventDefault()
}

function drag(ev){
ev.dataTransfer.setData("type", ev.target.dataset.type)
}

function drop(ev){

ev.preventDefault()

let type = ev.dataTransfer.getData("type")

let el

if(type=="heading"){
el=document.createElement("h1")
el.innerText="Heading"
}

if(type=="text"){
el=document.createElement("p")
el.innerText="Paragraph text"
}

if(type=="button"){
el=document.createElement("button")
el.innerText="Click me"
}

if(type=="image"){
el=document.createElement("img")
el.src="https://via.placeholder.com/200"
}

if(type=="video"){
el=document.createElement("iframe")
el.src="https://www.youtube.com/embed/dQw4w9WgXcQ"
el.width="300"
}

el.classList.add("element")

el.style.left=ev.offsetX+"px"
el.style.top=ev.offsetY+"px"

el.onclick=function(){
selectedElement=el
document.getElementById("textEdit").value=el.innerText || ""
}

document.getElementById("canvas").appendChild(el)

}
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
