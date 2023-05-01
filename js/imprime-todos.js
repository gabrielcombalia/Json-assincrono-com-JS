let todos = document.getElementById('todos');
async function imprime_todos() {
    document.getElementById('div_paginacao').innerHTML = '';
    document.getElementById('detalhesplaneta').innerHTML = '';
    document.getElementById('residentes').innerHTML = '';
    document.getElementById('todos').innerHTML = '';
    let div = document.createElement("div");
    div.innerHTML = `<small>Amarelo: Árido, Vermelho: Quente, Verde: Temperado, 
                     Transparente: Inabitável, Trasnlúcido: Desconhecido</small>`;
    todos.appendChild(div);
    let n = 1;
    while (n <= 6) {
        pagina = 'https://swapi.dev/api/planets/?page=' + n + '&format=json'
        let res = await fetch(pagina);
        let {results} = await res.json();
        results.forEach(planeta => {
            let cor = '';
            let opac = 0.7;
            if (planeta.climate === 'temperate') {
                cor = 'darkseagreen';
            } else if (planeta.climate === 'arid') {
                cor = 'darkgoldenrod';
            } else if (planeta.climate === 'unknown') {
                cor = 'transparent';
                opac = 0.3
            } else if (planeta.climate === 'frigid') {
                cor = 'cornflowerblue';
            }else if (planeta.climate === 'frozen') {
                cor = 'cornflowerblue';
            }else if (planeta.climate === 'tropical') {
                cor = 'darkseagreen';
            } else if (planeta.climate === 'hot') {
                cor = 'darkred';
            }
            div = document.createElement("div");
            div.innerHTML = `<button style="background-color: ${cor}; opacity: ${opac};" class="paginacao" type="button" 
                        onclick="detalhes_planeta('${planeta.name}')">${planeta.name}</button>`;
            todos.appendChild(div);
        })
        n = n + 1;
    }
}
