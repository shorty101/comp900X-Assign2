import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  sidebarHidden = "is-closed";
  wrapperClass = "";

  toggleSidebar() {
    if (this.sidebarHidden === "is-closed") {
      this.sidebarHidden = "is-open";
      this.wrapperClass = "toggled";
    } else {
      this.sidebarHidden = "is-closed";
      this.wrapperClass = "";
    }
  }
}
