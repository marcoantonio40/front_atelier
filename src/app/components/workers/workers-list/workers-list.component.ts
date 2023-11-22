import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Workers } from 'src/app/models/workers';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit{

  ELEMENT_DATA: Workers[] = [ ]
  displayedColumns: string[] = ['name', 'cpf', 'phone', 'createdDate', 'acoes'];
  dataSource = new MatTableDataSource<Workers>(this.ELEMENT_DATA);

  
@ViewChild(MatPaginator) paginator: MatPaginator;
constructor(
  private service: WorkersService
){}

  ngOnInit(): void {
    this.findAll();
    
  }

  findAll(){
    this.service.findAll().subscribe(usersResponse => {
      this.ELEMENT_DATA = usersResponse;
      this.dataSource = new MatTableDataSource<Workers>(usersResponse);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


