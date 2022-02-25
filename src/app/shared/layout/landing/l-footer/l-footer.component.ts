import { Component, OnInit } from '@angular/core';
import {NavigatorService} from "../../../../services/navigatorService/navigator.service";

@Component({
  selector: 'app-l-footer',
  templateUrl: './l-footer.component.html',
  styleUrls: ['./l-footer.component.css']
})
export class LFooterComponent implements OnInit {

  public year = new Date().getFullYear();

  openHome() {
    this.navigationService.navigateUrl("/login");
  }
  constructor(private navigationService: NavigatorService) { }

  ngOnInit(): void {
  }

}
