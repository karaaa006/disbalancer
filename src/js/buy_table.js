import { getDisbalancerInfo } from './fetch_data'

export const renderBuyTableData = async () => {
  const ddosUsdtPriceGateio = document.querySelector('#ddos-usdt-price-gateio')
  const ddosUsdtVolGateio = document.querySelector('#ddos-usdt-vol-gateio')
  const ddosUsdtVolPercentGateio = document.querySelector('#ddos-usdt-vol-percentage-gateio')
  const ddosUsdtPriceUniswap = document.querySelector('#ddos-usdt-price-uniswap')
  const ddosUsdtVolUniswap = document.querySelector('#ddos-usdt-vol-uniswap')
  const ddosUsdtVolPercentUniswap = document.querySelector('#ddos-usdt-vol-percentage-uniswap')
  const ddosEthPrice = document.querySelector('#ddos-eth-price')
  const ddosEthVol = document.querySelector('#ddos-eth-vol')
  const ddosEthVolPercent = document.querySelector('#ddos-eth-vol-percentage')

  const { tickers } = await getDisbalancerInfo()

  const totalVol = tickers.reduce((acc, i) => (acc += i.volume), 0)

  tickers.forEach((i) => {
    switch (i.market.identifier) {
      case 'uniswap_v2':
        ddosUsdtPriceUniswap.textContent = '$' + i.last.toFixed(4)
        ddosUsdtVolUniswap.textContent = '$' + i.volume.toFixed(3)
        ddosUsdtVolPercentUniswap.textContent = ((i.volume * 100) / totalVol).toFixed(1) + '%'
        break
      case 'gate':
        ddosUsdtPriceGateio.textContent = '$' + i.last.toFixed(4)
        ddosUsdtVolGateio.textContent = '$' + i.volume.toFixed(3)
        ddosUsdtVolPercentGateio.textContent = ((i.volume * 100) / totalVol).toFixed(1) + '%'
        break
      case 'pancakeswap_new':
        ddosEthPrice.textContent = '$' + i.last.toFixed(4)
        ddosEthVol.textContent = '$' + i.volume.toFixed(3)
        ddosEthVolPercent.textContent = ((i.volume * 100) / totalVol).toFixed(1) + '%'
        break
    }
  })
}
