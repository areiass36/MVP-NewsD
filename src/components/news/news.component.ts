import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { News } from "src/models/News";
import { NewsService } from "src/services/news.service";
import { SearchService } from "src/services/search.service";

@Component({
    selector: 'nd-news',
    templateUrl: './news.component.html',
    styleUrls: ['news.component.scss']
})
export class NewsComponent {

    id: string = '';
    news: News = {} as any;

    constructor(private activatedRoute: ActivatedRoute,
        private newsService: NewsService,
        private sanitazer: DomSanitizer) {
        this.id = activatedRoute.snapshot.params['id'];

        this.newsService.getNewsById(this.id).subscribe(n => {
            const html = sanitazer.bypassSecurityTrustHtml(n.content);
            n.content = html as string;
            this.news = n;
        })
    }

}