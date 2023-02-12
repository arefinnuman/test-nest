export interface Workers {
  id: string;
  name: string;
  email: string;
  service: workerServiceType;
}

export enum workerServiceType {
  ELECTRICIAN = 'Electrician',
  PLUMBER = 'Plumber',
  CARPENTER = 'Carpenter',
}
