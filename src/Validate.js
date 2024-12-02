class Validate {
  // 상수 없는 버전
  isEmpty(input) {
    if (!input.trim()) {
      throw new Error('[ERROR] 공백이 입력되었습니다.');
    }
  }

  isNumber(input) {
    const numberInput = Number(input);
    if (Number.isNaN(numberInput)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
  }

  isInteger(input) {
    if (!Number.isInteger(Number(input))) {
      throw new Error('[ERROR] 정수를 입력해주세요.');
    }
  }

  isPositiveNumber(input) {
    if (input <= 0) {
      throw new Error('[ERROR] 음수가 입력되었습니다.');
    }
  }

  isYesOrNo(input) {
    if (input !== 'Y' && input !== 'N') {
      throw new Error('[ERROR] Y 또는 N을 입력해주세요.');
    }
  }

  isVerifiedAmount(input) {
    this.isEmpty(input);
    this.isNumber(input);
    this.isInteger(input);
    this.isPositiveNumber(input);
    if (input % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액은 1000원 단위여야 합니다.');
    };
  }

  isVerifiedWinningNumbers(input) {
    this.isEmpty(input);
    this.inputHasComma(input);
    const numbers = input.split(',');
    numbers.forEach(number => {
      this.isEmpty(number);
      this.isNumber(number);
      this.isInteger(number);
      this.isNumberInRange(number);
    });
    this.hasDuplicate(numbers);
  }

  isNumberInRange(input) {
    if (input < 1 || input > 45) {
      throw new Error('[ERROR] 1~45의 범위가 아닙니다.');
    }
  }

  inputHasComma(input) {
    if (!input.includes(',')) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
  }

  hasDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 당첨번호는 중복될 수 없습니다.');
    }
  }

  isVerifiedBonus(input) {
    this.isEmpty(input);
    this.isNumber(input);
    this.isInteger(input);
    this.isNumberInRange(input);
  }

  isDuplicateWithWinningNumbers(winningNumbers, bonus) {
    if (winningNumbers.includes(Number(bonus))) {
      throw new Error('[ERROR] 당첨번호와 보너스 번호는 중복될 수 없습니다.');
    }
  }
}

export default Validate;
