import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesayunosComponent } from './components/desayunos/desayunos/desayunos.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'desayunos', component: DesayunosComponent},
  {path: '**', redirectTo:'', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
