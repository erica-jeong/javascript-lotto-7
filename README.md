### 기능 구현 목록

#### 예외 처리
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

#### 1. 구입 금액을 입력 받는 기능

- 구입 금액은 1,000원 단위로 입력

##### 예외 상황

- 1000원 단위로 나누어 떨어지지 않는 경우
- 공백 입력
- 숫자가 아닌 입력
- 음수 입력
- 정수가 아닌 입력

#### 2. 구입 금액만큼 로또를 발행

- 번호는 오름차순으로 정렬

#### 3. 발행한 로또 수량 및 번호를 출력

#### 4. 당첨 번호를 입력 받는 기능

- 쉼표를 기준으로 입력 받는다
- 각 숫자는 중복되지 않게
- 범위는 1~45

##### 예외 상황

- 공백 입력
- 숫자가 아닌 입력
- 정수가 아닌 입력
- 음수 입력
- 각 숫자 중복
- 범위를 벗어난 숫자 입력

#### 5. 보너스 번호를 입력 받는 기능

- 당첨 번호화 중복되지 않는 숫자 1개
- 범위는 1~45

##### 예외상황

- 공백 입력
- 숫자가 아닌 입력
- 정수가 아닌 입력
- 음수 입력
- 당첨 번호와 중복되는 입력
- 범위를 벗어난 입력

#### 6. 당첨을 계산하는 기능

- 1등: 6개 번호 일치
- 2등: 5개 번호 + 보너스 번호 일치
- 3등: 5개 번호 일치
- 4등: 4개 번호 일치
- 5등: 3개 번호 일치

#### 6. 당첨 내역을 출력 하는 기능

#### 7. 수익률을 계산하는 기능

#### 8. 수익률을 출력하는 기능
