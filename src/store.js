import {writable} from 'svelte/store';

export const FeedbackStore = writable(
  [
  {
    id: 1,
    rating: 4,
    text: 'Gaba' 
  },
  {
    id: 2,
    rating: 5,
    text: 'Gool'
  },
  {
    id: 3,
    rating: 10,
    text: 'Scooby Doo'
  }
  ]
)