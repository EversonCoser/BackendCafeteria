-- CreateTable
CREATE TABLE "loja" (
    "idLoja" SERIAL NOT NULL,
    "cnpj" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "loja_pkey" PRIMARY KEY ("idLoja")
);

-- CreateIndex
CREATE UNIQUE INDEX "loja_cnpj_key" ON "loja"("cnpj");
