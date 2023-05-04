import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() title: string | undefined;
  @Output() removed: EventEmitter<string>= new EventEmitter<string>();

  remove() {
    console.log('remove');
    this.removed.emit(this.title);
  }
}
