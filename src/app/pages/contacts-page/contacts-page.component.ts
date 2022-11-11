import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  listContacts: IContact[] = [
    {
      id: 1,
      name: 'John',
      lastname: 'Doe',
      email: 'john@doe.com',
      phone: 555-555-5555,
      gender: 'male',
    },
    {
      id: 2,
      name: 'Maria',
      lastname: 'Doe',
      email: 'Maria@doe.com',
      phone: 555-555-5555,
      gender: 'male',
    },
    {
      id: 3,
      name: 'Jose',
      lastname: 'Doe',
      email: 'jose@doe.com',
      phone: 555-555-5555,
      gender: 'male',
    },
    {
      id: 4,
      name: 'Veronic',
      lastname: 'Doe',
      email: 'veronich@doe.com',
      phone: 555-555-5555,
      gender: 'female',
    },
  ]
  constructor(private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.queryParams.subscribe(params => {
      const { gender } = params
      if(gender){
        if(gender === 'all'){
          this.listContacts = this.listContacts;
        }
        else{
          this.listContacts = this.listContacts.filter(contact => contact.gender === gender)
        }
      }
    })


  }


  //ejemplo de paso de informacion entre componentes a través del estado


  volverAHome(contacto: IContact){
    let navigationExtra: NavigationExtras = {
      state: {
        data: contacto,
      },


    }
    this.router.navigate(['/home'],navigationExtra);
  }
}
