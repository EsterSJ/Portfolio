import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path: 'sobreMi', component: SobreMiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
