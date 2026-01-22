-- CreateTable
CREATE TABLE "historico" (
    "id" SERIAL NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "precoAntigo" DECIMAL(10,2) NOT NULL,
    "precoNovo" DECIMAL(10,2) NOT NULL,
    "dataAlteracao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "historico_pkey" PRIMARY KEY ("id")
);
