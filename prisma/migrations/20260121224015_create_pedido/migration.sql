-- CreateTable
CREATE TABLE "pedido" (
    "idPedido" SERIAL NOT NULL,
    "dataVenda" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valorBruto" DECIMAL(10,2) NOT NULL,
    "desconto" DECIMAL(10,2) NOT NULL,
    "statusPedido" TEXT NOT NULL,
    "valorTotal" DECIMAL(10,2) NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "funcionarioId" INTEGER NOT NULL,
    "lojaId" INTEGER NOT NULL,
    "formaPagId" INTEGER NOT NULL,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("idPedido")
);

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "cliente"("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionario"("idFuncionario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "loja"("idLoja") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_formaPagId_fkey" FOREIGN KEY ("formaPagId") REFERENCES "formaPagamento"("idFormaPag") ON DELETE RESTRICT ON UPDATE CASCADE;
