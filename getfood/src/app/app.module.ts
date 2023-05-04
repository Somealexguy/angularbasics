import { LoginModule } from './components/login/login.module';
import { AdminRouteGuard } from './guards/admin-route-guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './components/card/card.component';
import { NgChartsModule } from 'ng2-charts';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomeComponent } from './pages/home/home.component';
import { FoodTreeComponent } from './components/food-tree/food-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { DynamicChartsComponent } from './components/charts/dynamic-charts/dynamic-charts.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { HttpService } from './services/http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { DropUploadDirective } from './directives/drop-upload.directive';
import { UploadComponentComponent } from './components/upload-component/upload-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatBadgeModule} from '@angular/material/badge';
import { ShoppingCartIconComponent } from './components/shopping-cart-icon/shopping-cart-icon.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminComponentComponent } from './components/admin/admin-component/admin-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    CardComponent,
    DragDropComponent,
    HomeComponent,
    FoodTreeComponent,
    LineChartComponent,
    DynamicChartsComponent,
    BarChartComponent,
    ProductOverviewComponent,
    SnackbarComponent,
    ShoppingCartComponent,
    DropUploadDirective,
    UploadComponentComponent,
    ShoppingCartIconComponent,
    AdminComponentComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    NgChartsModule,
    DragDropModule,
    MatSnackBarModule,
    MatTreeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FontAwesomeModule,
    MatBadgeModule,
    MatDialogModule,
    LoginModule
  ],
  providers: [HttpService,ProductsService, AdminRouteGuard],
  // Velger et komponent som oppstartskomponent for siden
  bootstrap: [AppComponent]
})
export class AppModule { }
