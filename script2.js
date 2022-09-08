//Função calcular a gorjeta

function calculateTip(event) {
    event.preventDefault(); //evita o recarregamento automático da page
    let bill = document.getElementById('bill').value;
    let service = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('pessoas').value;


    //Verificar se a conta e a nota dos serviços foram preenchidos

    if (bill == '' | serviceQual == 0) {
        alert("Por favor, preencha os campos!")
        return;
    }

    // Verificar o número de pessoas para dividir a conta
    if (numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById('each').style.display = 'none';
    }

    if (numOfPeople > 1) {
        document.getElementById('each').style.display = 'block';
    }

    //Cálculo da gorjeta


    let total = (bill * service) / numOfPeople;
    document.getElementById('totalTip').style.display = 'block';




    total = total.toFixed(2); //duas casas decimais

    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = 'block';

}

//Aqui ele esconde o display da div que mostrará o resultado após o cálculo
document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

//Acionamento do botão - Quando o Form for submetido

document.getElementById('tipsForms').addEventListener('submit', calculateTip);