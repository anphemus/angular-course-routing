import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngRouting';

  token:string | null = null;

  constructor(private router: Router){

  }
  ngOnInit(): void {
    this.cargarDatos();

  }

  async cargarDatos(){
    this.token = await sessionStorage.getItem('token');

  }


  logOut(){
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);

  }
}
