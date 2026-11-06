// Model: formato dos dados do produto.
export type Produto = {
  id: number;
  nome: string;
  quantidade: number;
  categoria: string;
};

export type StatusEstoque = "Em Estoque" | "Estoque Baixo";
