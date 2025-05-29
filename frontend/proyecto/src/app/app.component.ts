import { Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto';
  messages: string[] = [];
  private socket: WebSocket;
  constructor() {
    this.socket = new WebSocket('ws://localhost:8080/ws');
  }
  messageReceived(event: MessageEvent) {
    const message = event.data;
    this.messages.push(message);
    console.log('Mensaje recibido:', message);
  }
  conectarWebSocket() {
    this.socket = new WebSocket('ws://localhost:3000');
    this.socket.onopen = () => {
      console.log('WebSocket conexion establecida');
    };
    this.socket.onmessage = (event) => {
      this.messages.push(event.data);
    };
    this.socket.onclose = () => {
      console.log('WebSocket conexion cerrada');
    };
    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }
}
