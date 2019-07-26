import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig, NgbTabChangeEvent  } from '@ng-bootstrap/ng-bootstrap';
import { DatosLaboralesService } from './datos-laborales.service';
import {datos_laborales} from './datos-laborales';
import { Router } from '@angular/router';

@Component({
  templateUrl: './datos-laborales.component.html',
  styleUrls: ['./datos-laborales.component.css']

})
export class DatosLaboralesComponent implements OnInit {
  datoslaborales: Array<datos_laborales> = [];
  
archiTemp:datos_laborales = new datos_laborales();
	errorMessage:string;
  constructor(public router: Router , private service: DatosLaboralesService) { }

  ngOnInit() {
    this.service.getEmpleado().subscribe(
      listDatoslaborales=>{
      this.datoslaborales=listDatoslaborales;
      console.log(listDatoslaborales);
     },
    error=>{
      console.log("miError: "+this.errorMessage);
      this.errorMessage=<any>error;
    });
     
  }

  buttonClicked(){
    
    console.log(this.archiTemp);
    this.service.getInsertarDatos(this.archiTemp).subscribe(
      datos=>{
        console.log(datos);
        this.archiTemp=datos;
      },
      error=>{
        console.log("miError:"+this.errorMessage);
        this.errorMessage=<any>error;
      });
     
    
    }
     
    
    

     
  
  }



