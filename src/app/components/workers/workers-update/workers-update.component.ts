import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Workers } from 'src/app/models/workers';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-workers-update',
  templateUrl: './workers-update.component.html',
  styleUrls: ['./workers-update.component.css']
})
export class WorkersUpdateComponent implements OnInit{
  worker: Workers = {
    name: '',
    cpf: '',
    phone: '',
    type: '',
    login: ''
  }

  name: FormControl = new FormControl(null, [Validators.minLength(10), Validators.maxLength(50)]);
  cpf: FormControl = new FormControl(null, [Validators.minLength(11), Validators.maxLength(11), Validators.required]);
  phone: FormControl = new FormControl(null, [Validators.minLength(11), Validators.maxLength(11)]);
  email: FormControl = new FormControl(null, Validators.email);
  type: FormControl = new FormControl(null, Validators.required);

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

  validFields(): boolean {
    return this.name.valid && 
    this.cpf.valid && 
    this.email.valid && 
    this.phone.valid &&
    this.type.valid;
  }

  findById(): void {
    this.service.findById(this.worker.id).subscribe(response => {
      this.worker = response;
    });
  }

  update(): void {
    console.log(this.worker);
    this.service.update(this.worker).subscribe(() => {
        this.toast.success('Colaborador atualizado com suceso', 'Atualização');
        this.router.navigate(['workers'])
    }, ex => {
      this.toast.error('Não foi possível atualizar o colaborador', 'Atualização');
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
