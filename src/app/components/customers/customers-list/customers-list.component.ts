import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customers } from 'src/app/models/customers';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit{

  

  ELEMENT_DATA: Customers[] = [
    {
      id: '12345',
      name: 'Marco Antonio',
      email: 'marco@marco.com',
      cpfOrCnpj: '06652091933',
      phone:'32991658989',
      createdDate: '21/06/2023',
      birthDay: '21/06/2023',

    }
]
  displayedColumns: string[] = ['name', 'email','cpfOrCnpj', 'phone', 'createdDate', 'birthDay', 'acoes'];
  dataSource = new MatTableDataSource<Customers>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void { }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
