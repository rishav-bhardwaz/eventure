export interface EventFormData {
    title: string;
    category: string;
    eventType: 'single' | 'recurring';
    startDate: string;
    startTime: string;
    endTime?: string;
    location: string;
    description: string;
  
    bannerImage?: string;
    bannerTitle?: string;
    bannerSubtitle?: string;
  

    ticketTypes: TicketType[];
    maxTicketsPerPerson?: number;
    salesStartDate?: string;
    salesEndDate?: string;
  }
  
  export interface TicketType {
    name: string;
    price: number;
    quantity: number;
    description?: string;
  }
  
  export type EventFormStep = 'edit' | 'banner' | 'ticketing' | 'review';