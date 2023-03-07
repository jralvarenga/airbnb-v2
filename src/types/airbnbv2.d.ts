declare module 'airbnb-v2' {
  export interface Language {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
  }

  export interface RegionalBlocs {
    acronym: string
    name: string
  }

  export interface Currency {
    code: string
    name: string
    symbol: string
  }

  export interface Regions {
    alpha2Code: string
    alpha3Code: string
    altSpellings: string[]
    area: number
    borders: string[]
    callingCodes: string[]
    capital: string
    cioc: string
    currencies: Currency[]
    demonym: string
    flag: string
    flags: {
      png: string
      svg: string
    }
    independent: true
    latLng: number[]
    name: string
    nativeName: string
    numericCode: string
    population: string
    region: string
    regionalBlocs: RegionalBlocs[]
    subregion: string
    timezone: string[]
    topLevelDomain: string[]
    translations: object
  }
}
