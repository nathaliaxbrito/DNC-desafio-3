var medicamento = [];

function addMedicamento(){
    event.preventDefault();
    
    let remedio = {
        "nomeRemedio": document.getElementById("nomeMed").value,
        "quantidade": document.getElementById("qntMed").value,
        "classe": document.getElementById("classeMed").value,
    }

    document.getElementById("nomeMed").value = "";
    document.getElementById("qntMed").value = "";
    document.getElementById("classeMed").value = "";

    medicamento.push(remedio);
    renderTable();
   

}

function renderTable(){
    let table = document.getElementById('dataTable');
    table.innerHTML = `<tr>
    <th> ID </th>
    <th> Medicamento </th>
    <th> Quantidade </th>
    <th> Classe de Medicamento </th>
    <th> Remover </th>

    </tr>`

for(let i = 0; i < medicamento.length; i++){
    table.innerHTML = table.innerHTML + `<td> ${i} </td>
    <td> ${medicamento[i].nomeMed} </td>
    <td> ${medicamento[i].qntMed} </td>
    <td> ${medicamento[i].classeMed} </td>
    <td> <img src="imagem/image 2.png" width ="15px" height="10px" onclick="removePet(${i})"</td>`
}
}

function removePet(index){
    medicamento.splice(index,1);
    renderTable();
}