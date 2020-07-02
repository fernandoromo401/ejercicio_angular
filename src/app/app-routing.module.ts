import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { IndexComponent } from './pages/index/index.component';
import { UpdateOrderComponent } from './pages/update-order/update-order.component';
import { AuthGuard } from './auth/auth.guard';
import { NewOrderComponent } from "./pages/new-order/new-order.component";
const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/update-order/:id',
    component: UpdateOrderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/new-order',
    component: NewOrderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: IndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
