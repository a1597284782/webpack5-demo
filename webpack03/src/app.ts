// import $ from 'jquery';
// import style from '@/app.css';
import lodash from 'lodash';

class A {
  str: string;
  constructor() {
    this.str = 'hello webpack';
  }

  sayHello() {
    this.str = '';
    // console.log(this.str);
  }
}

const a = new A();
a.sayHello();

const div = document.createElement('div');
div.textContent = '123';
// div.className = style.box;
document.body.appendChild(div);
