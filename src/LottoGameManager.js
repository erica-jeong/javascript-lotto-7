import { Random } from "@woowacourse/mission-utils";
import InputView from './InputView.js'
import OutputView from './OutputView.js'
import Validate from './Validate.js'
import Lotto from './Lotto.js'
import LottoGame from './LottoGame.js'

class LottoGameManager {
  #inputView;
  #outputView;
  #validate;
  #lottoGame;
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#validate = new Validate();
    this.#lottoGame = new LottoGame();
  }

  async start() {
    try {
      // 1. 구입 금액 입력
      const amount = await this.#getAmount();

      // 2. 구입 금액 만큼 로또를 발행
      const lottoCount = amount / 1000;
      const lottos = this.#lottoGame.generateLotto(lottoCount);

      // 3. 발행된 로또 출력
      this.#outputView.printBoughtLottos(lottos);

      // 4. 당첨 번호를 입력 받는 기능
      const winningLotto = await this.#getWinningNumbers();

      // 5. 보너스 번호를 입력받는 기능
      const bonusNumber = await this.#getBonusNumber(winningLotto);

      // 6. 당첨을 계산하는 기능
      const winningResult = this.#lottoGame.calculateWinningResult(lottos, winningLotto, bonusNumber);
      console.log(winningResult);
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

  async #getBonusNumber(winningLotto) {
    while (true) {
      try {
        const bonusNumber = await this.#inputView.readBonusNumber();
        this.#validate.isVerifiedBonus(bonusNumber);
        this.#validate.isDuplicateWithWinningNumbers(winningLotto.getNumbers(), bonusNumber);
        return Number(bonusNumber);
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }

}

export default LottoGameManager;
