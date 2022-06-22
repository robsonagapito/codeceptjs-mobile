const { I } = inject();

const elem = {
  edtUser: { android: "@+id/edtUsuario", ios: "edtUsuario" },
  edtPass: { android: "~edtSenha"  , ios: "edtSenha" },
  btnAuth: { android: "~btnLogin"  , ios: "btnLogin" }
}
  
class LoginPage {
    fillUser(user){
      console.log(user)
      console.log(elem.edtUser.android)
      I.waitForElement(elem.edtUser.android, 30); 
      I.fillField(elem.edtUser.android, user);
    }
    
    fillPassword(pass){
      I.fillField(elem.edtPass.android, pass)
    }

    clickAuth(){
      I.tap(elem.btnAuth.android)
    }
}

module.exports = LoginPage