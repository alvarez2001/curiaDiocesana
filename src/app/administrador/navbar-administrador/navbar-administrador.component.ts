import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogRegService } from 'src/app/services/login/log-reg.service';
import { UsersService } from 'src/app/services/usersAdmin/users.service';
import * as bulmaQuickview from "node_modules/bulma-extensions/bulma-quickview/dist/js/bulma-quickview.min.js";

@Component({
  selector: 'app-navbar-administrador',
  templateUrl: './navbar-administrador.component.html',
  providers:[
    LogRegService,
    UsersService
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NavbarAdministradorComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {


  public path: string;
  public rutaEnvio:string[];

  constructor(private route:ActivatedRoute,private loginSvc:LogRegService, private usersSvc:UsersService) {
  }

  ngOnInit(): void {

    this.path = this.route.snapshot.routeConfig.path;
    this.nameUser();
    (this.path === 'administrador') ? this.rutaEnvio = ['/administrador'] : this.rutaEnvio = ['/solicitante'];


    const body = document.body.classList.add('has-navbar-fixed-top');
  }

  ngOnDestroy(){
    const body = document.body.classList.remove('has-navbar-fixed-top');
  }

  ngOnChanges(){
    this.nameUser();
  }

  ngAfterViewInit(){
    const quickviews = bulmaQuickview.attach();
     this.activarNavbar();
  }

  nameUser(){
    const user = this.loginSvc.getDetailUser();

    return `${user.apellidos}, ${user.nombres}`;
  }


  logoutUser(){
    this.usersSvc.DistpatchLogoutUser();
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
