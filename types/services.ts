import { ReactNode } from 'react';

export interface ServicePlan {
  // value: string;
  label: string;
  basePrice:number;
}

export interface ServiceTier {
  id: string;
  max_post: number;
  price: number;
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