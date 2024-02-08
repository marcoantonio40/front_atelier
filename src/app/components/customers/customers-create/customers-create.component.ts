import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customers } from 'src/app/models/customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.css']
})
export class CustomersCreateComponent implements OnInit{
  customer: Customers = {
    name: '',
    email: '',
    cpfOrCnpj: '',
    phone: '',
    birthDay: ''
  }

  name: FormControl = new FormControl(null, [Validators.minLength(10), Validators.maxLength(50)]);
  email: FormControl = new FormControl(null, Validators.email);
  cpfOrCnpj: FormControl = new FormControl(null, [Validators.minLength(11), Validators.maxLength(11), Validators.required]);
  phone: FormControl = new FormControl(null, [Validators.minLength(11), Validators.maxLength(11)]);
  birthDay: FormControl = new FormControl(null, Validators.required);

  constructor(
    private service: CustomersService,
    private toast: ToastrService,
    private router: Router,
  ){}
  
  ngOnInit(): void {
  }

  validFields(): boolean {
    return this.name.valid && 
    this.cpfOrCnpj.valid && 
    this.email.valid && 
    this.phone.valid &&
    this.birthDay.valid;
  }

  create(): void {
    console.log(this.customer);
    this.service.create(this.customer).subscribe(() => {
        this.toast.success('Cliente criado com suceso', 'Cadastro');
        this.router.navigate(['customers'])
    }, ex => {
      this.toast.error('Não foi possível criar o cliente', 'Cadastro');
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
