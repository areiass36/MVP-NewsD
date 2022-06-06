import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AlertComponent } from "src/components/alert/alert.component";

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor(private matDialog: MatDialog) { }

    public showMessage(title: string, message: string, leftMessage?: string, leftOptionFunction?: () => void, rightMessage?: string, rightOptionFunction?: () => void) {
        this.matDialog.open(AlertComponent, {
            width: '500px',
            data: {
                title: title, message: message,
                leftOption: { message: leftMessage ?? 'Ok', function: leftOptionFunction },
                rightOption: { message: rightMessage, function: rightOptionFunction }
            }
        })
    }
}