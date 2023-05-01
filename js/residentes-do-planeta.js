let residentes = document.getElementById('residentes')
function residente(resi) {
    document.getElementById('residentes').innerHTML = '';
    qtd = resi.length;
    if (qtd === 0) {
        let li = document.createElement("li");
        li.innerHTML = `<button style="margin: 3px 3px; background-color: darkred; color: ghostwhite;"
        type="button" onclick=""><h3>Não foram encontrados residentes.</h3></button>`;
        residentes.appendChild(li);
    } else {
        resi.forEach(resident => { nome_data_residente(resident);
        })
    }
    async function nome_data_residente(resident_url) {
        resident_url = resident_url + "?format=json";
        console.log(resident_url);
        let res = await fetch(resident_url);
        let resident = await res.json();
        if (resident.gender === "female") {
            let li = document.createElement("li");
            li.innerHTML = `<button style="margin: 3px 3px; background-color: black ; opacity: 0.5; color: ghostwhite;"
                            type="button" onclick=""><p>${resident.name} nascida no ano ${resident.birth_year}</p></button>`;
            residentes.appendChild(li);
        } else if (resident.gender === "male") {
            let li = document.createElement("li");
            li.innerHTML = `<button style="margin: 3px 3px; background-color: black ; color: ghostwhite; opacity: 0.5;"
                            type="button" onclick=""><p>${resident.name} nascido no ano ${resident.birth_year}</p></button>`;
            residentes.appendChild(li);
        } else {
            let li = document.createElement("li");
            li.innerHTML = `<button style="margin: 3px 3px; background-color: black ; color: ghostwhite; opacity: 0.5;"
                            type="button" onclick=""><p>${resident.name} born on year ${resident.birth_year}</p></button> `;
            residentes.appendChild(li);
        }
    }
}