import LottoManager from './LottoGameManager.js'

class App {
  async run() {
    const lottoManager = new LottoManager();
    await lottoManager.start();
  }
}

export default App;
