import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { DataService } from "../data.service";
import { DataAnswer, DataCount, DataShow } from "../data-answer";
import { MyCardType } from "../card/card.component";

@Component({
  selector: 'card-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
  interpolation: ['{{', '}}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AnswerComponent implements OnInit {
  @ViewChild('someInput') someInput!: ElementRef<HTMLInputElement>;

  @Input() answer!: MyCardType
  @Input() length!: number
  @Input() index!: number
  @Input() show!: boolean
  @Input() id!: number
  @Input() type!: boolean

  selectedAnswers: DataAnswer[] = []
  correctAnswers: DataCount = { count: 0, percent: 0 }
  showAnswer: DataShow = { showAnswer: false }

  constructor(private dataService: DataService) {}
  public name = ''

  ngOnInit() {
    this.name = this.index + '_question'

    this.selectedAnswers = this.dataService.getData()
    this.correctAnswers = this.dataService.getCount()
    this.showAnswer = this.dataService.getShow()
  }

  handler(id: number, isCorrect: boolean, title :string) {
    this.selectedAnswers = this.dataService.getData()
    let result = this.selectedAnswers.find(item => item.title === title)

    if (isCorrect) {
      if (result === undefined) {
        this.dataService.addData(id, isCorrect, title)
        this.selectedAnswers = this.dataService.getData()
        this.dataService.addCount()
        this.dataService.addPercent(this.selectedAnswers.length, this.length)
      }
    } else {
      if (result !== undefined) {
        this.dataService.removeData(title)
        this.selectedAnswers = this.dataService.getData()
        this.dataService.addCount()
        this.dataService.addPercent(this.correctAnswers.count, this.length)
      }
    }
    this.selectedAnswers = this.dataService.getData()
  }
}
