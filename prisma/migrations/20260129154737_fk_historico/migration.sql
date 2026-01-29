-- AddForeignKey
ALTER TABLE "historico" ADD CONSTRAINT "historico_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produto"("idProduto") ON DELETE RESTRICT ON UPDATE CASCADE;
