-- CreateTable
CREATE TABLE "formaPagamento" (
    "idFormaPag" SERIAL NOT NULL,
    "nomeFormaPagamento" TEXT NOT NULL,

    CONSTRAINT "formaPagamento_pkey" PRIMARY KEY ("idFormaPag")
);

-- CreateIndex
CREATE UNIQUE INDEX "formaPagamento_nomeFormaPagamento_key" ON "formaPagamento"("nomeFormaPagamento");
