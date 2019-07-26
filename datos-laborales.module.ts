import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosLaboralesComponent } from './datos-laborales.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Datos laborales',
      urls: [
        { title: '', url: '/datos-laborales' },
        { title: 'Datos laborales' }
      ]
    },
    component: DatosLaboralesComponent
  }
];

@NgModule({
  imports: [
    NgbModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DatosLaboralesComponent]
})
export class DatosLaboralesModule { }
