import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Workers } from 'src/app/models/workers';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-workers-create',
  templateUrl: './workers-create.component.html',
  styleUrls: ['./workers-create.component.css']
})
export class WorkersCreateComponent implements OnInit{
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

  constructor(
    private service: WorkersService,
    private toast: ToastrService,
    private router: Router,
  ){}
  
  ngOnInit(): void {
  }

  validFields(): boolean {
    return this.name.valid && 
    this.cpf.valid && 
    this.email.valid && 
    this.phone.valid;
  }

  create(): void {
    console.log(this.worker);
    this.service.create(this.worker).subscribe(() => {
        this.toast.success('Colaborador criado com suceso', 'Cadastro');
        this.router.navigate(['workers'])
    }, ex => {
      this.toast.error('Não foi possível criar o colaborador', 'Cadastro');
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
