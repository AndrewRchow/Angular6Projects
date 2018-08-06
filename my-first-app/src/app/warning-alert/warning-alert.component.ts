import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <div class="alert alert-danger">
  <strong>Danger!</strong> Indicates a dangerous or potentially negative <p>action</p>.
</div>
`,
  styles: [
   ` 
    p {
      color: blue;
    }
  
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
