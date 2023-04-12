import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',

  template: `
  <div class="container">
    <app-navbar></app-navbar>

    <!-- <main [@fadeAnimation]="o.isActivated ? o.activatedRoute : ''">
      <router-outlet #o="outlet"></router-outlet>
    </main> -->

    <app-footer></app-footer>
    <!-- <app-loader-spinner></app-loader-spinner> -->
  </div>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myhome';
}
