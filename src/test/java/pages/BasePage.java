package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BasePage {

	protected WebDriver driver;

	public BasePage(WebDriver driver) {
		this.driver = driver;
	}

	/**
	 * Acessa uma url
	 * 
	 * @param link url que deseja acessar
	 */
	public void acessarPagina(String link) {
		driver.get(link);
	}

	/**
	 * Clicar em um botão utilizando javascript
	 * 
	 * @param locator Locator que deseja localizar o elemento
	 */
	public void clicarBotao(By locator) {
		try {
			WebElement element = driver.findElement(locator);

			System.out.println("Aguardando até o botão ser clicável");
			WebDriverWait wait = new WebDriverWait(driver, 30);
			wait.until(ExpectedConditions.elementToBeClickable(element));

			// Obs: Espera explicita necessária, mais detalhes no relatório
			System.out.println("Clicando no botão");
			Thread.sleep(3000);

			element.click();
			System.out.println("Botão clicado");
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	/**
	 * Escreve texto em um campo
	 * 
	 * @param locator Locator do campo em que vai se escrever o texto
	 * @param texto   Texto a ser escrito na tela
	 */
	public void escreverTextoCampo(By locator, String texto) {
		driver.findElement(locator).sendKeys(texto);
	}

	/**
	 * Valida se um texto está na tela
	 * 
	 * @param locator Locator do elemento que se deseja verificar
	 */
	public void validarTextoTela(By locator) {
		try {
			if ((driver.findElements(locator).size() > 0) && (driver.findElement(locator).isDisplayed()))
				System.out.println("Elemento encontrado");
		} catch (NoSuchElementException e) {
			System.out.println("Elemento não encontrado");
			System.out.println(e.getMessage());
		}
	}

	/**
	 * Valida se um texto NÃO está na tela
	 * 
	 * @param locator Locator do elemento que se deseja verificar
	 */
	public void validarTextoNaoExibidoNaTela(By locator) {
		try {
			Assert.assertTrue(driver.findElements(locator).size() == 0);
		} catch (Exception e) {
			System.out.println(e.getMessage());

		}
	}

}
