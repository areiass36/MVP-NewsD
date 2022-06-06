import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FileManagerService, HtmlEditorService, ImageService, LinkService, TableService, ToolbarService } from "@syncfusion/ej2-angular-richtexteditor";
import { News } from "src/models/News";
import { User } from "src/models/User";
import { NewsService } from "src/services/news.service";
import { UserService } from "src/services/user.service";

const toolboxList = ['FullScreen', '|', 'Bold', 'Italic', 'Underline', '|', 'Formats', 'FontColor', '|', 'FontName', 'FontSize', '|', 'Alignments', '|', 'Indent', 'Outdent', '|', 'OrderedList', 'UnorderedList', '|',
    'CreateTable', 'CreateLink', '|', 'SourceCode', '|', 'Undo', 'Redo'];

const fontFamily = {
    width: '60px',
    items: [
        { text: 'Roboto', value: 'Roboto' },
        { text: 'Segoe UI', value: 'Segoe UI' },
        { text: 'Arial', value: 'Arial,Helvetica,sans-serif' },
        { text: 'Courier New', value: 'Courier New,Courier,monospace' },
        { text: 'Georgia', value: 'Georgia,serif' },
        { text: 'Impact', value: 'Impact,Charcoal,sans-serif' },
        { text: 'Calibri Light', value: 'CalibriLight' }]
};

@Component({
    selector: 'nd-new-content',
    templateUrl: './new-content.component.html',
    styleUrls: ['./new-content.component.scss'],
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class NewContentComponent {

    @ViewChild("img")
    img!: ElementRef<HTMLImageElement>;

    fileName: string = '';
    tools = { type: 'Expand', items: toolboxList, settings: { enableFloating: true, } };
    fontFamily = fontFamily;
    user: User;

    newsForm: FormGroup;

    constructor(private fb: FormBuilder,
        private userService: UserService,
        private newsService: NewsService,
        private router: Router) {
        this.user = this.userService.loggedUser;

        this.newsForm = new FormGroup({
            creatorId: fb.control(this.user.id),
            title: fb.control('', [Validators.required, Validators.maxLength(200)]),
            content: fb.control('', Validators.required),
            imageUrl: fb.control('', [Validators.required])
        });
    }

    public uploadFile() {
        const upload = document.createElement("input") as HTMLInputElement;
        upload.type = 'file';
        upload.onchange = () => {
            const file = upload.files![0];
            this.fileName = file.name;

            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                this.newsForm.controls['imageUrl'].setValue(fileReader.result);
                this.img.nativeElement.src = fileReader.result as string
            };

            fileReader.readAsDataURL(file);
        };
        upload.click();
    }

    public uploadNews() {
        if (this.newsForm.valid) {
            const news: News = this.newsForm.value;
            this.newsService.createNews(news).subscribe(t => { this.router.navigate(['/']) })
        }
    }
}