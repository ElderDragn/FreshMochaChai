# FreshMochaChai
This repo contains examples and instructions for getting started with the popular testing library Mocha both for node.js and in the browser.\

To get started, clone this repo and run `npm install` in the repo's root directory

[Mocha Documentation](https://mochajs.org/)  
[Chai Documentation](https://www.chaijs.com/)

## Using Mocha

Mocha provides syntax & structure for building your own test suites in [one of several formats](https://mochajs.org/#interfaces), but relies on other libraries for its assertion testing (when working in Node it will use the Assert module by default). I personally prefer to use Chai.js for assertion and [BDD](https://mochajs.org/#bdd) syntax for Mocha, and so that's what these examples are written with, but you may substitute any other assertion library that throws an Error on its fail case.\