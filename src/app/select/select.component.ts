import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent implements OnInit {
  @Output() onChanged = new EventEmitter<string>()
  change(value: string) {
    this.onChanged.emit(value)
  }

  constructor() { }

  tests: string[] = ['JS', 'CSS', 'HTML'];
  selectedTest = 'Choose a test'
  openSelect = false

  ngOnInit(): void {
  }

  changeTest(value: string) {
    this.selectedTest = value
    this.onChanged.emit(value)
  }

  toggleSelect(): void {
    this.openSelect = !this.openSelect
  }
}
