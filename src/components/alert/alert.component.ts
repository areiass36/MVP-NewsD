import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AlertData {
    title: string,
    message: string,
    leftOption: {
        message: string,
        function: () => void
    },
    rightOption: {
        message: string,
        function: () => void
    }
}

@Component({
    selector: 'nd-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

    constructor(
        public dialogRef: MatDialogRef<AlertComponent>,
        @Inject(MAT_DIALOG_DATA) public data: AlertData) { }

    public leftFunction(): void {
        if (this.data.leftOption.function != null)
            this.data.leftOption.function();
        this.dialogRef.close();
    }

    public rightFunction(): void {
        if (this.data.rightOption.function != null)
            this.data.rightOption.function();
        this.dialogRef.close();
    }
}