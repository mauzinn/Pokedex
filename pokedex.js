const pokeapi = async() => {
  var pokeinput = document.getElementById('inputpokemon').value
  
 if (pokeinput != '') {

  var img = document.getElementById('pokemonimg')
  var url = 'https://pokeapi.co/api/v2/pokemon/' + pokeinput.toLowerCase()
  var inputname = document.getElementById('pokemonNAMEid')
  var btn = document.getElementById('btn')

  const dados = await fetch(url)
  const API = await dados.json()

  btn.innerHTML += '<img id="img2" width="95px" src="https://github.com/mauzinn/Login-Simples/blob/main/carregamento.gif?raw=true">'
  btn.style.color = 'rgb(75, 75, 75)'

  const delay = setTimeout(function(){
    btn.innerHTML = '>'
    img.src = API.sprites.front_default
    inputname.innerHTML = API.id + ' - '
    btn.style.color = 'Black'
    inputname.innerHTML += API.name
  }, 1300)
  delay 

 } else {
    alert('[ERRO] Coloque o nome ou id de algum pokemon!')
 }
}