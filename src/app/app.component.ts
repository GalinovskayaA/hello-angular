import { Component, OnInit } from '@angular/core';
import { MyCardType } from "./card/card.component";
import { DataService } from "./data.service";
import { DataAnswer, DataCount, DataShow } from "./data-answer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  selectedAnswers: DataAnswer[] = []
  correctAnswers: DataCount = { count: 0, percent: 0 }
  showAnswer: DataShow = { showAnswer: false }
  constructor(private dataService: DataService) {}

  title: string = 'hello-angular'
  currentDate = new Date()
  selectedTest: Array<Array<MyCardType>> = []
  userName = ''
  userPassword = ''
  toggle = false
  isShowResults = false

  ngOnInit() {
    this.getCurrentDate()
    this.selectedAnswers = this.dataService.getData()
    this.correctAnswers = this.dataService.getCount()
    this.showAnswer = this.dataService.getShow()
    this.randomQuestionsJS()
  }

  toggleCards() {
    this.toggle = !this.toggle
  }

  showResults() {
    this.isShowResults = !this.isShowResults
  }

  clear(e: any) {
    e.target.value = ''
  }

  getCurrentDate() {
    setInterval(() => {
      this.currentDate = new Date()
    }, 1000)
  }

  randomQuestionsJS() {
    this.dataService.removeAll()

    this.selectedAnswers = this.dataService.getData()
    this.correctAnswers = this.dataService.getCount()
    this.dataService.setShow(false)

    let arr: Array<Array<MyCardType>> = []
    let index: number[] = []
    this.selectedTest = arr

    for (let i = 1; i < 16; i++) {
      let a = Math.floor(Math.random() * 10)
      let f = index.find( item => item === a)
      if (f === undefined) {
        index.push(a)
        arr.push(this.questionsJS[a])
      }
    }
    this.selectedTest = arr
  }

  startAgain() {
    this.toggle = false

    this.randomQuestionsJS()

    setTimeout(() => {
      this.toggleCards()
    }, 0)
  }

  questionsJS = [
    [
      {text: '<>', id: 11, type: false, title: 'Which operator returns true if the two compared values are not equal?'},
      {text: '~', id: 12, type: false, title: 'Which operator returns true if the two compared values are not equal?'},
      {text: '==!', id: 13, type: false, title: 'Which operator returns true if the two compared values are not equal?'},
      {text: '!==', id: 14, type: true, title: 'Which operator returns true if the two compared values are not equal?'},
    ] as Array < MyCardType >,
    [
      {text: 'Only a for statement uses a callback function.', id: 21, type: false, title: 'How is a forEach statement different from a for statement?'},
      {text: 'A for statement is generic, but a forEach statement can be used only with an array.', id: 22, type: true, title: 'How is a forEach statement different from a for statement?'},
      {text: 'Only a forEach statement lets you specify your own iterator.', id: 23, type: false, title: 'How is a forEach statement different from a for statement?'},
      {text: 'A forEach statement is generic, but a for statement can be used only with an array.', id: 24, type: false, title: 'How is a forEach statement different from a for statement?'},
    ] as Array < MyCardType >,
    [
      {text: 'let rate = 100;', id: 31, type: true, title: 'Which statement is the correct way to create a variable called rate and assign it the value 100?'},
      {text: 'let 100 = rate;', id: 32, type: false, title: 'Which statement is the correct way to create a variable called rate and assign it the value 100?'},
      {text: '100 = let rate;', id: 33, type: false, title: 'Which statement is the correct way to create a variable called rate and assign it the value 100?'},
      {text: 'rate = 100;', id: 34, type: false, title: 'Which statement is the correct way to create a variable called rate and assign it the value 100?'},
    ] as Array < MyCardType >,
    [
      {text: 'var student = new Person();', id: 41, type: true, title: 'Which statement creates a new object using the Person constructor? Which statement creates a new Person object called "student"?'},
      {text: 'var student = construct Person;', id: 42, type: false, title: 'Which statement creates a new object using the Person constructor? Which statement creates a new Person object called "student"?'},
      {text: 'var student = Person();', id: 43, type: false, title: 'Which statement creates a new object using the Person constructor? Which statement creates a new Person object called "student"?'},
      {text: 'var student = construct Person();', id: 44, type: false, title: 'Which statement creates a new object using the Person constructor? Which statement creates a new Person object called "student"?'}
    ] as Array < MyCardType >,
    [
      {text: 'It reloads the document whenever the value changes.', id: 51, type: false, title: 'How does a function create a closure?'},
      {text: 'It returns a reference to a variable in its parent scope.', id: 52, type: true, title: 'How does a function create a closure?'},
      {text: 'It completes execution without returning.', id: 53, type: false, title: 'How does a function create a closure?'},
      {text: 'It copies a local variable to the global scope.', id: 54, type: false, title: 'How does a function create a closure?'}
    ] as Array < MyCardType >,
    [
      {text: '/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/', id: 61, type: false, title: 'You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?'},
      {text: '/\\d\\d:\\d\\d:\\d\\d/', id: 62, type: true, title: 'You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?'},
      {text: '/[0-9]+:[0-9]+:[0-9]+/', id: 63, type: false, title: 'You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?'},
      {text: '/ : : /', id: 64, type: false, title: 'You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?'}
    ] as Array < MyCardType >,
    [
      {text: 'roadTypes.2', id: 71, type: false, title: 'How would you reference the text \'avenue\' in the code shown? let roadTypes = [\'street\', \'road\', \'avenue\', \'circle\'];'},
      {text: 'roadTypes[3]', id: 72, type: false, title: 'How would you reference the text \'avenue\' in the code shown? let roadTypes = [\'street\', \'road\', \'avenue\', \'circle\'];'},
      {text: 'roadTypes.3', id: 73, type: false, title: 'How would you reference the text \'avenue\' in the code shown? let roadTypes = [\'street\', \'road\', \'avenue\', \'circle\'];'},
      {text: 'roadTypes[2]', id: 74, type: true, title: 'How would you reference the text \'avenue\' in the code shown? let roadTypes = [\'street\', \'road\', \'avenue\', \'circle\'];'}
    ] as Array < MyCardType >,
    [
      {text: '\'float\'', id: 81, type: false, title: 'What is the result of running this statement? console.log(typeof 42);'},
      {text: '\'value\'', id: 82, type: false, title: 'What is the result of running this statement? console.log(typeof 42);'},
      {text: '\'number\'', id: 83, type: true, title: 'What is the result of running this statement? console.log(typeof 42);'},
      {text: '\'integer\'', id: 84, type: false, title: 'What is the result of running this statement? console.log(typeof 42);'}
    ] as Array < MyCardType >,
    [
      {text: 'self', id: 91, type: false, title: 'Which property references the DOM object that dispatched an event?'},
      {text: 'object', id: 92, type: false, title: 'Which property references the DOM object that dispatched an event?'},
      {text: 'target', id: 93, type: true, title: 'Which property references the DOM object that dispatched an event?'},
      {text: 'source', id: 94, type: false, title: 'Which property references the DOM object that dispatched an event?'}
    ] as Array < MyCardType >,
    [
      {text: 'JSON.fromString()', id: 101, type: false, title: 'Which method converts JSON data to a JavaScript object?'},
      {text: 'JSON.parse()', id: 102, type: true, title: 'Which method converts JSON data to a JavaScript object?'},
      {text: 'JSON.toObject()', id: 103, type: false, title: 'Which method converts JSON data to a JavaScript object?'},
      {text: 'JSON.stringify()', id: 104, type: false, title: 'Which method converts JSON data to a JavaScript object?'}
    ] as Array < MyCardType >,
    [
      {text: 'When you want to reuse a set of statements multiple times.', id: 111, type: false, title: 'When would you use a conditional statement?'},
      {text: 'When you want your code to choose between multiple options.', id: 112, type: true, title: 'When would you use a conditional statement?'},
      {text: 'When you want to group data together.', id: 113, type: false, title: 'When would you use a conditional statement?'},
      {text: 'When you want to loop through a group of statement.', id: 114, type: false, title: 'When would you use a conditional statement?'}
    ] as Array < MyCardType >,
    [
      {text: 'Object.get()', id: 121, type: false, title: 'Which Object method returns an iterable that can be used to iterate over the properties of an object?'},
      {text: 'Object.loop()', id: 122, type: false, title: 'Which Object method returns an iterable that can be used to iterate over the properties of an object?'},
      {text: 'Object.each()', id: 123, type: false, title: 'Which Object method returns an iterable that can be used to iterate over the properties of an object?'},
      {text: 'Object.keys()', id: 124, type: true, title: 'Which Object method returns an iterable that can be used to iterate over the properties of an object?'}
    ] as Array < MyCardType >,
    [
      {text: 'You can iterate over values in a Map in their insertion order.', id: 131, type: false, title: 'What is one difference between collections created with Map and collections created with Object?'},
      {text: 'You can count the records in a Map with a single method call.', id: 132, type: true, title: 'What is one difference between collections created with Map and collections created with Object?'},
      {text: 'Keys in Maps can be strings.', id: 133, type: false, title: 'What is one difference between collections created with Map and collections created with Object?'},
      {text: 'You can access values in a Map without iterating over the whole collection.', id: 134, type: false, title: 'What is one difference between collections created with Map and collections created with Object?'}
    ] as Array < MyCardType >,
    [
      {text: 'all of them', id: 141, type: false, title: 'Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?'},
      {text: 'const', id: 142, type: false, title: 'Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?'},
      {text: 'var', id: 143, type: true, title: 'Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?'},
      {text: 'let', id: 144, type: false, title: 'Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?'}
    ] as Array < MyCardType >,
    [
      {text: 'Boolean(0)', id: 151, type: false, title: 'Which of the following values is not a Boolean false?'},
      {text: 'Boolean("")', id: 152, type: false, title: 'Which of the following values is not a Boolean false?'},
      {text: 'Boolean(NaN)', id: 153, type: false, title: 'Which of the following values is not a Boolean false?'},
      {text: 'Boolean("false")', id: 154, type: true, title: 'Which of the following values is not a Boolean false?'}
    ] as Array < MyCardType >,
  ]
}
