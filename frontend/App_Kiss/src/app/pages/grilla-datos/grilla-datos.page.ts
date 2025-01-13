import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-grilla-datos',
  templateUrl: './grilla-datos.page.html',
  styleUrls: ['./grilla-datos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GrillaDatosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
