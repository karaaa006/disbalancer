export const getDisbalancerInfo = async () => {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/disbalancer')
    const data = await res.json()

    return data
  } catch (e) {
    console.log(e)
  }
}
