import InputView from './InputView.js'
import OutputView from './OutputView.js'
import Validate from './Validate.js'

class LottoManager {
  #inputView
  #outputView
  #validate

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#validate = new Validate();
  }

  async start() {
    try {
      const amount = await this.#getAmount();
      console.log(amount);
    } catch (error) {
      throw error;
    }
  }

  async #getAmount() {
    while (true) {
      try {
        const amount = await this.#inputView.readAmount();
        this.#validate.isVerifiedAmount(amount);
        return Number(amount);
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }
}

export default LottoManager;
