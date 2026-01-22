-- CreateTable
CREATE TABLE "produto" (
    "idProduto" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "dataEntrada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataSaida" TIMESTAMP(3),
    "foto" TEXT,
    "setorPreparo" TEXT NOT NULL,
    "disponivel" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("idProduto")
);

-- CreateTable
CREATE TABLE "produtoalimento" (
    "idProdAli" INTEGER NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "dataValidade" TIMESTAMP(3) NOT NULL,
    "classAlimentar" TEXT NOT NULL,
    "quantPorEmba" INTEGER NOT NULL,

    CONSTRAINT "produtoalimento_pkey" PRIMARY KEY ("idProdAli")
);

-- CreateTable
CREATE TABLE "produtobebida" (
    "idProdBeb" INTEGER NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL,
    "calorias" INTEGER NOT NULL,
    "GelOuQuente" TEXT NOT NULL,
    "acucar" BOOLEAN NOT NULL,
    "lactose" BOOLEAN NOT NULL,
    "ingredientes" TEXT NOT NULL,

    CONSTRAINT "produtobebida_pkey" PRIMARY KEY ("idProdBeb")
);

-- CreateTable
CREATE TABLE "produtocafe" (
    "idProdCafe" INTEGER NOT NULL,
    "tipoMoagem" TEXT NOT NULL,
    "tipoTorra" TEXT NOT NULL,
    "acidez" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "tamEmbalagem" INTEGER NOT NULL,
    "tipoGrao" TEXT NOT NULL,

    CONSTRAINT "produtocafe_pkey" PRIMARY KEY ("idProdCafe")
);

-- AddForeignKey
ALTER TABLE "produtoalimento" ADD CONSTRAINT "produtoalimento_idProdAli_fkey" FOREIGN KEY ("idProdAli") REFERENCES "produto"("idProduto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtobebida" ADD CONSTRAINT "produtobebida_idProdBeb_fkey" FOREIGN KEY ("idProdBeb") REFERENCES "produto"("idProduto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtocafe" ADD CONSTRAINT "produtocafe_idProdCafe_fkey" FOREIGN KEY ("idProdCafe") REFERENCES "produto"("idProduto") ON DELETE RESTRICT ON UPDATE CASCADE;
