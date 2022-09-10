import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetdataService } from 'src/app/service/getdata.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  demoCollapsible = true;
  pList: any[] = [];


  constructor(
    private router: Router,
    private patientSer: GetdataService
  ) { }

  ngOnInit() {
    this.getList();
  }

  async getList() {
    try {
      const result: any = await this.patientSer.getAll();
      console.log(result);
      if (result.rows) {
        this.pList = result.rows;
      }
    } catch (err) {
      console.log(err);
    }
  }

  // async onSearch(searchYear, selectMonth) {
  //   console.log('searchYear', searchYear);
  //   console.log('selectMonth', selectMonth);
  //   if (selectMonth) {
  //     moment.locale('th');
  //     selectMonth = moment(selectMonth).format('MM');
  //     console.log('selectMonthI', selectMonth);
  //   }

  //   // tslint:disable-next-line: radix
  //   if (parseInt(selectMonth) < 10) {
  //     this.searchYear2 = moment(searchYear)
  //       .subtract(542, 'years')
  //       .format('YYYY');
  //   } else {
  //     this.searchYear2 = moment(searchYear)
  //       .subtract(543, 'years')
  //       .format('YYYY');
  //   }
  //   searchYear = moment(searchYear)
  //     .subtract(543, 'years')
  //     .format('YYYY');
  //   selectMonth = moment(selectMonth)
  //     .add(1, 'month')
  //     .format('MM');
  //   console.log('searchY', searchYear, this.searchYear2, selectMonth);

  //   try {
  //     const result: any = await this.leaveService.checkPerYearwithMonth(
  //       searchYear,
  //       this.searchYear2,
  //       selectMonth
  //     );
  //     if (result.rows) {
  //       const dep = [];
  //       const data: any = [];
  //       for (const i of result.rows) {
  //         const idx = _.findIndex(data, { personId: i.personId });
  //         console.log(idx, i.lTypeId, i.totalLeave);
  //         if (idx > -1) {
  //           data[idx][i.lTypeId] = i.totalLeave;
  //         } else {
  //           const obj: any = {
  //             personId: i.personId,
  //             name: i.name,
  //             surname: i.surname,
  //             depId: i.depId
  //           };

  //           obj[i.lTypeId] = i.totalLeave;
  //           data.push(obj);
  //         }
  //       }
  //       for (const d of this.depList) {
  //         const item = _.filter(data, { depId: +d.depId });
  //         if (item.length > 0) {
  //           d.item = item;
  //           dep.push(d);
  //         }
  //       }
  //       this.userList = dep;
  //       console.log(this.userList);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

}
