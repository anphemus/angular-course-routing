import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, PreloadAllModules } from '@angular/router';
@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {
  id:any | undefined
  constructor(private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {


    //vamos a leer los parametros

    this.activedRoute.params.subscribe((params:any) => {
     if(params.id){
      this.id = params.id;
     }
    })
  }


}
