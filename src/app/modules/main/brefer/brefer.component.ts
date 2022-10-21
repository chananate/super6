import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetdataService } from 'src/app/service/getdata.service';

@Component({
  selector: 'app-brefer',
  templateUrl: './brefer.component.html',
  styleUrls: ['./brefer.component.scss']
})
export class BreferComponent implements OnInit {

  constructor(
    private router: Router,
    private ptSer: GetdataService
  ) { }

  ngOnInit(): void {
  }

}
