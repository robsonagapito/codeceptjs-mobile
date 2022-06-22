const { I, D, faker } = inject();

/**
 * Locators
 */
const locs = {
  fields: {
    nome: { android: '~nome', ios: '~zzzz' },
  },
  checkBox: {
    check: { android: '//android.widget.CheckBox[@content-desc="check"]', ios: 'check' },
  },
  comboBox: {
    cosole: { android: '~console', ios: '~console' },
    ps4: { android: 'PS4', ios: 'PS4' },
  },
  button: {
    switch: { android: '~switch', ios: '~switch' },
    calendario: { android: '01/01/2000', ios: '01/01/2000' },
    calendarioDia: { android: '20', ios: '20' },
    calendarioOk: { android: 'OK', ios: 'OK' },
    salvar: { android: 'SALVAR', ios: 'SALVAR' }
  },
  slids: {
    slid: { android: '~slid', ios: '~slid' },
    slidBall: { android: '//android.view.ViewGroup[@content-desc="slid"]/android.view.ViewGroup[2]', ios: '~slid2' }
  },
  message: {
    console: { android: 'Console: ps4', ios: '~ps4' }
  },
}

/**
 * Page
 */
module.exports = {
  preencheFormulario(nome) {
    console.log('Start Aqui')
    console.log('Nome com uso do faker: ' + faker.name.firstName())
    console.log(`Nome do cucumber ${nome}`)
    console.log('Nome do json ' + D.user.name)
    I.fillField(locs.fields.nome, D.user.name);
    I.swipeRight(locs.slids.slidBall);
    // { x: 0, y: 544, width: 1080, height: 110 }
    // { x: 476, y: 572, width: 55, height: 55 }
    // I.performSwipe({ x: 108, y: 544 }, { x: 1080, y: 544 });
  },

  preencheCalendario() {
    I.retry(2).tap(locs.button.calendario)
    I.tap(locs.button.calendarioDia)
    I.tap(locs.button.calendarioOk)
  },

  preencheTudo() {
    I.dontSeeCheckboxIsChecked(locs.checkBox.check);
    I.tap(locs.checkBox.check)
    I.tap(locs.button.switch)
    I.tap(locs.comboBox.cosole)
    I.tap(locs.comboBox.ps4)
    I.tap(locs.button.salvar)
  },

  validarSalvo() {
    I.runOnAndroid(() => {
      I.see(locs.message.console.android)
    })

    I.runOnIOS(() => {
      I.see(locs.message.console.ios)
    })
  }

}
