import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-workers-create',
  templateUrl: './workers-create.component.html',
  styleUrls: ['./workers-create.component.css']
})
export class WorkersCreateComponent implements OnInit{
  
  name: FormControl = new FormControl(null, [Validators.minLength(10), Validators.maxLength(50)]);
  cpf: FormControl = new FormControl(null, [Validators.minLength(11), Validators.maxLength(11), Validators.required]);
  phone: FormControl = new FormControl(null, [Validators.minLength(11), Validators.maxLength(11)]);
  email: FormControl = new FormControl(null, Validators.email);

  constructor(){}
  
  ngOnInit(): void {
  }

  validFields(): boolean {
    return this.name.valid && 
    this.cpf.valid && 
    this.email.valid && 
    this.phone.valid;
  }
}
