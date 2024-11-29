import { BITCOIN_PER_SATS } from '../constants/sats'

export const formatSats = (sats: number) => {
  return sats * BITCOIN_PER_SATS
}

export const parseSats = (btc: number) => {
  return btc / BITCOIN_PER_SATS
}
