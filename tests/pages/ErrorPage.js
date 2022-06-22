const { I } = inject();

const elem = {
  lblMessage: { android: "", ios: "" },
  btnBack: { android: "", ios: "" }
}

class ErrorPage {
  getMessage(){

  }

  clickBack(){
    I.tap(elem.btnBack.android)
  }
}

module.exports = ErrorPage
