import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  messages: { text: string; sent: boolean }[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      // Adiciona a mensagem enviada pelo usuário
      this.messages.push({ text: this.newMessage, sent: true });

      // Limpa o campo de entrada
      this.newMessage = '';

      // Simula uma resposta após 1 segundo
      setTimeout(() => {
        this.messages.push({ text: 'Essa é uma resposta fake!', sent: false });
      }, 1000);
    }
  }

}
