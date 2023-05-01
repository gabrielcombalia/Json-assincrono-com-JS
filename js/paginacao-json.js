let div_paginacao = document.getElementById('div_paginacao');
async function paginacao(pagina = 'https://swapi.dev/api/planets/?page=1&format=json'){
    document.getElementById('div_paginacao').innerHTML = '';
    document.getElementById('detalhesplaneta').innerHTML = '';
    document.getElementById('residentes').innerHTML = '';
    document.getElementById('todos').innerHTML = '';
    let res = await fetch(pagina);
    let objeto = await res.json();
    let li = document.createElement("li");
    li.innerHTML = `<div style="display: flex; height: 25px;"><button onclick="paginacao('${objeto.previous}')" ><<</button>
                    <button onclick="paginacao('${objeto.next}')" >>></button></div>`;
    div_paginacao.appendChild(li);
    objeto.results.forEach(planeta => {
    li = document.createElement("li");
    li.innerHTML = `<button class="paginacao" type="button" 
                    onclick="detalhes_planeta('${planeta.name}')">
                    ${planeta.name}
                    </button>`;
    div_paginacao.appendChild(li);
    })
}
