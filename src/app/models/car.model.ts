export enum FuelType {
    PETROL = 'PETROL',
    DIESEL = 'DIESEL',
    ELECTRIC = 'ELECTRIC',
    CNG = 'CNG'
  }
  
  export enum Transmission {
    MANUAL = 'MANUAL',
    AUTOMATIC = 'AUTOMATIC'
  }
  
  export interface Car {
    id?: number;
    name: string;
    modelNumber: string;
    yearOfManufacture: string; // ISO date string like "2024-05-01"
    fuelType: FuelType;
    kmRun: number;
    transmission: Transmission;
    owner: number; // e.g. 1st owner = 1
    price: number;
    description: string;
    imageUrl: string;
  }
  