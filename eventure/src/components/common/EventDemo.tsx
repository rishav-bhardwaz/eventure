import React, { useEffect } from 'react';
import EventsSection from './Eventsection';
import { Event } from '../types/Event';

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Lakeside Camping at Pawna',
    description: 'Adventure Geek - Explore the Unexplored',
    category: {
      name: 'Travel & Adventure',
      slug: 'travel-adventure'
    },
    date: '2023-11-25',
    startTime: '8:30 AM',
    endTime: '7:30 PM',
    location: 'Pawna Lake, Mumbai',
    price: 1400,
    imageUrl: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&q=80&w=800',
    interestedCount: 14,
    isFavorite: false
  },
  {
    id: '2',
    title: 'Sound Of Christmas 2023',
    description: 'Bal Gandharva Rang Mandir, Mumbai',
    category: {
      name: 'Cultural & Arts',
      slug: 'cultural-arts'
    },
    date: '2023-12-02',
    startTime: '6:30 PM',
    endTime: '9:30 PM',
    location: 'Bal Gandharva Rang Mandir, Mumbai',
    price: 499,
    imageUrl: 'https://images.unsplash.com/photo-1512729743411-5efe0e30f1e6?auto=format&fit=crop&q=80&w=800',
    interestedCount: 16,
    isFavorite: false
  },
  {
    id: '3',
    title: 'Meet the Royal College of Art in Mumbai 2023',
    description: 'Sofitel Mumbai BKC, Mumbai',
    category: {
      name: 'Educational & Business',
      slug: 'educational-business'
    },
    date: '2023-12-02',
    startTime: '10 AM',
    endTime: '5 PM',
    location: 'Sofitel Mumbai BKC, Mumbai',
    price: 'FREE',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    interestedCount: 48,
    isFavorite: false
  },
  {
    id: '4',
    title: 'Global Engineering Education Expo 2023',
    description: 'The St. Regis, Mumbai',
    category: {
      name: 'Educational & Business',
      slug: 'educational-business'
    },
    date: '2023-12-03',
    startTime: '10 AM',
    endTime: '2 PM',
    location: 'The St. Regis, Mumbai',
    price: 'FREE',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    interestedCount: 48,
    isFavorite: false
  },
  {
    id: '5',
    title: 'Cricket & Business Meetup',
    description: 'Play The Turf, Malad, Mumbai',
    category: {
      name: 'Sports & Fitness',
      slug: 'sports-fitness'
    },
    date: '2023-12-08',
    startTime: '6:30 PM',
    endTime: '9:30 PM',
    location: 'Play The Turf, Malad, Mumbai',
    price: 399,
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800',
    interestedCount: 24,
    isFavorite: false
  },
  {
    id: '6',
    title: "Valentine's Day Sail on a Yacht in Mumbai",
    description: 'Mumbai',
    category: {
      name: 'Travel & Adventure',
      slug: 'travel-adventure'
    },
    date: '2024-02-14',
    startTime: '7 AM',
    endTime: '8 PM',
    location: 'Mumbai',
    price: 2999,
    imageUrl: 'https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=800',
    interestedCount: 160,
    isFavorite: false
  }
];

const EventsSectionDemo: React.FC = () => {
  useEffect(() => {
    const originalFetch = window.fetch;
    window.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
      if (input === '/api/events') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockEvents),
        } as Response);
      }
      return originalFetch(input, init);
    };

    return () => {
      window.fetch = originalFetch;
    };
  }, []);

  return <EventsSection />;
};

export default EventsSectionDemo;

