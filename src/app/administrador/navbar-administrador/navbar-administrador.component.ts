import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogRegService } from 'src/app/services/login/log-reg.service';
import { Store,select } from "@ngrx/store";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar-administrador',
  templateUrl: './navbar-administrador.component.html',
  providers:[
    LogRegService
  ]
})
export class NavbarAdministradorComponent implements OnInit, AfterViewInit {


  public path: string;
  constructor(private route:ActivatedRoute,private loginSvc:LogRegService) {
  }

  ngOnInit(): void {
    this.path = this.route.snapshot.routeConfig.path;
    this.nameUser()
  }

  ngAfterViewInit(){
     this.activarNavbar();
  }

  nameUser(){
    const user = this.loginSvc.getDetailUser();

    return `${user.apellidos}, ${user.nombres}`;
  }


  private activarNavbar(){
     // Get all "navbar-burger" elements
     const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
     // Check if there are any navbar burgers
     if ($navbarBurgers.length > 0) {

       // Add a click event on each of them
       $navbarBurgers.forEach( el => {
         el.addEventListener('click', () => {

           // Get the target from the "data-target" attribute
           const target = el.dataset.target;
           const $target = document.getElementById(target);

           // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
           el.classList.toggle('is-active');
           $target.classList.toggle('is-active');
         });
       });
     }
  }

}
