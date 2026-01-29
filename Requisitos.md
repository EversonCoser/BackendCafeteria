# Sistema de Gestão de Cafeteria

## 1.1 Requisitos Relacionados à Loja

- O sistema deve permitir o cadastro de múltiplas lojas.
- Cada loja deve possuir as seguintes informações:
  - Identificador único
  - CNPJ
  - Telefone
  - Endereço

### 1.2 Funcionários

- O sistema deve permitir o cadastro de funcionários por loja.
- Para cada funcionário devem ser armazenados:
  - Nome
  - CPF
  - Telefone
  - Endereço
  - Email
  - Estado civil
  - Nome de usuário
  - Senha de acesso ao sistema
  - Data de admissão
  - Percentual de comissão
- Um funcionário pode realizar várias vendas, desde que vinculadas à mesma loja.
- Para cada venda, deve ser registrado o valor da comissão, quando aplicável.

### 1.3 Cargos

- Cada loja deve possuir seu próprio cadastro de cargos.
- Cada cargo deve conter:
  - Identificador
  - Nome do cargo
  - Salário base

### 1.4 Clientes

- O sistema deve permitir o cadastro de clientes por loja.
- Para cada cliente devem ser armazenados:
  - CPF
  - Nome
  - Endereço
  - Telefone
  - Email
  - Sexo
  - Estado civil
  - Nome de usuário
  - Senha de acesso ao sistema
- Caso o cliente participe do programa de fidelidade da loja, devem ser armazenados:
  - Pontos de fidelidade
  - Preferências alimentares (ex.: sem lactose, sem açúcar, vegano)
  - Plano de fidelidade ativo ou inativo

---

### 1.5 Cadastro e Disponibilidade de Produtos

- O sistema deve permitir o cadastro de produtos alimentícios, bebidas e cafés.
- Os produtos devem estar associados a uma loja.
- Para cada produto, o sistema deve armazenar:
  - Identificador do produto
  - Preço de venda
  - Status de disponibilidade (disponível ou indisponível)
  - Data de entrada no catálogo
  - Data de retirada do catálogo, quando aplicável
  - Setor de preparo
  - Descrição
- Produtos indisponíveis não devem ser removidos do sistema, mantendo o histórico.
- Cada produto deve possuir uma foto associada.
- Cada produto deve pertencer a uma única categoria:
  - Café
  - Bebidas
  - Alimentos
- Para produtos da categoria café, devem ser armazenadas as seguintes informações:
  - Tipo do grão
  - Tipo de torra
  - Acidez
  - Intensidade
  - Origem
  - Tipo de moagem
  - Tamanho da embalagem
- Para produtos da categoria bebidas, devem ser armazenadas as seguintes informações:
  - Tamanho/volume
  - Ingredientes
  - Indicação se é gelada ou quente
  - Quantidade de calorias
  - Indicação se possui lactose
  - Indicação se possui açúcar
- Para produtos da categoria alimentos, devem ser armazenadas as seguintes informações:
  - Peso
  - Ingredientes
  - Data de validade
  - Classificação alimentar (doce ou salgado)
  - Número de unidades por embalagem
- Cada produto deve estar associado a um setor de preparo da loja. Exemplos de setores:
  - Barista
  - Cozinha
  - Estoque seco
- Caso um produto seja modificado no menu, as informações anteriores devem ser armazenadas em um conjunto de dados históricos para consultas posteriores.


### 1.6 Fornecedores

- O sistema deve permitir o cadastro de fornecedores com as seguintes informações:
  - Identificador
  - CNPJ ou CPF
  - Nome ou razão social
  - Endereço
  - Telefone
  - Email
  - Tipo de fornecimento
  - Prazo de entrega
- Cada produto deve possuir ao menos um fornecedor principal.
- Um produto pode possuir múltiplos fornecedores cadastrados.
- Um fornecedor pode fornecer vários produtos.

---

### 1.7 Registro de Pedidos

O sistema deve conter as possíveis formas de pagamento dos pedidos, exemplo: pix, cartão, dinheiro.

- O sistema deve permitir o registro de pedidos de produtos.
- Para cada pedido devem ser armazenadas as seguintes informações:
  - Data da venda
  - Número do pedido
  - Valor bruto do pedido
  - Descontos aplicados
  - Valor final do pedido
- Cada pedido deve estar associada obrigatoriamente a:
  - Uma loja
  - Um cliente 
  - Um funcionário da loja

---