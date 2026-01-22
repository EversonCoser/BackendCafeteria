-- CreateTable
CREATE TABLE "fornecedor" (
    "idFornecedor" SERIAL NOT NULL,
    "cnpjcpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "tipoFornecimento" TEXT NOT NULL,
    "prazoEntrega" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "fornecedor_pkey" PRIMARY KEY ("idFornecedor")
);

-- CreateIndex
CREATE UNIQUE INDEX "fornecedor_cnpjcpf_key" ON "fornecedor"("cnpjcpf");

-- CreateIndex
CREATE UNIQUE INDEX "fornecedor_email_key" ON "fornecedor"("email");
