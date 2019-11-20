import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.css']
})
export class BigButtonComponent implements OnInit {

  @Input() label: string = 'Renato';

  constructor() { }

  ngOnInit() {
  }

}
