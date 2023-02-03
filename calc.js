window.onload = () =>{
    const form = document.querySelector('form');

    form.onsubmit = (e) => {
        e.preventDefault();

        const cidadeRetirada = document.querySelector('#cidade-retirada').value;
        const cidadeEntrega = document.querySelector('#cidade-entrega').value;
        const tipoCarro = document.querySelector('#tipo-carro').value;

        const precoTipoCarro = {
            basico: 119,
            ar: 199,
            executivo: 299

        };

        let preco = 0;

        preco+= precoTipoCarro[tipoCarro];
        if(cidadeEntrega!==cidadeRetirada){
            preco+=300;
        }

        alert(`O custo da locação é R$ ${preco}`);

    }
}