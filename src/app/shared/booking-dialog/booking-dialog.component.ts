import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Booking } from 'src/app/pages/booking/booking/booking.component';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Booking) { }

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
