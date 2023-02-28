# subjectify

Make all method calls return their call subject.


## Usage

Original code:

```js
const element = document.createElement('div')

element.setAttribute('class', 'foo')
element.setAttribute('id', 'bar')
element.append('hello world')
```

Simplified code using `subjectify()`:


```js
import subjectify from 'subjectify'


const element = subjectify(document.createElement('div'))
        .setAttribute('class', 'foo')
        .setAttribute('id', 'bar')
        .append('hello world')
```


## Installation

Install with NPM:

```sh
npm i subjectify
```
