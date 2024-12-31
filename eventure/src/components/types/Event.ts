export interface Event {
    id: string;
    title: string;
    description: string;
    category: {
      name: string;
      slug: string;
    };
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    price: number | 'FREE';
    imageUrl: string;
    interestedCount: number;
    isFavorite: boolean;
  }
  
  export type FilterType = 'all' | 'today' | 'tomorrow' | 'weekend' | 'free';
  
  