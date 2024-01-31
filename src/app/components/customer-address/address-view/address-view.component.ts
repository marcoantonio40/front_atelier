import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomersAddress } from 'src/app/models/customerAddress';

@Component({
  selector: 'app-address-view',
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.css']
})
export class AddressViewComponent implements OnInit{

  

  ELEMENT_DATA: CustomersAddress[] = [
    {
      id: '12345',
      street: 'Marco Antonio',
      number: '12345',
      neighborhood: 'Centro',
      cep:'37402045',
      complement: 'Próximo a igreja'

    }
]
  displayedColumns: string[] = ['street', 'number','neighborhood', 'cep', 'complement'];
  dataSource = new MatTableDataSource<CustomersAddress>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void { }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
