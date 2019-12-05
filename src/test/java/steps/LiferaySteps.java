package steps;

import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.LiferayFormsPage;

public class LiferaySteps {

	WebDriver driver;
	LiferayFormsPage liferayFormsPage;

	@Before
	public void inicializa() {
		// Web driver setup
		System.out.println("Inicializando Driver");
		System.setProperty("webdriver.chrome.driver",
				System.getProperty("user.dir") + "/src/test/resources/Driver/chromedriver.exe");
		driver = new ChromeDriver();

		// Window setup
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		// Liferay page set up
		liferayFormsPage = new LiferayFormsPage(driver);
	}

	@After
	public void finaliza() {
		System.out.println("Finalizando driver\n");
		driver.quit();
	}

	@Dado("^que eu acesso o link do liferay forms$")
	public void queEuAcessoOLinkDoLiferayForms() throws Throwable {
		liferayFormsPage.acessarLiferayForms();
	}

	@Então("^eu vejo o texto party rock na tela$")
	public void euVejoOTextoPartyRockNaTela() throws Throwable {
		assertTrue(liferayFormsPage.validarPartyRockTexto());
	}

	@Quando("^eu preencho o campo Qual é o seu nome com o valor \"([^\"]*)\"$")
	public void euPreenchoOCampoQualÉOSeuNomeComOValor(String nome) throws Throwable {
		liferayFormsPage.preencherCampoNome(nome);

	}

	@Quando("^eu preencho o campo Data de Nascimento com o valor \"([^\"]*)\"$")
	public void euPreenchoOCampoDataDeNascimentoComOValor(String data) throws Throwable {
		liferayFormsPage.preencherCampoData(data);
	}

	@Quando("^eu preencho o campo Porque você ingressou na área de testes com o valor \"([^\"]*)\"$")
	public void euPreenchoOCampoPorqueVocêIngressouNaÁreaDeTestesComOValor(String texto) throws Throwable {
		liferayFormsPage.preencherCampoTexto(texto);
	}

	@Quando("^eu clico no botão submit$")
	public void euClicoNoBotãoSubmit() throws Throwable {
		liferayFormsPage.clicarSubmit();
	}

	@Então("^eu vejo na tela a mensagem de sucesso$")
	public void euVejoNaTelaAMensagemDeSucesso() throws Throwable {
		liferayFormsPage.validarMensagemFormularioEnviadoSucesso();
	}

	@Então("^eu NÃO vejo na tela a mensagem de sucesso$")
	public void euNaoVejoNaTelaAMensagemDeSucesso() throws Throwable {
		assertTrue(liferayFormsPage.validarFormNaoEnviado());
	}

	@Então("^eu vejo na tela um erro referente a obrigatoriedade do campo \"([^\"]*)\"$")
	public void euVejoNaTelaUmErroReferenteAObrigatoriedadeDoCampo(String campo) throws Throwable {
		liferayFormsPage.validarCampoObrigatorioNoFormulario(campo);
	}
}
