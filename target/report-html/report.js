$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("liferayform.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language : pt"
    }
  ],
  "line": 2,
  "name": "Liferay Forms",
  "description": "Como um usuário do sistema\nEu quero preencher o formulário da Liferay forms\nPara que possa cadastrar minhas informações no formulário",
  "id": "liferay-forms",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 10528771499,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que eu acesso o link do liferay forms",
  "keyword": "Dado "
});
formatter.match({
  "location": "LiferaySteps.queEuAcessoOLinkDoLiferayForms()"
});
formatter.result({
  "duration": 24412118601,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Validar texto party rock",
  "description": "",
  "id": "liferay-forms;validar-texto-party-rock",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 11,
  "name": "eu vejo o texto party rock na tela",
  "keyword": "Então "
});
formatter.match({
  "location": "LiferaySteps.euVejoOTextoPartyRockNaTela()"
});
formatter.result({
  "duration": 74535501,
  "status": "passed"
});
formatter.after({
  "duration": 878516700,
  "status": "passed"
});
});