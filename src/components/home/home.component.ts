import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'nd-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(private router: Router) { }

    public openCard(id: string) {
        this.router.navigate([`/news/${id}`]);
    }

}