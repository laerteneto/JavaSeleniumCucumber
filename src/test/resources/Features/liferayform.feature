# language : pt
Funcionalidade: Liferay Forms
  Como um usuário do sistema
  Eu quero preencher o formulário da Liferay forms
  Para que possa cadastrar minhas informações no formulário

  Contexto: 
    Dado que eu acesso o link do liferay forms

  Cenário: Validar texto party rock
    Então eu vejo o texto party rock na tela

  Cenário: Validar campos preenchidos corretamente
    Quando eu preencho o campo Qual é o seu nome com o valor "Laerte Mello"
    E eu preencho o campo Data de Nascimento com o valor "01/01/1992"
    E eu preencho o campo Porque você ingressou na área de testes com o valor "Blablabla"
    E eu clico no botão submit
    Então eu vejo na tela a mensagem de sucesso

  Cenário: Validar obrigatoriedade dos campos Data de Nascimento e Porque você...
    Quando eu preencho o campo Qual é o seu nome com o valor "Laerte Mello"
    E eu clico no botão submit
    Então eu NÃO vejo na tela a mensagem de sucesso
    E eu vejo na tela um erro referente a obrigatoriedade do campo "Qual é a data do seu nascimento?"
    E eu vejo na tela um erro referente a obrigatoriedade do campo "Porque você ingressou na área de testes"
    
  Cenário: Validar obrigatoriedade dos campo Nome e Porque você...
    Quando eu preencho o campo Data de Nascimento com o valor "01/01/1992"
    E eu clico no botão submit
    Então eu NÃO vejo na tela a mensagem de sucesso
    E eu vejo na tela um erro referente a obrigatoriedade do campo "Qual é seu nome"
    E eu vejo na tela um erro referente a obrigatoriedade do campo "Porque você ingressou na área de testes"
    

  Cenário: Validar obrigatoriedade dos campos Nome e Data de Nascimento
    Quando eu preencho o campo Porque você ingressou na área de testes com o valor "Blablabla"
    E eu clico no botão submit
    Então eu NÃO vejo na tela a mensagem de sucesso
    E eu vejo na tela um erro referente a obrigatoriedade do campo "Qual é seu nome"
    E eu vejo na tela um erro referente a obrigatoriedade do campo "Qual é a data do seu nascimento?"
    
