-- CreateTable
CREATE TABLE "cargo" (
    "idCargo" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "salaBase" DECIMAL(10,2) NOT NULL,
    "lojaId" INTEGER NOT NULL,

    CONSTRAINT "cargo_pkey" PRIMARY KEY ("idCargo")
);

-- CreateIndex
CREATE UNIQUE INDEX "cargo_nome_key" ON "cargo"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "cargo_nome_lojaId_key" ON "cargo"("nome", "lojaId");

-- AddForeignKey
ALTER TABLE "cargo" ADD CONSTRAINT "cargo_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "loja"("idLoja") ON DELETE RESTRICT ON UPDATE CASCADE;
