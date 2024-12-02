import { Random } from "@woowacourse/mission-utils";
import InputView from './InputView.js'
import OutputView from './OutputView.js'
import Validate from './Validate.js'
import Lotto from './Lotto.js'

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
      // 1. 구입 금액 입력
      const amount = await this.#getAmount();

      // 2. 구입 금액 만큼 로또를 발행
      const lottoCount = amount / 1000;
      const lottos = this.#generateLotto(lottoCount);

      // 3. 발행된 로또 출력
      this.#outputView.printBoughtLottos(lottos);

      // 4. 당첨 번호를 입력 받는 기능
      const winningLotto = await this.#getWinningNumbers();

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

  #generateLotto(lottoCount) {
    const lottos = [];
    for (let i = 0; i < lottoCount; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(new Lotto(numbers));
    }
    return lottos;
  }

  async #getWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await this.#inputView.readWinningNumbers();
        this.#validate.isVerifiedWinningNumbers(winningNumbers);
        return new Lotto(winningNumbers.split(',').map(number => Number(number)));
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }

}

export default LottoManager;
