import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    private messages: string[] = [];
    public add(message: string) {
        this.messages.push(message);
    }
    public clear() {
        this.messages = [];
    }
    public getMessages(): string[] {
        return this.messages;
    }
}
