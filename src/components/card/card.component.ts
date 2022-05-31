import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "nd-card",
    templateUrl: "card.component.html",
    styleUrls: ["./card.component.scss"]
})
export class CardComponent {

    @Output('click')
    clickEvent = new EventEmitter();

    public onClick() {
        this.clickEvent.emit();
    }
}