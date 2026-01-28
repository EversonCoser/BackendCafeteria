import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { ProdutoModule } from './produto/produto.module';
import { LojaModule } from './loja/loja.module';
import { ProdutoLojaFornecedorModule } from './produto-loja-fornecedor/produto-loja-fornecedor.module';
import { CargoModule } from './cargo/cargo.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';
import { PedidoModule } from './pedido/pedido.module';
import { PedidoProdutoModule } from './pedido-produto/pedido-produto.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { ClienteModule } from './cliente/cliente.module';
import { FuncionarioModule } from './funcionario/funcionario.module';

@Module({
  imports: [PrismaModule, FornecedorModule, ProdutoModule, LojaModule, ProdutoLojaFornecedorModule, CargoModule, FormaPagamentoModule, PedidoModule, PedidoProdutoModule, PessoaModule, ClienteModule, FuncionarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
