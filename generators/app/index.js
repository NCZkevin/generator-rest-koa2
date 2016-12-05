'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.Base.extend({
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    yeoman.generators.Base.apply(this, arguments);
    this.argument('appName', {
      type: String,
      required: false,
      defaults:path.basename(process.cwd())
    });
  },
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the sweet ' + chalk.red('generator-rest-koa2') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'name',
      message: 'koa2 restful?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.sourceRoot(path.join(__dirname, '.'));
    this.directory('templates', './');
  },

  install: function () {
    this.installDependencies();
  }
});
