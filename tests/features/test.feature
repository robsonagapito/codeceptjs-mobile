# language: pt
# charset: UTF-8
# Supported severity values: blocker, critical, normal, minor, trivial. ex.: @severity=critical
# Every Feature or Scenario can be annotated by following tags: @flaky, @muted, @known

@testAll
Funcionalidade: Automation App
	Como um usuário, eu gostaria de logar no sistema e passar os dados solicitados.

	Cenario: Validar o login com falhas
		Dado que o usuário abriu a aplicação
		Quando o usuário informar o seu login como "<username>"
		E o usuário informar a sua senha como "<password>"
		E o usuário clicar em autenticar
		Então o usuário deveria ver a mensagem "Usuário ou Senha inválida!"

	# @test1
	# Cenario: Fazer SwipeDown
	# 	Dado app esta aberto
	# 	Quando faco swipe down
	# 	Entao vejo se baixou a tela

	# @test2
	# Cenario: Preencher formulario
	# 	Dado app esta aberto
	# 	Quando Acesso "Formulário"
	# 	Quando Preencho o nome
	# 	Quando Preencho calendario
	# 	Quando Preencho resto
	# 	Entao valido se salvou