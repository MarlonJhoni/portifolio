const imgPerfil = document.getElementById("logo1");

imgPerfil.addEventListener("mouseover", function() {
  this.src = "img/logo-computador-hi.jpg";
});

imgPerfil.addEventListener("mouseout", function() {
    this.src = "img/logo-computador.jpg";
  });

function buscarProjetos(){
    const urlGitHub = 'https://api.github.com/users/MarlonJhoni/repos'
    var carregandoProjetos = document.getElementById('carregando')

    fetch(urlGitHub,{
        method: 'GET',
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            mostrarProjetos(response)
            carregandoProjetos.style.display = 'none'
        })
        .catch((e) => {
            console.log(`Error -> ${e}`)
        })
}

function mostrarProjetos(data){
    var listaProjetos = document.getElementById('lista-projetos')
    for(let i = 0; i < data.length; i++)
    {
        let div = document.createElement("div")
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data[i]['name']);
        a.appendChild(linkText);
        div.appendChild(a)
        listaProjetos.appendChild(div)
    }
}
buscarProjetos();