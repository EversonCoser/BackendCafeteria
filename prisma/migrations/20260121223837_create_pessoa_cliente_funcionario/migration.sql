-- CreateTable
CREATE TABLE "pessoa" (
    "idPessoa" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "estcivil" TEXT NOT NULL,

    CONSTRAINT "pessoa_pkey" PRIMARY KEY ("idPessoa")
);

-- CreateTable
CREATE TABLE "cliente" (
    "idCliente" INTEGER NOT NULL,
    "fidelidade" BOOLEAN NOT NULL DEFAULT false,
    "fidelidadePontos" INTEGER NOT NULL DEFAULT 0,
    "preferAlimentar" TEXT,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("idCliente")
);

-- CreateTable
CREATE TABLE "funcionario" (
    "idFuncionario" INTEGER NOT NULL,
    "percentComissao" DECIMAL(5,2) NOT NULL,
    "dataAdmissao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cargoId" INTEGER NOT NULL,
    "lojaId" INTEGER NOT NULL,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("idFuncionario")
);

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_username_key" ON "pessoa"("username");

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_email_key" ON "pessoa"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_cpf_key" ON "pessoa"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_cargoId_lojaId_idFuncionario_key" ON "funcionario"("cargoId", "lojaId", "idFuncionario");

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "pessoa"("idPessoa") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionario" ADD CONSTRAINT "funcionario_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargo"("idCargo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionario" ADD CONSTRAINT "funcionario_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "loja"("idLoja") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionario" ADD CONSTRAINT "funcionario_idFuncionario_fkey" FOREIGN KEY ("idFuncionario") REFERENCES "pessoa"("idPessoa") ON DELETE CASCADE ON UPDATE CASCADE;
