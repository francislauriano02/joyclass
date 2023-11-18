export interface IComputador {
    getRam (): number;
    getHdd (): number;
    getCpu (): number;
    getType (): string;
    toString (): string;
}