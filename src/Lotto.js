class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplicate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  #validateDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 당첨번호는 중복될 수 없습니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  // 당첨 번호만 로또와 비교해서 몇개 일치하는지 확인
  getWinningResult(winningNumber, bonusNumber) {
    const matchedNumber = this.#numbers.filter(number => winningNumber.includes(number)).length;
    if (matchedNumber === 6) return 1;
    if (matchedNumber === 5 && this.#numbers.includes(bonusNumber)) return 2;
    if (matchedNumber === 5) return 3;
    if (matchedNumber === 4) return 4;
    if (matchedNumber === 3) return 5;
    return 0;
  }
}

export default Lotto;
