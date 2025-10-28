import { Routes } from '@angular/router';
import { PessoaComponent } from './components/pessoaComponent/pessoaComponent';
import { ModuloComponent } from './components/moduloComponent/moduloComponent';
import { ColigadaComponent } from './components/coligadaComponent/coligadaComponent';
import { FilialComponent } from './components/filial-component/filial-component';
import { EnderecoComponent } from './components/endereco-component/endereco-component';
import { OrganizacaoComponent } from './components/organizacao-component/organizacao-component';
import { ContatoComponent } from './components/contato-component/contato-component';
import { FuncaoComponent } from './components/funcao-component/funcao-component';
import { HabilidadeComponent } from './components/habilidade-component/habilidade-component';
import { ProdutoComponent } from './components/produto-component/produto-component';
import { ServicoComponent } from './components/servico-component/servico-component';
import { DeflatorComponent } from './components/deflator-component/deflator-component';
import { OrcamentoComponent } from './components/orcamento-component/orcamento-component';
import { PropostaComponent } from './components/proposta-component/proposta-component';
import { ContratoComponent } from './components/contrato-component/contrato-component';
import { ProjetoComponent } from './components/projeto-component/projeto-component';
import { AtividadeComponent } from './components/atividade-component/atividade-component';
import { TarefaComponent } from './components/tarefa-component/tarefa-component';
import { PermissaoComponent } from './components/permissao-component/permissao-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { UsuarioComponent } from './components/usuario-component/usuario-component';

export const routes: Routes = [
    {
        path: 'usuario',
        component: UsuarioComponent
    },
    {
        path: 'perfil',
        component: PerfilComponent
    },
    {
        path: 'permissao',
        component: PermissaoComponent
    },
    {
        path: 'tarefa',
        component: TarefaComponent
    },
    {
        path: 'atividade',
        component: AtividadeComponent
    },
    {
        path: 'projeto',
        component: ProjetoComponent
    },
    {
        path: 'contrato',
        component: ContratoComponent
    },
    {
        path: 'proposta',
        component: PropostaComponent
    },
    {
        path: 'orcamento',
        component: OrcamentoComponent
    },
    {
        path: 'deflator',
        component: DeflatorComponent
    },
    {
        path: 'servico',
        component: ServicoComponent
    },
    {
        path: 'produto',
        component: ProdutoComponent
    },
    {
        path: 'habilidade',
        component: HabilidadeComponent
    },
    {
        path: 'funcao',
        component: FuncaoComponent
    },
    {
        path: 'contato',
        component: ContatoComponent
    },
    {
        path: 'organizacao',
        component: OrganizacaoComponent
    },
    {
        path: 'endereco',
        component: EnderecoComponent
    },
    {
        path: 'filial',
        component: FilialComponent
    },
    {
        path: 'coligada',
        component: ColigadaComponent
    },
    {
        path: 'pessoa',
        component: PessoaComponent
    },
    {
        path: 'modulo',
        component: ModuloComponent
    },
    {
        path: '**',
        redirectTo: 'modulo'
    },
];
