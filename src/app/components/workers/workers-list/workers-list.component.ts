import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Workers } from 'src/app/models/workers';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit{

  ELEMENT_DATA: Workers[] = [
    {
      id: "1",
      name: "Marco Antonio",
      cpf: "055.818.520-66",
      phone: "(34)995565658",
      start_date: '15/08/2022',
      usertype: ['0']

    }
  ]
  displayedColumns: string[] = ['id', 'name', 'cpf', 'phone', 'start_date', 'acoes'];
  dataSource = new MatTableDataSource<Workers>(this.ELEMENT_DATA);

  
  

constructor(){}

  ngOnInit(): void {
    
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}


