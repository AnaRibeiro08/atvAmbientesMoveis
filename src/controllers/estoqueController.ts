
import type { Produto, StatusEstoque } from "../models/Produto";

const produtos: Produto[] = [
  { id: 1, nome: "Mouse sem fio", quantidade: 18, categoria: "Periféricos" },
  { id: 2, nome: "Teclado USB", quantidade: 4, categoria: "Periféricos" },
  { id: 3, nome: "Monitor 24 polegadas", quantidade: 9, categoria: "Monitores" },
  { id: 4, nome: "Cabo HDMI", quantidade: 3, categoria: "Cabos" },
  { id: 5, nome: "Webcam HD", quantidade: 12, categoria: "Acessórios" },
  { id: 6, nome: "Suporte notebook", quantidade: 21, categoria: "Acessórios" },
];

export function listarProdutos(): Produto[] {
  return produtos;
}

export function buscarProdutoPorId(id: number): Produto | undefined {
  return produtos.find((produto) => produto.id === id);
}

export function obterStatusEstoque(quantidade: number): StatusEstoque {
  return quantidade <= 5 ? "Estoque Baixo" : "Em Estoque";
}

export function obterResumoEstoque() {
  return {
    produtos: produtos.length,
    unidades: produtos.reduce((soma, produto) => soma + produto.quantidade, 0),
    estoqueBaixo: produtos.filter((produto) => produto.quantidade <= 5).length,
  };
}
