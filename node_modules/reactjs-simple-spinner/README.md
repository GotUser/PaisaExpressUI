# reactjs-simple-spinner
> A simple, flexible spinner for React.js

> Based on [vue-simple-spinner](https://github.com/dzwillia/vue-simple-spinner)

reactjs-simple-spinner is designed to be a lightweight [React.js](https://reactjs.org) spinner requiring minimal configuration.

## JsFiddle Demo

[https://jsfiddle.net/riazxrazor/nh9nuqhL/](https://jsfiddle.net/riazxrazor/nh9nuqhL/)

## Requirements
* [React.js](https://reactjs.org/) (^15.5.4)

## Installation

### NPM

```bash
npm install reactjs-simple-spinner --save
```

## Usage
> All styling for this component is done and requires no external CSS files.

### ES6

```js
import React, { Component } from 'react';
import './App.css';
import Spinner from 'reactjs-simple-spinner'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Spinner />
                <hr />
                <Spinner message="Loading..." />
                <hr />
                <Spinner size="tiny" message="Loading..." />
                <hr />
                <Spinner size="small" message="Loading..." />
                <hr />
                <Spinner size="medium" message="Loading..." />
                <hr />
                <Spinner size="large" message="Loading..." />
                <hr />
                <Spinner size="big" message="Loading..." />
                <hr />
                <Spinner size="huge" message="Loading..." />
                <hr />
                <Spinner size="massive" message="Loading..." />
                <hr />
                <Spinner size={55} />
                <hr />
                <Spinner size={88} />
                <hr />
                <Spinner lineSize={7} />
                <hr />
                <Spinner lineSize={12} />
                <hr />
                <Spinner size={55} lineSize={7} />
                <hr />
                <Spinner size={88} lineSize={12} />
                <hr />
                <Spinner lineFgColor="#009900" />
                <hr />
                <Spinner line-bg-color="#555555" />
                <hr />
                <Spinner lineFgColor="#009900" lineBgColor="#555555" />
                <hr />
                <Spinner speed="0.4" />
                <hr />
                <Spinner speed={2} />
                <hr />
                <Spinner speed={6} />
                <hr />
                <Spinner spacing={55} message="I'm 55px below the Spinner" />
                <hr />
                <Spinner fontSize={20} message="I'm a 20px font size" />
                <hr />
            </div>
        );
    }
}

export default App;
```

## License
reactjs-simple-spinner is open source and released under the [MIT License](LICENSE).

Copyright (c) 2017 [Riaz Laskar](https://riazxrazor.in).

> A small step in react.js :D


