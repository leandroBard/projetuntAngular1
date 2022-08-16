import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myForm:FormGroup
  constructor(
    private fb:FormBuilder
  ) { 
    this.myForm = this.fb.group({
      nombre:["",[Validators.required,Validators.minLength(3)]],
      apellidos:[""],
      correo:["",[Validators.required,Validators.minLength(3)]],
      clave:["",[Validators.required]]

    })
  }
  registrate(){
    console.log(this.myForm.value)
  }

  ngOnInit(): void {
  }

}
