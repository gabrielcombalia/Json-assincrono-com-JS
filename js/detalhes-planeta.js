let detalhesplaneta = document.getElementById('detalhesplaneta')
async function detalhes_planeta(nome = document.getElementById("planeta").value){
    document.getElementById('detalhesplaneta').innerHTML = '';
    document.getElementById('residentes').innerHTML = '';
    let res = await fetch('https://swapi.dev/api/planets/?search=' + nome + '&format=json');
    let {results} = await res.json();
    planeta = results[0];
    let div = document.createElement('div');
    div.innerHTML = `<pre><p>DETALHES DO PLANETA:</p>
                        <p>Nome: ${planeta.name}</p>
                        <p>População: ${planeta.population} habitantes</p>
                        <p>Clima: ${planeta.climate}</p>
                        <p>Período de translação: ${planeta.rotation_period} horas</p>
                        <p>Período Orbital: ${planeta.orbital_period} dias</p>
                        <p>Diâmetro: ${planeta.diameter} km</p>
                        <p>Gravidade: ${planeta.gravity}</p>
                        <p>Terreno: ${planeta.terrain}</p>
                        <p>Superfície oceânica: ${planeta.surface_water}</p>`
    detalhesplaneta.appendChild(div);
    residente(planeta.residents);
}