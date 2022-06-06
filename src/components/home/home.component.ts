import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { News } from "src/models/News";
import { AlertService } from "src/services/alert.service";
import { NewsService } from "src/services/news.service";
import { SearchService } from "src/services/search.service";
import { UserService } from "src/services/user.service";

@Component({
    selector: 'nd-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    news: News[] = [];

    constructor(private router: Router,
        private newsService: NewsService,
        private searchService: SearchService,
        private userService: UserService,
        private alert: AlertService) {

        searchService.subscribe(t => {
            console.log("Were you ever called?", t);
            newsService.getNews({ term: t }).subscribe((n: News[]) => this.news = n);
        })


    }

    public openCard(id: string | undefined) {
        if (typeof id === 'undefined') return;

        this.router.navigate([`/news/${id}`]);
    }

    public openDialog(): void {
        if (this.userService.loggedUser) {
            this.router.navigate(['/new-content'])
        } else {
            this.alert.showMessage("Você não esta logado!",
                `Para contribuir com a nossa comunidade é necessário estar cadastrado
        na nossa plataforma!`,
                'Entrar', this.login.bind(this),
                'Cadastrar', this.register.bind(this));
        }
    }

    public register(): void {
        this.router.navigate(['/register']);
    }

    public login(): void {
        this.router.navigate(['/login']);
    }

}