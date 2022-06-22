const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
require('dotenv').config({ path: '.env' })
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  name: 'codeceptjs-mobile',
  translation: 'pt-BR',
  output: './output',
  timeout: 10000, // limit all tests in all suites to 60 secs
  helpers: {
    Appium: {
      app: process.env.app,
      platform: process.env.platform,
      device: process.env.device
    },
    Hooks: {
      require: './helpers/hooks.js'
    },
  },

  bootstrap: null,
  mocha: {
    mochawesome: {
      stdout: './output/console.log',
      options: {
        reportDir: './output',
        reportFilename: 'report'
      }
    },
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          verbose: true,
          steps: true,
        }
      },
      'mocha-junit-reporter': {
        stdout: './output/console.log',
        options: {
          mochaFile: './output/result.xml',
          attachments: true //add screenshot for a failed test
        }
      }
    }
  },

  gherkin: {
    features: './tests/features/*.feature',
    steps: './tests/steps/*_steps.js'
  },

  include: {
    I: './steps_file.js'
  },

  plugins: {
    allure: {
      enabled: true,
      outputDir: "./output"
    },
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {
      enabled: false
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true,
      output: "./output",
      deleteSuccessful: true
    },
    stepTimeout: {
      enabled: true,
      timeout: 30, // limit all steps except waiters to 30 secs
    }
  }

}