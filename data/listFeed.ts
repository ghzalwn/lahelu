import { IFeed } from '../interface/feed';

export const dataListFeed: IFeed[] = [
  {
    id: '1',
    avatar: 'https://cache.lahelu.com/avatar-U2wMtzBxB-76017',
    imageUrl: 'https://example.com/image1.jpg',
    username: 'user1',
    caption: 'Beautiful sunset!',
    countUp: 31,
    countDown: 0,
    countComment: 4,
    hour: '12 jam',
  },
  {
    id: '2',
    avatar: 'https://cache.lahelu.com/avatar-U2wMtzBxB-76017',
    imageUrl: 'https://example.com/image2.jpg',
    username: 'user2',
    caption: 'Love this place!',
    countUp: 45,
    countDown: 2,
    countComment: 10,
    hour: '8 jam',
  },
  {
    id: '3',
    avatar: 'https://cache.lahelu.com/avatar-U2wMtzBxB-76017',
    imageUrl: 'https://example.com/image3.jpg',
    username: 'user3',
    caption: 'Amazing view of the mountains!',
    countUp: 20,
    countDown: 1,
    countComment: 5,
    hour: '2 jam',
  },
  {
    id: '4',
    avatar: 'https://cache.lahelu.com/avatar-U2wMtzBxB-76017',
    imageUrl: 'https://example.com/image4.jpg',
    username: 'user4',
    caption: 'Delicious food!',
    countUp: 50,
    countDown: 0,
    countComment: 3,
    hour: '1 jam',
  },
  {
    id: '5',
    avatar: 'https://cache.lahelu.com/avatar-U2wMtzBxB-76017',
    imageUrl: 'https://example.com/image5.jpg',
    username: 'user5',
    caption: 'Just chilling at the beach!',
    countUp: 15,
    countDown: 0,
    countComment: 8,
    hour: '30 menit',
  },
  // Add more data as needed
];

export const generateMockData = (page: number, limit: number): IFeed[] => {
  const data: IFeed[] = [];
  for (let i = 1; i <= limit; i++) {
    data.push({
      id: `item-${(page - 1) * limit + i}`,
      username: `User ${(page - 1) * limit + i}`,
      avatar: 'https://cache.lahelu.com/avatar-U2wMtzBxB-76017', // Replace with a valid avatar URL
      hour: `${Math.floor(Math.random() * 24)} hours ago`,
      caption: `This is caption for item ${(page - 1) * limit + i}.`,
      imageUrl:
        'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', // Optional property
      countUp: Math.floor(Math.random() * 100), // Optional property
      countDown: Math.floor(Math.random() * 100), // Optional property
      countComment: Math.floor(Math.random() * 50), // Optional property
    });
  }
  return data;
};
