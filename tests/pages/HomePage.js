const { I } = inject();

const elem = {
  btnOk: { android: "", ios: "" }
}

class HomePage {

    clickOk(){
    I.tap(elem.btnBack.android)
  }
}

module.exports = HomePage