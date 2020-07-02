import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Orders } from '../../../../class/orders.class';
import { OrdersService } from '../../../../services/orders.service';
import { MatSort } from '@angular/material/sort';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit {
  public orders: Array<Orders>;
  public allOrders: number;
  public displayedColumns: string[] = [
    'id',
    'date',
    'addressee',
    'mail',
    'products',
    'action',
  ];
  public dataSource;

  constructor(private serviceOrder: OrdersService) { }
  ngOnInit() {
    this.getOrders();
  }

  renderTable(orders): void {
    this.dataSource = new MatTableDataSource<Orders>(orders);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getOrders(): void {
    this.serviceOrder.getAll().then(data => {
      this.orders = data
      this.allOrders = this.orders.length;
      this.renderTable(this.orders)
    });

  }

  deleteOrder(id) {
    this.serviceOrder.delete(id).then((data) => {
      this.renderTable(data)
      alert("Deleted Order!")
    })
  }

  search(e): void {
    this.dataSource.filter = e.value.trim().toLowerCase()
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
}
