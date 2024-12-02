import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }

  printBoughtLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
    Console.print('');
  }
}

export default OutputView;
