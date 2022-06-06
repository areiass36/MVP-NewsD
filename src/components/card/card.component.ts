import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "nd-card",
    templateUrl: "card.component.html",
    styleUrls: ["./card.component.scss"]
})
export class CardComponent {

    @Input('news')
    news: any;

    @Output('click')
    clickEvent = new EventEmitter();

    public onClick() {
        this.clickEvent.emit();
    }

    public getImgStyle() {
        return {
            'background-image': `radial-gradient(circle, rgba(255,255,255,0.10968137254901966) 0%, rgba(0,0,0,0.639093137254902) 100%), url(${this.news.imageUrl})`,
        }
    }
}