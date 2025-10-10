import { Routes } from '@angular/router';
import { PessoaComponent } from './components/pessoaComponent/pessoaComponent';
import { ModuloComponent } from './components/moduloComponent/moduloComponent';
import { ColigadaComponent } from './components/coligadaComponent/coligadaComponent';
import { FilialComponent } from './components/filial-component/filial-component';
import { EnderecoComponent } from './components/endereco-component/endereco-component';

export const routes: Routes = [

    
    {
        path: 'endereco',
        component : EnderecoComponent
    },
    {
        path: 'filial',
        component : FilialComponent
    },
    {
        path: 'coligada',
        component : ColigadaComponent
    },
    {
        path: 'pessoa',
        component : PessoaComponent
    },
        {
        path: 'modulo',
        component : ModuloComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    },
];
