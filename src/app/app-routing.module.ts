import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RoutingConstant } from './constant/RoutingConstant';
import { EdBurnsComponent } from './pages/ed-burns/ed-burns.component';
import { IWantOneComponent } from './pages/i-want-one/i-want-one.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: EdBurnsComponent },
  { path: RoutingConstant.IWantOne, component: IWantOneComponent },
  { path: RoutingConstant.EdBurns, component: EdBurnsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
