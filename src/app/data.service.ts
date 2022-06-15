import { DataAnswer, DataCount, DataShow } from './data-answer'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class DataService {
  private selectedAnswers: DataAnswer[] = []
  private correctAnswers: DataCount = { count: 0, percent: 0 }
  private showAnswer: DataShow = { showAnswer: false }

  getData(): DataAnswer[] {
    return this.selectedAnswers
  }

  addData(id?: number, isCorrect?: boolean, title?: string) {
    this.selectedAnswers.push(new DataAnswer(id, isCorrect, title))
  }

  removeData(title: string) {
    this.selectedAnswers = this.selectedAnswers.filter(item => item.title !== title)
  //  console.log('-----')
  //  console.log(this.selectedAnswers)
  }

  getCount(): DataCount {
    return this.correctAnswers
  }

  addCount() {
  //  console.log('add')
  //  console.log(this.selectedAnswers.length)
    this.correctAnswers.count = this.selectedAnswers.length
  }

  addPercent(count: number, length: number) {
    if (length) {
      let result = +(count / length * 100).toFixed(2)
      length === 0 ? this.correctAnswers.percent = 0 : this.correctAnswers.percent = result
    }
  }

  setShow(value: boolean) {
    this.showAnswer = { showAnswer: value }
  }

  getShow() {
    return this.showAnswer
  }

  removeAll() {
    this.selectedAnswers = []
    this.correctAnswers = { count: 0, percent: 0 }
    this.showAnswer = { showAnswer: false }
  }
}
