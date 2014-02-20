*This repository is a mirror of the [component](http://component.io) module [brighthas/line-number](http://github.com/brighthas/line-number). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/brighthas-line-number`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# line-number

  html's code tag convert to have line number table tag.

## Installation

  Install with [component(1)](http://component.io):

    $ component install brighthas/line-number

## API

    var line = require("line-number");
    var codeTag = document.querySelector("code");
    var tableTag = line(codeTag);
    
## License

  MIT
