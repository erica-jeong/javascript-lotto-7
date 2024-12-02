import { Random } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js'

class LottoGame {
  generateLotto(lottoCount) {
    const lottos = [];
    for (let i = 0; i < lottoCount; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(new Lotto(numbers));
    }
    return lottos;
  }

  calculateWinningResult(lottos, winningLotto, bonusNumber) {
    const winningNumbers = winningLotto.getNumbers();
    const mapResults = lottos.map(lotto => lotto.getWinningResult(winningNumbers, bonusNumber));
    const totalResults = mapResults.filter(result => result !== 0);
    const winningResult = this.#rankingLotto(totalResults);
    return winningResult;
  }

  #rankingLotto(totalResults) {
    const winningResult = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
    totalResults.forEach(result => {
      if (result === 1) winningResult.first += 1;
      if (result === 2) winningResult.second += 1;
      if (result === 3) winningResult.third += 1;
      if (result === 4) winningResult.fourth += 1;
      if (result === 5) winningResult.fifth += 1;
    });
    return winningResult;
  }

  calculateReturnRate(amount, winningResult) {
    const winningMoney =
      winningResult.first * 2000000000 +
      winningResult.second * 30000000 +
      winningResult.third * 1500000 +
      winningResult.fourth * 50000 +
      winningResult.fifth * 5000;
    return (winningMoney / amount * 100).toFixed(1);
  }
}

export default LottoGame;
