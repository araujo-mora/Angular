export interface CountryModel {
    name:string,
    cca3:string,
    independent:boolean,
    currencies: any[]
    capital:[],
    altSpellings:[],
    region:string,
    subregion: string,
    languages:[],
    latlng:[],
    borders:[],
    area:number,
    maps:{
        googleMaps:string,
        openStreetMaps:string
    },
    population:number,
    timezones:[],
    continents:[],
}
