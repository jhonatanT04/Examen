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

  ngOnInit(): void {
  if (typeof window !== 'undefined') {
    const socket = new WebSocket('ws://websocket:8080');
    socket.onmessage = (event) => {
      this.messages.push(event.data);
    };
  }
}
}
