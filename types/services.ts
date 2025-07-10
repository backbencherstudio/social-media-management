import { ReactNode } from 'react';

export interface ServicePlan {
  // value: string;
  label: string;
  basePrice:number;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  startingPrice: number;
  endingPrice: number;
  selectLabel: string;
  plans: ServicePlan[];
  channels: any[];
}

export interface ServiceSelection {
  service: Service;
  plan: string | null;
  price: number;
}