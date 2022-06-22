# language: en
# charset: UTF-8
# Supported severity values: blocker, critical, normal, minor, trivial. ex.: @severity=critical
# Every Feature or Scenario can be annotated by following tags: @flaky, @muted, @known

@testAll
Feature: Automation App
	Como um usuário, eu gostaria de logar no sistema e passar os dados solicitados.

	Scenario: Check fail login
		Given the user opens app
		When the user fills your login as "robson"
		And the user fills your password as "correa"
		And the user clicks on auth button
		Then the user should see the message "Usuário ou Senha inválido!"


	# Scenario Outline: Check fail login - <Test Case>
	# 	Given the user opens app
	# 	When the user fills your login as "<username>"
	# 	And the user fills your password as "<password>"
	# 	And the user clicks on auth button
	# 	Then the user should see the message "Usuário ou Senha inválido!"

    #     Examples:
    #     | Test Case                           | username | password |
    #     | Username Ok and password Not Ok     | robson   | correa   |
    #     | Username Not Ok and password Not Ok | robson   | correa   |
    #     | Username Not Ok and password Ok     | robson   | correa   |
