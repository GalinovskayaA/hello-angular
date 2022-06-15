export class DataAnswer {
  constructor(public id?: number, public isCorrect?: boolean, public title?: string) {}
}

export class DataCount {
  constructor(public count: number, public percent: number) {}
}

export class DataShow {
  constructor(public showAnswer: boolean) {}
}
