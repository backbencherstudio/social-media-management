import { ReactNode } from 'react';

export interface ServicePlan {
  value: string;
  label: string;
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
}

export interface ServiceSelection {
  service: Service;
  plan: string | null;
  price: number;
}