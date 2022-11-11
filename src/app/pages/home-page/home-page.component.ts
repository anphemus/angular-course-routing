import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements OnInit {
  contactoSeleccionado: IContact | undefined = undefined;
  token: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    //comprobar si existe el token
    this.token = sessionStorage.getItem('token');

    //Leemos del estado del historial de navegacion
    const { data } = history.state;
    this.contactoSeleccionado = data;
  }

  goToContacts() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        gender: 'all',
      },
    };

    this.router.navigate(['contacts'],navigationExtras);
  }
}
