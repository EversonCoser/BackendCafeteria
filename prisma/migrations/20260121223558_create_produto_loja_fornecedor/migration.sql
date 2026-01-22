-- CreateEnum
CREATE TYPE "PrioridadeFornecedor" AS ENUM ('PRIMARIA', 'SECUNDARIA', 'TERCIARIA', 'OUTRA');

-- CreateTable
CREATE TABLE "produtoLojaFornecedor" (
    "produtoId" INTEGER NOT NULL,
    "lojaId" INTEGER NOT NULL,
    "fornecedorId" INTEGER NOT NULL,
    "prioridade" "PrioridadeFornecedor" NOT NULL,

    CONSTRAINT "produtoLojaFornecedor_pkey" PRIMARY KEY ("produtoId","lojaId","fornecedorId")
);

-- AddForeignKey
ALTER TABLE "produtoLojaFornecedor" ADD CONSTRAINT "produtoLojaFornecedor_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produto"("idProduto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtoLojaFornecedor" ADD CONSTRAINT "produtoLojaFornecedor_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "loja"("idLoja") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtoLojaFornecedor" ADD CONSTRAINT "produtoLojaFornecedor_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "fornecedor"("idFornecedor") ON DELETE RESTRICT ON UPDATE CASCADE;
