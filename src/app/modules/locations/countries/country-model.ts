export interface CountryModel {
    id:string,
    name:string,
    cca3:string,
    independent:boolean,
    currencies: any[]
    capital:[],
    altSpellings:[],
    region:string,
    subregion: string,
    languages:any[],
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
