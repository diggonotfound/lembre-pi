import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lembre-cadastro/inicio',
    pathMatch: 'full'
  },
  {
    path: 'lembre-cadastro',
    loadChildren: () =>
      import('./lembre-cadastro/lembre-cadastro-module')
        .then(m => m.LembreCadastroModule)
  },
  {
    path: '**',
    redirectTo: 'lembre-cadastro/inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}