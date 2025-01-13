import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabla-seleccion',
  templateUrl: './tabla-seleccion.page.html',
  styleUrls: ['./tabla-seleccion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TablaSeleccionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
