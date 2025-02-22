export interface EorzeaWeatherOptions {
    locale?: string;
}
export default class EorzeaWeather {
    #private;
    static get ZONE_AMH_ARAENG(): string;
    static get ZONE_AZYS_LLA(): string;
    static get ZONE_BOZJAN_SOUTHERN_FRONT(): string;
    static get ZONE_CENTRAL_SHROUD(): string;
    static get ZONE_CENTRAL_THANALAN(): string;
    static get ZONE_COERTHAS_CENTRAL_HIGHLANDS(): string;
    static get ZONE_COERTHAS_WESTERN_HIGHLANDS(): string;
    static get ZONE_EAST_SHROUD(): string;
    static get ZONE_EASTERN_LA_NOSCEA(): string;
    static get ZONE_EASTERN_THANALAN(): string;
    static get ZONE_EULMORE(): string;
    static get ZONE_EUREKA_ANEMOS(): string;
    static get ZONE_EUREKA_HYDATOS(): string;
    static get ZONE_EUREKA_PAGOS(): string;
    static get ZONE_EUREKA_PYROS(): string;
    static get ZONE_GRIDANIA(): string;
    static get ZONE_IDYLLSHIRE(): string;
    static get ZONE_IL_MHEG(): string;
    static get ZONE_ISHGARD(): string;
    static get ZONE_KHOLUSIA(): string;
    static get ZONE_KUGANE(): string;
    static get ZONE_LAKELAND(): string;
    static get ZONE_LIMSA_LOMINSA(): string;
    static get ZONE_LOWER_LA_NOSCEA(): string;
    static get ZONE_MIDDLE_LA_NOSCEA(): string;
    static get ZONE_MIST(): string;
    static get ZONE_MOR_DHONA(): string;
    static get ZONE_NORTH_SHROUD(): string;
    static get ZONE_NORTHERN_THANALAN(): string;
    static get ZONE_OUTER_LA_NOSCEA(): string;
    static get ZONE_RHALGRS_REACH(): string;
    static get ZONE_SHIROGANE(): string;
    static get ZONE_SOUTH_SHROUD(): string;
    static get ZONE_SOUTHERN_THANALAN(): string;
    static get ZONE_THE_AZIM_STEPPE(): string;
    static get ZONE_THE_CHURNING_MISTS(): string;
    static get ZONE_THE_CRYSTARIUM(): string;
    static get ZONE_THE_DIADEM(): string;
    static get ZONE_THE_DRAVANIAN_FORELANDS(): string;
    static get ZONE_THE_DRAVANIAN_HINTERLANDS(): string;
    static get ZONE_THE_FRINGES(): string;
    static get ZONE_THE_GOBLET(): string;
    static get ZONE_THE_LAVENDER_BEDS(): string;
    static get ZONE_THE_LOCHS(): string;
    static get ZONE_THE_PEAKS(): string;
    static get ZONE_THE_RAKTIKA_GREATWOOD(): string;
    static get ZONE_THE_RUBY_SEA(): string;
    static get ZONE_THE_SEA_OF_CLOUDS(): string;
    static get ZONE_THE_TEMPEST(): string;
    static get ZONE_ULDAH(): string;
    static get ZONE_UPPER_LA_NOSCEA(): string;
    static get ZONE_WESTERN_LA_NOSCEA(): string;
    static get ZONE_WESTERN_THANALAN(): string;
    static get ZONE_WOLVES_DEN_PIER(): string;
    static get ZONE_YANXIA(): string;
    static get ZONE_ZADNOR(): string;
    static get ZONE_RADZ_AT_HAN(): string;
    static get ZONE_THAVNAIR(): string;
    static get ZONE_GARLEMALD(): string;
    static get ZONE_OLD_SHARLAYAN(): string;
    static get ZONE_LABYRINTHOS(): string;
    static get ZONE_MARE_LAMENTORUM(): string;
    static get ZONE_ULTIMA_THULE(): string;
    static get ZONE_ELPIS(): string;
    static get ZONE_UNNAMED_ISLAND(): string;
    static getWeather(id: string, date: Date, options?: EorzeaWeatherOptions): string;
    constructor(id: string, { locale }?: EorzeaWeatherOptions);
    getWeather(date: Date): string;
    getZoneName(): string;
    translate(key: string): string;
    validate(): boolean;
}
