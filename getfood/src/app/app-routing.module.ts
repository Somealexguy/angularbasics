import { AdminRouteGuard } from './guards/admin-route-guard';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

const dashboardRoutes: Routes = [{ path: 'dashboard', component: DashboardComponent }];
const routes: Routes = [
{ path: 'products', component: HomeComponent },
{ path: 'product:id', component: HomeComponent },
// loadChildren brukes til å markere at modulen lazy-loades. Altså at den, og dets innhold ikke lastes ned før
// pathen brukes for første gang. Imports og declarations som gjøres i admin.module kjøres ikke før dette skjer.
// Merk at dette IKKE øker sikkerheten
{ path: 'admin', canActivate: [AdminRouteGuard], loadChildren: () => import('./components/admin/admin.module').then((m) => m.AdminModule)},
{ path: 'login', component: LoginComponent},
{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes.concat(dashboardRoutes))],
  exports: [RouterModule]
})
export class AppRoutingModule { }
