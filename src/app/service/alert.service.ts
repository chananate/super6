import { Injectable } from "@angular/core";
import Swal from "sweetalert2";
@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor() {}

  error() {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
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
