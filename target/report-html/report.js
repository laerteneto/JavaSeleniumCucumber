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
  "duration": 10243071300,
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
  "duration": 30402247400,
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
  "duration": 68563000,
  "status": "passed"
});
formatter.after({
  "duration": 852702600,
  "status": "passed"
});
formatter.before({
  "duration": 9156393500,
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
  "duration": 22069473800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validar campos preenchidos corretamente",
  "description": "",
  "id": "liferay-forms;validar-campos-preenchidos-corretamente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 14,
  "name": "eu preencho o campo Qual é o seu nome com o valor \"Laerte Mello\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "eu preencho o campo Data de Nascimento com o valor \"01/01/1992\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "eu preencho o campo Porque você ingressou na área de testes com o valor \"Blablabla\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "eu clico no botão submit",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "eu vejo na tela a mensagem de sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Laerte Mello",
      "offset": 51
    }
  ],
  "location": "LiferaySteps.euPreenchoOCampoQualÉOSeuNomeComOValor(String)"
});
formatter.result({
  "duration": 193939900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/1992",
      "offset": 52
    }
  ],
  "location": "LiferaySteps.euPreenchoOCampoDataDeNascimentoComOValor(String)"
});
formatter.result({
  "duration": 137328200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blablabla",
      "offset": 73
    }
  ],
  "location": "LiferaySteps.euPreenchoOCampoPorqueVocêIngressouNaÁreaDeTestesComOValor(String)"
});
formatter.result({
  "duration": 166927300,
  "status": "passed"
});
formatter.match({
  "location": "LiferaySteps.euClicoNoBotãoSubmit()"
});
formatter.result({
  "duration": 3124001000,
  "status": "passed"
});
formatter.match({
  "location": "LiferaySteps.euVejoNaTelaAMensagemDeSucesso()"
});
formatter.result({
  "duration": 1043935900,
  "status": "passed"
});
formatter.after({
  "duration": 719495900,
  "status": "passed"
});
formatter.before({
  "duration": 9221029900,
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
  "duration": 18739709200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validar obrigatoriedade dos campos Data de Nascimento e Porque você...",
  "description": "",
  "id": "liferay-forms;validar-obrigatoriedade-dos-campos-data-de-nascimento-e-porque-você...",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 21,
  "name": "eu preencho o campo Qual é o seu nome com o valor \"Laerte Mello\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "eu clico no botão submit",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "eu NÃO vejo na tela a mensagem de sucesso",
  "keyword": "Então "
});
formatter.step({
  "line": 24,
  "name": "eu vejo na tela um erro referente a obrigatoriedade do campo \"Qual é a data do seu nascimento?\"",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "eu vejo na tela um erro referente a obrigatoriedade do campo \"Porque você ingressou na área de testes\"",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "Laerte Mello",
      "offset": 51
    }
  ],
  "location": "LiferaySteps.euPreenchoOCampoQualÉOSeuNomeComOValor(String)"
});
formatter.result({
  "duration": 180235000,
  "status": "passed"
});
formatter.match({
  "location": "LiferaySteps.euClicoNoBotãoSubmit()"
});
formatter.result({
  "duration": 3126728700,
  "status": "passed"
});
formatter.match({
  "location": "LiferaySteps.euNaoVejoNaTelaAMensagemDeSucesso()"
});
formatter.result({
  "duration": 30013943900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qual é a data do seu nascimento?",
      "offset": 62
    }
  ],
  "location": "LiferaySteps.euVejoNaTelaUmErroReferenteAObrigatoriedadeDoCampo(String)"
});
formatter.result({
  "duration": 30989600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Porque você ingressou na área de testes",
      "offset": 62
    }
  ],
  "location": "LiferaySteps.euVejoNaTelaUmErroReferenteAObrigatoriedadeDoCampo(String)"
});
formatter.result({
  "duration": 30093100,
  "status": "passed"
});
formatter.after({
  "duration": 709432700,
  "status": "passed"
});
formatter.before({
  "duration": 9159012900,
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
  "duration": 20256221900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validar obrigatoriedade dos campo Nome e Porque você...",
  "description": "",
  "id": "liferay-forms;validar-obrigatoriedade-dos-campo-nome-e-porque-você...",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 28,
  "name": "eu preencho o campo Data de Nascimento com o valor \"01/01/1992\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 29,
  "name": "eu clico no botão submit",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "eu NÃO vejo na tela a mensagem de sucesso",
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "eu vejo na tela um erro referente a obrigatoriedade do campo \"Qual é seu nome\"",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "eu vejo na tela um erro referente a obrigatoriedade do campo \"Porque você ingressou na área de testes\"",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "01/01/1992",
      "offset": 52
    }
  ],
  "location": "LiferaySteps.euPreenchoOCampoDataDeNascimentoComOValor(String)"
});
formatter.result({
  "duration": 148758900,
  "status": "passed"
});
formatter.match({
  "location": "LiferaySteps.euClicoNoBotãoSubmit()"
});
formatter.result({
  "duration": 3138323000,
  "status": "passed"
});
formatter.match({
  "location": "LiferaySteps.euNaoVejoNaTelaAMensagemDeSucesso()"
});
formatter.result({
  "duration": 982379000,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat steps.LiferaySteps.euNaoVejoNaTelaAMensagemDeSucesso(LiferaySteps.java:82)\r\n\tat ✽.Então eu NÃO vejo na tela a mensagem de sucesso(liferayform.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qual é seu nome",
      "offset": 62
    }
  ],
  "location": "LiferaySteps.euVejoNaTelaUmErroReferenteAObrigatoriedadeDoCampo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Porque você ingressou na área de testes",
      "offset": 62
    }
  ],
  "location": "LiferaySteps.euVejoNaTelaUmErroReferenteAObrigatoriedadeDoCampo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 710419100,
  "status": "passed"
});
formatter.before({
  "duration": 9157666500,
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
  "duration": 25681082100,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Validar obrigatoriedade dos campos Nome e Data de Nascimento",
  "description": "",
  "id": "liferay-forms;validar-obrigatoriedade-dos-campos-nome-e-data-de-nascimento",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 36,
  "name": "eu preencho o campo Porque você ingressou na área de testes com o valor \"Blablabla\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 37,
  "name": "eu clico no botão submit",
  "keyword": "E "
});
formatter.step({
  "line": 38,
  "name": "eu NÃO vejo na tela a mensagem de sucesso",
  "keyword": "Então "
});
formatter.step({
  "line": 39,
  "name": "eu vejo na tela um erro referente a obrigatoriedade do campo \"Qual é seu nome\"",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "eu vejo na tela um erro referente a obrigatoriedade do campo \"Qual é a data do seu nascimento?\"",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "Blablabla",
      "offset": 73
    }
  ],
  "location": "LiferaySteps.euPreenchoOCampoPorqueVocêIngressouNaÁreaDeTestesComOValor(String)"
});
formatter.result({
  "duration": 147086000,
  "status": "passed"
});
formatter.match({
  "location": "LiferaySteps.euClicoNoBotãoSubmit()"
});
formatter.result({
  "duration": 3130652100,
  "status": "passed"
});
formatter.match({
  "location": "LiferaySteps.euNaoVejoNaTelaAMensagemDeSucesso()"
});
formatter.result({
  "duration": 30015233700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qual é seu nome",
      "offset": 62
    }
  ],
  "location": "LiferaySteps.euVejoNaTelaUmErroReferenteAObrigatoriedadeDoCampo(String)"
});
formatter.result({
  "duration": 29728400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qual é a data do seu nascimento?",
      "offset": 62
    }
  ],
  "location": "LiferaySteps.euVejoNaTelaUmErroReferenteAObrigatoriedadeDoCampo(String)"
});
formatter.result({
  "duration": 28139500,
  "status": "passed"
});
formatter.after({
  "duration": 722479400,
  "status": "passed"
});
});