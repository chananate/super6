import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  collapsed = true;
  constructor(
    private mainService : MainService
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.mainService.logout();
  }

}
