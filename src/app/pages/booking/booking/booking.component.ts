import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { BookingDialogComponent } from 'src/app/shared/booking-dialog/booking-dialog.component';

export interface Booking {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  currentDate = new Date();
  inTwoWeeksDate = new Date(Date.now() + 12096e5);
  minLength = 2;
  maxLength = 25;
  isSubmit = false;

  timeSet: string[] = ['9.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00'];

  bookingForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required,
    Validators.minLength(this.minLength),
    Validators.maxLength(this.maxLength)]],
    lastName: ['', [Validators.required,
    Validators.minLength(this.minLength),
    Validators.maxLength(this.maxLength)]],
    telephone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    date: ['', [Validators.required]],
    time: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() { }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookingDialogComponent, {
      width: '500px',
      data: this.bookingForm.value
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openSnackBar('Congratulation, we will wait for you !!!', 'success');
        this.isSubmit = true;
      } else {
        this.openSnackBar('Ooops!', 'error');
        this.isSubmit = false;
      }
    });
  }

openSnackBar(msg: string, type: string) {
  this.snackBar.open(msg, 'close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [type]
  });
}

}
