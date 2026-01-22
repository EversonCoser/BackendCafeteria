-- CreateTable
CREATE TABLE "pedidoProduto" (
    "pedidoId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "pedidoProduto_pkey" PRIMARY KEY ("pedidoId","produtoId")
);

-- AddForeignKey
ALTER TABLE "pedidoProduto" ADD CONSTRAINT "pedidoProduto_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedido"("idPedido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidoProduto" ADD CONSTRAINT "pedidoProduto_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produto"("idProduto") ON DELETE RESTRICT ON UPDATE CASCADE;
