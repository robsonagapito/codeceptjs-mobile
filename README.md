# codeceptjs-mobile
Testing with Codeceptjs for Mobile Application

## aplicativos de suporte
  - `NodeJs` (last version) [download](https://nodejs.org/pt-br/download/)
  - `Visual Studio Code` (Last version) [download](https://code.visualstudio.com/download)
  - `Android Studio` (last version) [download](https://developer.android.com/studio)

## dependências ##
    ```bash
    ./setup.sh
    ```
## Executando testes
### Pré requisitos
- Appium estar executando
- Ter um emulador de pé ou um celular para desenvolvimento conectado via USB
### Comandos
    - Simples execução:
        ```
        npx codeceptjs run
        ```
    - Execução com tags para o cucumber:
        ```
        npx codeceptjs run --features --steps --grep '@testAll'
        ```
    - Execução com variáveis de ambiente:
        ```
        ENV _ENV='hml2' _PLATFORM=Android _APP='./resources/apk/agapito-app.apk' _DEVICE='emulator' npx codeceptjs run --features --steps --reporter mocha-multi
        ```
    - Execução com allure
        ```
        npx codeceptjs run --plugins allure
        ```
### Alure Serve
    - Para executar o servidor do aluer e visualizar o relatório
        ```
        allure serve output
        ```