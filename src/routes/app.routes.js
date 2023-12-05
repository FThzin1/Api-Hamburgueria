
const express = require('express');
const router = express.Router();
const precos = require('../prices.json')
let proximoId = 1;
// const pedidos = [
//     {
//         id: 1,
//         cliente: 'João',
//         itens: [
//             { produto: 'Hambúrguer simples', quantidade: 2 },
//             { produto: 'Batata frita', quantidade: 1 }
//         ],
//         total: 25.50
//     },
//     {
//         id: 2,
//         cliente: 'Maria',
//         itens: [
//             { produto: 'Hambúrguer duplo', quantidade: 1 }
//         ],
//         total: 12.00
//     }
// ];
const pedidos = [];

router.get('/pedidos', (req, res) => {
    res.json(pedidos);
});

router.get('/pedidos/:id', (req, res) => {
    const pedidoId = parseInt(req.params.id);
    const pedidoEncontrado = pedidos.find(pedido => pedido.id === pedidoId);

    if (pedidoEncontrado) {
        res.json(pedidoEncontrado);
    } else {
        res.status(404).json({ message: 'Pedido não encontrado' });
    }
});

router.post('/pedidos', (req, res) => {
    const novoPedido = req.body;
    novoPedido.id = proximoId;
    pedidos.push(novoPedido);

    let pagament = 0;

    for (let i = 0; i < novoPedido.itens.length; i++) {
        const item = novoPedido.itens[i];
        pagament += encontrarPreco(item.produto) * item.quantidade
    }

    novoPedido.total = pagament;
    proximoId++;
    res.status(201).json(novoPedido);
});

router.put('/pedidos/:id', (req, res) => {
    const pedidoId = parseInt(req.params.id);
    const pedidoIndex = pedidos.findIndex(pedido => pedido.id === pedidoId);
    const pedido = req.body;

    if (pedidoIndex !== -1) {
        let pagamento = 0;

        for (let i = 0; i < pedido.itens.length; i++) {
            const item = pedido.itens[i];
            pagamento += encontrarPreco(item.produto) * item.quantidade;
        }

        pedidos[pedidoIndex] = {
            ...pedidos[pedidoIndex],
            ...req.body,
            total: pagamento, // Atualiza o total com o novo cálculo
            id: pedidoId // Garantindo que o ID não seja alterado
        };

        res.json({ message: 'Pedido atualizado com sucesso', pedido: pedidos[pedidoIndex] });
    } else {
        res.status(404).json({ message: 'Pedido não encontrado' });
    }
});

router.delete('/pedidos/:id', (req, res) => {
    const pedidoId = parseInt(req.params.id);
    const pedidoIndex = pedidos.findIndex(pedido => pedido.id === pedidoId);

    if (pedidoIndex !== -1) {
        pedidos.splice(pedidoIndex, 1);
        res.json({ message: 'Pedido excluído com sucesso' });
    } else {
        res.status(404).json({ message: 'Pedido não encontrado' });
    }
});


const encontrarPreco = (tipoProduto) => {
    for (let categoria in precos) {
        const produto = precos[categoria].find(item => item.tipo === tipoProduto);
        if (produto) {
            return produto.preco;
        }
    }
    return "Produto não encontrado no cardápio.";
};

module.exports = router;
