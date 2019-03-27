import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.styl'],
})
export class MessagesComponent {
    constructor(private messageService: MessageService) {}

    public get messages() {
        return this.messageService.getMessages();
    }

    public clear() {
        this.messageService.clear();
    }
}
