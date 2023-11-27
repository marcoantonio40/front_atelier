import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Workers } from 'src/app/models/workers';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-workers-delete',
  templateUrl: './workers-delete.component.html',
  styleUrls: ['./workers-delete.component.css']
})
export class WorkersDeleteComponent implements OnInit{
  worker: Workers = {
    name: '',
    cpf: '',
    phone: '',
    type: '',
    login: ''
  }

  constructor(
    private service: WorkersService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.worker.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }


  findById(): void {
    this.service.findById(this.worker.id).subscribe(response => {
      this.worker = response;
    });
  }

  delete(): void {
    console.log(this.worker);
    this.service.delete(this.worker.id).subscribe(() => {
        this.toast.success('Colaborador deletado com suceso', 'Apagar');
        this.router.navigate(['workers'])
    }, ex => {
      this.toast.error('Não foi possível deletar o colaborador', 'Apagar');
      if(ex.error.errors){
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }
}
