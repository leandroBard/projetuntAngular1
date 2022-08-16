import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="Angular1"
  modificado=false
  classInput=""
  op1=0
  op2=0
  resultado=0
  productos=[
    {
      id:1,
      title:"Mac Pro",
      price:900
    },
    {
      id:2,
      title:"Mac Book",
      price:600
    }
  ]
  categorias=[
    "celulares",
    "tv led"
  ]
  constructor() { }
  add(){
    this.productos=[
      {
        id:3,
        title:"Ipad",
        price:500
      }
    ]
  }
  cambiarTitle(){
    if(this.title===""){
      this.classInput="error"
    }else{
      this.classInput="ok"
    }
    this.title = "Angular tp1"
    this.modificado=true
  }
  calcular(){
    this.resultado=this.op1+this.op2
  }
  ngOnInit(): void {
  }

}
