const { I, U } = inject();


//  locator

const button = {
  swipe: { android: "Swipe", ios: "Swipe" }
}


module.exports = {

  mainMenu(menuName) {
    console.log(U.getNumber())
    console.log(U.getDate('DD-MM-YYYY', -10))
    console.log(U.getCPF());
    console.log(U.getCNPJ(true));
    I.see(menuName)
  },

  acessoMenu(menu) {
    I.tap(menu)
  },

  doSwipeDown() {
    I.swipeDown(button.swipe)
  },
}
