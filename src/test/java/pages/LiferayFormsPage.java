package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import maps.FormsMap;

public class LiferayFormsPage extends BasePage {

	public LiferayFormsPage(WebDriver driver) {
		super(driver);
	}

	public void acessarLiferayForms() {
		acessarPagina("http://forms.liferay.com/web/forms/shared/-/form/372406");
	}

	/**
	 * 
	 * Valida o texto party rock.
	 * 
	 */
	public void validarPartyRockTexto() {
		validarTextoTela(By.xpath(FormsMap.textoPartyRock()));
	}

	/**
	 * 
	 * Preecher campo "Qual é o seu nome"
	 * 
	 * @param nome Texto contendo o nome
	 * 
	 */
	public void preencherCampoNome(String nome) {
		if (!nome.equals(""))
			escreverTextoCampo(By.xpath(FormsMap.campoInput("Qual é seu nome?")), nome);
	}

	/**
	 * 
	 * Preencher o campo "Data de Nascimento"
	 * 
	 * @param data Data de nascimento
	 * 
	 */
	public void preencherCampoData(String data) {
		if (!data.equals(""))
			escreverTextoCampo(By.xpath(FormsMap.campoInput("Qual é a data do seu nascimento")), data);
	}

	/**
	 * 
	 * Preencher o cmapo "Porque você ingressou na área de testes?"
	 * 
	 * @param texto Texto que deseja se digitar no campo Porque você ingressou na
	 *              área de testes?
	 * 
	 */
	public void preencherCampoTexto(String texto) {
		if (!texto.equals(""))
			escreverTextoCampo(By.xpath(FormsMap.campoTextArea("Porque você ingressou na área de testes?")), texto);
	}

	/**
	 * 
	 * Clicar no botão submit
	 * 
	 */
	public void clicarSubmit() {
		clicarBotao(By.xpath(FormsMap.botaoPorTexto("Submit")));
	}

	/**
	 * 
	 * Valida a mensagem de sucesso após o cadastro do formulário
	 * 
	 */
	public void validarMensagemFormularioEnviadoSucesso() {
		validarTextoTela(By.xpath(FormsMap.mensagemCadastroSucesso()));
	}

	/**
	 * 
	 * Validar campo obrigatorio. Checar se a mensagem de erro para campo
	 * obrigatório é exibida logo abaixo do campo não preenchido
	 * 
	 * @param labelCampo nome da label do campo que se deseja validar
	 * 
	 */
	public void validarCampoObrigatorioNoFormulario(String labelCampo) {
		WebElement element = driver.findElement(By.xpath(FormsMap.mensagemCampoObrigatorio(labelCampo)));
		try {
			element.isDisplayed();
			System.out.println(
					"Mensagem de campo obrigatório para a label " + labelCampo + " foi encontrada com sucesso");
		} catch (Exception e) {
			System.out.println("O Elemento náo está visivel");
			System.out.println(e.getMessage());
		}
	}

	/**
	 * 
	 * Garantir que o form não foi enviado, pois encontrei um bug que em muitas
	 * vezes o form era enviado, mesmo ao faltar com o preenchimento de algum(s)
	 * campo(s)
	 * 
	 */
	public void validarFormNaoEnviado() {
		validarTextoNaoExibidoNaTela(By.xpath(FormsMap.mensagemCadastroSucesso()));
	}

}
