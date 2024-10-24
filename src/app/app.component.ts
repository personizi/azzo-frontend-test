import { Component, AfterViewInit } from '@angular/core';
import KTComponents from '../metronic/core/index';
import KTLayout from '../metronic/app/layouts/demo1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Note que 'styleUrls' está no plural
})
export class AppComponent implements AfterViewInit {
  title = 'azzo-frontend';

  ngAfterViewInit(): void {
    KTComponents.init();
    KTLayout.init();
  }
}
