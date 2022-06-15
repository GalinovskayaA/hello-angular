import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { DataShow } from "../data-answer";
import { DataService } from "../data.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent implements OnInit {
  @Input() arrayQuestion!: Array<MyCardType>
  @Input() length!: number
  @Input() _index!: number
  @Input() clear!: (e: any) => void
  @Input()
  set index(value: number) {
    this._index = value + 1
  }

  get index() {
    return this._index
  }

  showAnswer: DataShow = { showAnswer: false }
  constructor(private dataService: DataService) {}

  comment = ''

  ngOnInit() {
    this.showAnswer = this.dataService.getShow()
  }

  inputHandler(value: string) {
    this.comment = value
  }

  checkAnswer() {
    this.dataService.setShow(!this.showAnswer.showAnswer)
    this.showAnswer = this.dataService.getShow()
  }
}

export interface MyCardType {
  text: string
  id: number
  type: boolean
  title: string
}
