document.addEventListener('DOMContentLoaded', () => {
    const dadosExtrato = {
        saldo: 4900.52,
        transacoes: [
            {tipo: 'compra', descricao: 'Café da manhã', valor: -15.00},
            {tipo: 'compra', descricao: 'Supermercado', valor: -150.20 },
            {tipo: 'venda', descricao: 'Venda - Sofá', valor: 299.90},
            {tipo: 'pix', descricao: 'Transferência para Camila', valor: -5000.00}, // Destaque
            {tipo: 'compra', descricao: 'Computador', valor: -6500.90 }, // Destaque
            {tipo: 'salário', descricao: 'Recebimento de Salário', valor: 3500.00},
            {tipo: 'compra', descricao: 'Jogo eletrônico', valor: -199.90},
            {tipo: 'pix', descricao: 'Pagamento aluguel - Antônio', valor: -1200.00},
            {tipo: 'deposito', descricao: 'Transferência recebida - Camila', valor: 800.00},
            {tipo: 'compra', descricao: 'Pipoca', valor: -2.99}
        ]
    };

    const saldoElemento = document.getElementById('saldo-conta');
    const listaTransacoes = document.getElementById("lista-transacoes");

    // Formata o valor do saldo
    saldoElemento.textContent = `Saldo: R$ ${dadosExtrato.saldo.toFixed(2)}`;

    // Renderiza as transações
    dadosExtrato.transacoes.forEach(transacao => {
        const itemLista = document.createElement('li');
        itemLista.classList.add('transacao');

        // Adiciona a classe de destaque se o valor for alto
        if (Math.abs(transacao.valor) >= 5000) {
            itemLista.classList.add('destaque');
        }

        // Formanta o valor da transação
        const valorFormatado = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(transacao.valor);

        // Exibe os valores na tela
        itemLista.innerHTML = `
            <div class="transacao-info">
                <span>${transacao.descricao}</span>
                <small>${transacao.tipo}</small>
            </div>
            <span class="transacao-valor ${transacao.valor < 0 ? 'negativo' : ''}">
                ${valorFormatado}
            </span>
        `;

        // Adiciona itemLista à listaTransacoes
        listaTransacoes.appendChild(itemLista);
    });
});