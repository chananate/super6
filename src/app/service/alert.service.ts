import { Injectable } from "@angular/core";
import Swal from "sweetalert2";
@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor() {}

  errorPT(text = 'เกิดข้อผิดพลาด', title = 'เกิดข้อผิดพลาด') {
    return Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      footer: '<a href="#/main/patient">ต้องการลงทะเบียนผู้ป่วย ?</a>'
    });
  }

  error2(text = 'เกิดข้อผิดพลาด', title = 'เกิดข้อผิดพลาด') {
    return Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      confirmButtonText: 'ปิด'
    });
  }

  savesuccess() {
    return Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
