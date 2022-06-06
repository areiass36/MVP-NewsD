import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { SearchService } from "src/services/search.service";

@Component({
    selector: 'nd-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private searchService: SearchService,
        private router: Router) { }

    @ViewChild("input")
    input!: ElementRef<HTMLInputElement>;

    public search() {
        const term = this.input.nativeElement.value;
        this.searchService.setTerm(term);
        this.router.navigate(['/']);
    }
}