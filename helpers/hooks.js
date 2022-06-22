const Helper = require('@codeceptjs/helper')
const { container, ecorder, event, output } = require('codeceptjs')
const execSync = require('child_process').execSync
const utf8 = { encoding: 'utf-8' }

class hooks extends Helper {

  _init() {
      console.log('APP file: ' + process.env.APP),
      console.log('Platform: ' + process.env.PLATFORM),
      console.log('Device: ' + process.env.DEVICE)
  } 
  
  _before() {
    console.log('-------------------------------Start---------------------------------')
  } // before a test

  _after() {
    console.log('--------------------------------End----------------------------------')
  } // after a test
  
  _beforeStep() { } // before each step
  _afterStep() { } // after each step
  _beforeSuite() { } // before each suite
  _afterSuite() { } // after each suite
  _passed() { } // after a test passed
  _failed() { } // after a test failed
  _finishTest() { // after all tests
  }
}
module.exports = hooks
