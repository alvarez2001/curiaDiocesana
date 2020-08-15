import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store,select } from "@ngrx/store";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  pantallaCarga$:Observable<boolean>;
  constructor(private store:Store<{pantallaCarga:boolean}>){
    this.pantallaCarga$ = this.store.pipe(select('pantallaCarga'))
  }

  ngOnInit(){
  }
}
