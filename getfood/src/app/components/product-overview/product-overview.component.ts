import { ShoppingCartService } from './../../services/shopping-cart.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Product, ProductOverviewItem } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { ProductOverviewDataSource } from './product-overview-datasource';
import { CustomSnackBarData, SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProductOverviewItem>;
  dataSource: ProductOverviewDataSource;

  filterSearch: string;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price'];
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar,private productService: ProductsService, private readonly shoppingCartService: ShoppingCartService) {

  }
  openSnackBar(message: string, action: string) {
    const snackBarData:CustomSnackBarData={
      message:message
    };
    this._snackBar.openFromComponent(SnackbarComponent,{
      duration:1500,
      data:snackBarData
    });
  }
  async setUpDataSource(products: Product[]) {
    this.dataSource = new ProductOverviewDataSource(products.map(
      product => {
        return {
          id: product.id,
          name: product.title,
          price: product.price
        }
      }
    ));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  ngAfterViewInit(): void {
    this.productService.getProducts().subscribe(
      products => this.setUpDataSource(products)
    );

  }
  onRowClick(data: ProductOverviewItem){
    this.openSnackBar(data.name,'Handlekurv');
    this.shoppingCartService.add({
      id: data.id,
      name: data.name,
      amount: 1,
      cost: parseFloat(data.price)
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.setFilter(filterValue);
  }
}
