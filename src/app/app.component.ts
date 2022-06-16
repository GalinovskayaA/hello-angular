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
  testName = 'JS'
  toggle = false
  isShowResults = false

  ngOnInit() {
    this.getCurrentDate()
    this.selectedAnswers = this.dataService.getData()
    this.correctAnswers = this.dataService.getCount()
    this.showAnswer = this.dataService.getShow()

    this.randomQuestionsJS()
  }

  onChangeTestName(value: string) {
    this.testName = value
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

    let test
    this.testName === 'CSS' ? test = this.questionsCSS :
      this.testName === 'HTML' ? test = this.questionsHTML :
        test = this.questionsJS
    let arr: Array<Array<MyCardType>> = []
    let index: number[] = []
    this.selectedTest = arr

    for (let i = 1; i < 16; i++) {
      let a = Math.floor(Math.random() * 10)
      let f = index.find( item => item === a)
      if (f === undefined) {
        index.push(a)
        arr.push(test[a])
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

  questionsHTML = [
    [
      {text: '<link><meta><title>', id: 11, type: false, title: 'What are the best examples of void elements?'},
      {text: '<br><base><source>', id: 12, type: true, title: 'What are the best examples of void elements?'},
      {text: '<input><br><p>', id: 13, type: false, title: 'What are the best examples of void elements?'},
      {text: '<area><embed><strong>', id: 14, type: false, title: 'What are the best examples of void elements?'},
    ] as Array < MyCardType >,
    [
      {text: '<iframe>, <frame>, and <frameset>', id: 21, type: false, title: 'In HTML5, which tag or tags embed a webpage inside of a webpage?'},
      {text: '<frame>', id: 22, type: false, title: 'In HTML5, which tag or tags embed a webpage inside of a webpage?'},
      {text: '<iframe>', id: 23, type: true, title: 'In HTML5, which tag or tags embed a webpage inside of a webpage?'},
      {text: '<frame> and <frameset>', id: 24, type: false, title: 'In HTML5, which tag or tags embed a webpage inside of a webpage?'},
    ] as Array < MyCardType >,
    [
      {text: '<strong>', id: 31, type: true, title: 'What is the best way to apply bold styling to text?'},
      {text: 'Use CSS.', id: 32, type: false, title: 'What is the best way to apply bold styling to text?'},
      {text: '<bold>', id: 33, type: false, title: 'What is the best way to apply bold styling to text?'},
      {text: '<b>', id: 34, type: false, title: 'What is the best way to apply bold styling to text?'},
    ] as Array < MyCardType >,
    [
      {text: 'when the content can be removed without detracting from the page\'s message', id: 41, type: true, title: 'When should you use the <aside> element?'},
      {text: 'for anything you want to move to the side, like a pull quote box, a sidebar, or an image with text wrapping around it', id: 42, type: false, title: 'When should you use the <aside> element?'},
      {text: 'for anything in parentheses', id: 43, type: false, title: 'When should you use the <aside> element?'},
      {text: 'for anything in a sidebar', id: 44, type: false, title: 'When should you use the <aside> element?'}
    ] as Array < MyCardType >,
    [
      {text: '<svg>, <picture>, <audio>, and <video>', id: 51, type: false, title: 'With which tags is the <source> element associated?'},
      {text: '<picture>, <audio>, and <video>', id: 52, type: true, title: 'With which tags is the <source> element associated?'},
      {text: 'It is interchangeable with the src attribute, so any element which uses src may use <source>', id: 53, type: false, title: 'With which tags is the <source> element associated?'},
      {text: '<audio> and <video>', id: 54, type: false, title: 'With which tags is the <source> element associated?'}
    ] as Array < MyCardType >,
    [
      {text: 'readonly', id: 61, type: false, title: 'What is NOT a valid attribute for the <textarea> element?'},
      {text: 'max', id: 62, type: true, title: 'What is NOT a valid attribute for the <textarea> element?'},
      {text: 'form', id: 63, type: false, title: 'What is NOT a valid attribute for the <textarea> element?'},
      {text: 'spellcheck', id: 64, type: false, title: 'What is NOT a valid attribute for the <textarea> element?'}
    ] as Array < MyCardType >,
    [
      {text: 'It connects the web browser to a SA-MP server.', id: 71, type: false, title: 'What is the purpose of the <samp> element?'},
      {text: 'It identifies enclosed text as a sampler or an example.', id: 72, type: false, title: 'What is the purpose of the <samp> element?'},
      {text: 'It identifies sample output from a computer program.', id: 73, type: true, title: 'What is the purpose of the <samp> element?'},
      {text: 'It uses a simple application messaging protocol to connect the browser to a texting device.', id: 74, type: false, title: 'What is the purpose of the <samp> element?'}
    ] as Array < MyCardType >,
    [
      {text: 'Use <ul> when you want a bulleted list and <ol> when you want a numbered list.', id: 81, type: true, title: 'When should you use <ol> and <ul> elements?'},
      {text: 'Use <ul> when you have a list of items in which the order of the items matters. Use <ol> when you have a list of items that could go in any order.', id: 82, type: false, title: 'When should you use <ol> and <ul> elements?'},
      {text: 'Use <ol> when you want a bulleted list and <ul> when you want a numbered list.', id: 83, type: false, title: 'When should you use <ol> and <ul> elements?'},
      {text: 'Use <ol> when you have a list of items in which the order of the items matters. Use <ul> when you have a list of items that could go in any order.', id: 84, type: false, title: 'When should you use <ol> and <ul> elements?'}
    ] as Array < MyCardType >,
    [
      {text: 'The server wraps the webpage in an HTML5 wrapper.', id: 91, type: false, title: 'How do you confirm that a document is written in HTML5?'},
      {text: 'Use the <!DOCTYPE html> declaration that starts the document.', id: 92, type: true, title: 'How do you confirm that a document is written in HTML5?'},
      {text: 'The browser receives encoding from the server to display the document with HTML5.', id: 93, type: false, title: 'How do you confirm that a document is written in HTML5?'},
      {text: 'It is enclosed in a <html> tag.', id: 94, type: false, title: 'How do you confirm that a document is written in HTML5?'}
    ] as Array < MyCardType >,
    [
      {text: 'This tag is depreciated and should not be used.', id: 101, type: false, title: 'What is the <hr>tag typically used for?'},
      {text: 'It designates a topic shift within a section at the paragraph level.', id: 102, type: true, title: 'What is the <hr>tag typically used for?'},
      {text: 'It draws a horizontal line.', id: 103, type: false, title: 'What is the <hr>tag typically used for?'},
      {text: 'It designates a shift of topic at the section level.', id: 104, type: false, title: 'What is the <hr>tag typically used for?'}
    ] as Array < MyCardType >,
    [
      {text: 'It labels webpages with important information.', id: 111, type: false, title: 'What does the <label> element do?'},
      {text: 'It creates an ID for a corresponding input element.', id: 112, type: false, title: 'What does the <label> element do?'},
      {text: 'It overrides the name attribute\'s value on a child input element.', id: 113, type: false, title: 'What does the <label> element do?'},
      {text: 'It programmatically associates a text label with an interface element.', id: 114, type: true, title: 'What does the <label> element do?'}
    ] as Array < MyCardType >,
    [
      {text: '_blank', id: 121, type: true, title: 'To get a link to open in a new window or tab, use the _ attribute'},
      {text: '_self', id: 122, type: false, title: 'To get a link to open in a new window or tab, use the _ attribute'},
      {text: '_new', id: 123, type: false, title: 'To get a link to open in a new window or tab, use the _ attribute'},
      {text: '_parent', id: 124, type: false, title: 'To get a link to open in a new window or tab, use the _ attribute'}
    ] as Array < MyCardType >,
    [
      {text: '<p>Press the <tt>Enter</tt> key to proceed.</p>', id: 131, type: false, title: 'What is the best semantic way to indicate that text refers to keyboard entry?'},
      {text: '<p>Press the <kbd>Enter</kbd> key to proceed.</p>', id: 132, type: true, title: 'What is the best semantic way to indicate that text refers to keyboard entry?'},
      {text: '<p>Press the <samp>Enter</samp> key to proceed.</p>', id: 133, type: false, title: 'What is the best semantic way to indicate that text refers to keyboard entry?'},
      {text: '<p>Press the Enter key to proceed.</p>', id: 134, type: false, title: 'What is the best semantic way to indicate that text refers to keyboard entry?'}
    ] as Array < MyCardType >,
    [
      {text: 'accesskey', id: 141, type: true, title: 'What attribute applies a keyboard shortcut hint to the current element?'},
      {text: 'shortcut', id: 142, type: false, title: 'What attribute applies a keyboard shortcut hint to the current element?'},
      {text: 'keyboard', id: 143, type: false, title: 'What attribute applies a keyboard shortcut hint to the current element?'},
      {text: 'access', id: 144, type: false, title: 'What attribute applies a keyboard shortcut hint to the current element?'}
    ] as Array < MyCardType >,
    [
      {text: '<DOCTYPE html>', id: 151, type: false, title: 'Which tag is the root element of an HTML document?'},
      {text: '<html>', id: 152, type: true, title: 'Which tag is the root element of an HTML document?'},
      {text: '<body>', id: 153, type: false, title: 'Which tag is the root element of an HTML document?'},
      {text: '<root>', id: 154, type: false, title: 'Which tag is the root element of an HTML document?'}
    ] as Array < MyCardType >,
  ]

  questionsCSS = [
    [
      {text: 'a[title]{...}', id: 11, type: true, title: 'Using an attribute selector, how would you select an <a> element with a "title" attribute?'},
      {text: 'a > title {...}', id: 12, type: false, title: 'Using an attribute selector, how would you select an <a> element with a "title" attribute?'},
      {text: 'a.title {...}', id: 13, type: false, title: 'Using an attribute selector, how would you select an <a> element with a "title" attribute?'},
      {text: 'a=title {...}', id: 14, type: false, title: 'Using an attribute selector, how would you select an <a> element with a "title" attribute?'},
    ] as Array < MyCardType >,
    [
      {text: 'Use the "clearfix hack" on the floated element and add a float to the parent element.', id: 21, type: false, title: 'CSS grid and flexbox are now becoming a more popular way to create page layouts. However, floats are still commonly used, especially when working with an older code base, or if you need to support older browser version. What are two valid techniques used to clear floats?'},
      {text: 'Use the overflow property on the floated element or the "clearfix hack" on either the floated or parent element.', id: 22, type: false, title: 'CSS grid and flexbox are now becoming a more popular way to create page layouts. However, floats are still commonly used, especially when working with an older code base, or if you need to support older browser version. What are two valid techniques used to clear floats?'},
      {text: 'Use the "clearfix hack" on the floated element or the overflow property on the parent element.', id: 23, type: false, title: 'CSS grid and flexbox are now becoming a more popular way to create page layouts. However, floats are still commonly used, especially when working with an older code base, or if you need to support older browser version. What are two valid techniques used to clear floats?'},
      {text: 'Use the "clearfix hack" on the parent element or use the overflow property with a value other than "visible."', id: 24, type: true, title: 'CSS grid and flexbox are now becoming a more popular way to create page layouts. However, floats are still commonly used, especially when working with an older code base, or if you need to support older browser version. What are two valid techniques used to clear floats?'},
    ] as Array < MyCardType >,
    [
      {text: 'Opacity specifies the level of transparency of the child elements. Background with an rgba() value applies transparency to the background color only.', id: 31, type: false, title: 'When adding transparency styles, what is the difference between using the opacity property versus the background property with an rgba() value?'},
      {text: 'Opacity applies transparency to the background color only. Background with an rgba() value specifies the level of transparency of an element, as a whole, including its content.', id: 32, type: false, title: 'When adding transparency styles, what is the difference between using the opacity property versus the background property with an rgba() value?'},
      {text: 'Opacity specifies the level of transparency of an element, including its content. Background with an rgba() value applies transparency to the background color only.', id: 33, type: true, title: 'When adding transparency styles, what is the difference between using the opacity property versus the background property with an rgba() value?'},
      {text: 'Opacity applies transparency to the parent and child elements. Background with an rgba() value specifies the level of transparency of the parent element only.', id: 34, type: false, title: 'When adding transparency styles, what is the difference between using the opacity property versus the background property with an rgba() value?'},
    ] as Array < MyCardType >,
    [
      {text: 'By default, block elements are the same height and width as the content container between their tags; inline elements span the entire width of its container.', id: 41, type: false, title: 'What is true of block and inline elements? (Alternative: Which statement about block and inline elements is true?)'},
      {text: 'By default, block elements span the entire width of its container; inline elements are the same height and width as the content contained between their tags.', id: 42, type: true, title: 'What is true of block and inline elements? (Alternative: Which statement about block and inline elements is true?)'},
      {text: 'A <nav> element is an example of an inline element. <header> is an example of a block element.', id: 43, type: false, title: 'What is true of block and inline elements? (Alternative: Which statement about block and inline elements is true?)'},
      {text: 'A <span> is an example of a block element. <div> is an example of an inline element.', id: 44, type: false, title: 'What is true of block and inline elements? (Alternative: Which statement about block and inline elements is true?)'}
    ] as Array < MyCardType >,
    [
      {text: 'to control the height of the space between two lines of content', id: 51, type: true, title: 'What is the line-height property primarily used for?'},
      {text: 'to control the height of the space between heading elements', id: 52, type: false, title: 'What is the line-height property primarily used for?'},
      {text: 'to control the height of the character size', id: 53, type: false, title: 'What is the line-height property primarily used for?'},
      {text: 'to control the width of the space between characters', id: 54, type: false, title: 'What is the line-height property primarily used for?'}
    ] as Array < MyCardType >,
    [
      {text: 'Multiple classes can be used within the same element.', id: 61, type: false, title: 'Three of these choices are true about class selectors. Which is NOT true?'},
      {text: 'The same class can be used multiple times per page.', id: 62, type: false, title: 'Three of these choices are true about class selectors. Which is NOT true?'},
      {text: 'Class selectors with a leading period', id: 63, type: false, title: 'Three of these choices are true about class selectors. Which is NOT true?'},
      {text: 'Classes can be used multiple times per page but not within the same element.', id: 64, type: true, title: 'Three of these choices are true about class selectors. Which is NOT true?'}
    ] as Array < MyCardType >,
    [
      {text: 'position', id: 71, type: true, title: 'There are many properties that can be used to align elements and create page layouts such as float, position, flexbox and grid. Of these four properties, which one should be used to align a global navigation bar which stays fixed at the top of the page?'},
      {text: 'flexbox', id: 72, type: false, title: 'There are many properties that can be used to align elements and create page layouts such as float, position, flexbox and grid. Of these four properties, which one should be used to align a global navigation bar which stays fixed at the top of the page?'},
      {text: 'grid', id: 73, type: false, title: 'There are many properties that can be used to align elements and create page layouts such as float, position, flexbox and grid. Of these four properties, which one should be used to align a global navigation bar which stays fixed at the top of the page?'},
      {text: 'float', id: 74, type: false, title: 'There are many properties that can be used to align elements and create page layouts such as float, position, flexbox and grid. Of these four properties, which one should be used to align a global navigation bar which stays fixed at the top of the page?'}
    ] as Array < MyCardType >,
    [
      {text: 'CSS can be applied to SVGs but JavaScript cannot be.', id: 81, type: false, title: 'Which of the following is true of the SVG image format? (Alternative: Which statement about the SVG image format is true?)'},
      {text: 'SVGs work best for creating 3D graphics.', id: 82, type: false, title: 'Which of the following is true of the SVG image format? (Alternative: Which statement about the SVG image format is true?)'},
      {text: 'SVGs can be created as a vector graphic or coded using SVG specific elements such as <svg>, <line>, and <ellipse>.', id: 83, type: true, title: 'Which of the following is true of the SVG image format? (Alternative: Which statement about the SVG image format is true?)'},
      {text: 'SVGs are a HAML-based markup language for creating vector graphics.', id: 84, type: false, title: 'Which of the following is true of the SVG image format? (Alternative: Which statement about the SVG image format is true?)'}
    ] as Array < MyCardType >,
    [
      {text: 'Use background-fill to set the color inside the object and stroke or border to set the color of the border.', id: 91, type: false, title: 'To change the color of an SVG using CSS, which property is used?'},
      {text: 'The color cannot be changed with CSS.', id: 92, type: false, title: 'To change the color of an SVG using CSS, which property is used?'},
      {text: 'Use fill or background to set the color inside the object and stroke to set the color of the border.', id: 93, type: false, title: 'To change the color of an SVG using CSS, which property is used?'},
      {text: 'Use fill to set the color inside the object and stroke to set the color of the border.', id: 94, type: true, title: 'To change the color of an SVG using CSS, which property is used?'}
    ] as Array < MyCardType >,
    [
      {text: 'the closest element with position: relative', id: 101, type: false, title: 'When using position: fixed, what will the element always be positioned relative to?'},
      {text: 'the viewport', id: 102, type: true, title: 'When using position: fixed, what will the element always be positioned relative to?'},
      {text: 'the parent element', id: 103, type: false, title: 'When using position: fixed, what will the element always be positioned relative to?'},
      {text: 'the wrapper element', id: 104, type: false, title: 'When using position: fixed, what will the element always be positioned relative to?'}
    ] as Array < MyCardType >,
    [
      {text: 'only if the background-repeat property is set to repeat', id: 111, type: false, title: 'By default, a background image will repeat _'},
      {text: 'indefinitely, vertically, and horizontally', id: 112, type: true, title: 'By default, a background image will repeat _'},
      {text: 'indefinitely on the horizontal axis only', id: 113, type: false, title: 'By default, a background image will repeat _'},
      {text: 'once, on the x and y axis', id: 114, type: false, title: 'By default, a background image will repeat _'}
    ] as Array < MyCardType >,
    [
      {text: 'print, screen, aural', id: 121, type: false, title: 'When using media queries, media types are used to target a device category. Which choice lists current valid media types?'},
      {text: 'print, screen, television', id: 122, type: false, title: 'When using media queries, media types are used to target a device category. Which choice lists current valid media types?'},
      {text: 'print, screen, speech', id: 123, type: true, title: 'When using media queries, media types are used to target a device category. Which choice lists current valid media types?'},
      {text: 'print, speech, device', id: 124, type: false, title: 'When using media queries, media types are used to target a device category. Which choice lists current valid media types?'}
    ] as Array < MyCardType >,
    [
      {text: 'p::first-letter { color: red; }', id: 131, type: true, title: 'How would you make the first letter of every paragraph on the page red?'},
      {text: 'p:first-letter { color: red; }', id: 132, type: false, title: 'How would you make the first letter of every paragraph on the page red?'},
      {text: 'first-letter::p { color: red; }', id: 133, type: false, title: 'How would you make the first letter of every paragraph on the page red?'},
      {text: 'first-letter:p { color: red; }', id: 134, type: false, title: 'How would you make the first letter of every paragraph on the page red?'}
    ] as Array < MyCardType >,
    [
      {text: 'corner-radius: 10px;', id: 141, type: false, title: 'Which choice would give a block element rounded corners?'},
      {text: 'border-corner: 10px;', id: 142, type: false, title: 'Which choice would give a block element rounded corners?'},
      {text: 'corner-curve: 10px;', id: 143, type: false, title: 'Which choice would give a block element rounded corners?'},
      {text: 'border-radius: 10px;', id: 144, type: true, title: 'Which choice would give a block element rounded corners?'}
    ] as Array < MyCardType >,
    [
      {text: 'The rem unit is relative to the font-size of the p element.', id: 151, type: false, title: 'What is the rem unit based on?'},
      {text: 'You have to set the value for the rem unit by writing a declaration such as rem { font-size: 1 Spx; }', id: 152, type: false, title: 'What is the rem unit based on?'},
      {text: 'The rem unit is relative to the font-size of the containing (parent) element.', id: 153, type: false, title: 'What is the rem unit based on?'},
      {text: 'The rem unit is relative to the font-size of the root element of the page.', id: 154, type: true, title: 'What is the rem unit based on?'}
    ] as Array < MyCardType >,
  ]
}
