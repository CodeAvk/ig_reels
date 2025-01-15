export const reelsData = [
    {
      id: 1,
      videoUrl: '/assets/videos/sample-reel.mp4',
      likes: 12,
      shares: 46,
      username: '@fashionista',
      userAvatar: '/assets/avatars/fashionista.jpg',
      description: 'Check out these amazing summer styles! Perfect for beach days 🌞👙 Shop the look below ⬇️',
      hashtags: ['fashion', 'summer', 'ootd', 'style', 'beachvibes', 'summerfashion'],
      comments: [
        {
          id: 1,
          username: '@user1',
          text: 'Love this look! 😍',
          timestamp: '2h ago',
          likes: 24
        },
        {
          id: 2,
          username: '@user2',
          text: 'Where can I get that top?',
          timestamp: '1h ago',
          likes: 15
        },
        {
          id: 3,
          username: '@fashionlover',
          text: 'This is absolutely gorgeous! Need this in my wardrobe 💕',
          timestamp: '45m ago',
          likes: 8
        }
      ],
      products: [
        {
          id: 1,
          name: 'Classic White T-Shirt',
          price: 29.99,
          brand: 'StyleBasics',
          position: { x: 30, y: 40 },
          inStock: true
        },
        {
          id: 2,
          name: 'Denim Jeans',
          price: 79.99,
          brand: 'DenimCo',
          position: { x: 60, y: 70 },
          inStock: true
        }
      ],
      isVerified: true,
      musicInfo: {
        title: 'Summer Vibes',
        artist: 'DJ Cool',
        album: 'Beach Beats 2024'
      },
      location: 'Miami Beach, Florida'
    },
    {
      id: 2,
      videoUrl: '/assets/videos/sample-reel.mp4',
      likes: 48,
      shares: 20,
      username: '@foodie_adventures',
      userAvatar: '/assets/avatars/foodie.jpg',
      description: 'The BEST pasta youll ever make! 🍝 Full recipe in my bio! #foodtiktok',
      hashtags: ['food', 'cooking', 'recipe', 'foodie', 'homemade', 'pasta', 'italianfood'],
      comments: [
        {
          id: 1,
          username: '@kitchenlover',
          text: 'Made this yesterday - absolutely delicious! 😋',
          timestamp: '5h ago',
          likes: 234
        },
        {
          id: 2,
          username: '@cookingmama',
          text: 'What type of pasta did you use?',
          timestamp: '4h ago',
          likes: 56
        }
      ],
      products: [
        {
          id: 3,
          name: 'Professional Pasta Maker',
          price: 89.99,
          brand: 'KitchenPro',
          position: { x: 45, y: 55 },
          inStock: true
        }
      ],
      isVerified: true,
      musicInfo: {
        title: 'That is Amore',
        artist: 'Dean Martin',
        album: 'Italian Classics'
      },
      location: 'Little Italy, NYC'
    },
    {
      id: 3,
      videoUrl: '/assets/videos/sample-reel.mp4',
      likes: 85,
      shares: 56,
      username: '@fitness_guru',
      userAvatar: '/assets/avatars/fitness.jpg',
      description: '15-minute full body workout! No equipment needed 💪 Save for later! Follow for more fitness tips!',
      hashtags: ['fitness', 'workout', 'health', 'motivation', 'fitnessmotivation', 'homeworkout'],
      comments: [
        {
          id: 1,
          username: '@gym_lover',
          text: 'This burned so good! 🔥',
          timestamp: '1d ago',
          likes: 445
        },
        {
          id: 2,
          username: '@beginner_fit',
          text: 'Can beginners do this?',
          timestamp: '23h ago',
          likes: 89
        },
        {
          id: 3,
          username: '@fitness_guru',
          text: '@beginner_fit Yes! Just go at your own pace 😊',
          timestamp: '22h ago',
          likes: 156
        }
      ],
      products: [
        {
          id: 4,
          name: 'Resistance Bands Set',
          price: 24.99,
          brand: 'FitGear',
          position: { x: 35, y: 65 },
          inStock: true
        },
        {
          id: 5,
          name: 'Workout Mat',
          price: 39.99,
          brand: 'YogaEssentials',
          position: { x: 70, y: 80 },
          inStock: false
        }
      ],
      isVerified: true,
      musicInfo: {
        title: 'Workout Mix 2024',
        artist: 'Fitness Beats',
        album: 'Gym Hits'
      },
      location: 'Los Angeles, CA'
    },
    {
      id: 4,
      videoUrl: '/assets/videos/sample-reel.mp4',
      likes: 59,
      shares: 34,
      username: '@travel_with_me',
      userAvatar: '/assets/avatars/traveler.jpg',
      description: 'Hidden gem in Bali 🌴 You wont believe this waterfall! Save this spot for your next trip ✈️',
      hashtags: ['travel', 'bali', 'wanderlust', 'paradise', 'waterfall', 'indonesia', 'traveltips'],
      comments: [
        {
          id: 1,
          username: '@wanderer',
          text: 'Adding this to my bucket list! 😍',
          timestamp: '12h ago',
          likes: 234
        },
        {
          id: 2,
          username: '@adventure_seeker',
          text: 'How do you get there?',
          timestamp: '10h ago',
          likes: 45
        }
      ],
      products: [
        {
          id: 6,
          name: 'Adventure Camera',
          price: 399.99,
          brand: 'TechPro',
          position: { x: 40, y: 60 },
          inStock: true
        }
      ],
      isVerified: false,
      musicInfo: {
        title: 'Island Breeze',
        artist: 'Tropical Beats',
        album: 'Paradise Sounds'
      },
      location: 'Ubud, Bali'
    },
    {
      id: 5,
      videoUrl: '/assets/videos/sample-reel.mp4',
      likes: 67,
      shares: 78,
      username: '@tech_reviewer',
      userAvatar: '/assets/avatars/tech.jpg',
      description: 'These new headphones are a GAME CHANGER 🎧 Full review up on my channel! Link in bio',
      hashtags: ['tech', 'gadgets', 'review', 'technology', 'headphones', 'audio'],
      comments: [
        {
          id: 1,
          username: '@audiophile',
          text: 'Hows the bass response?',
          timestamp: '3h ago',
          likes: 67
        },
        {
          id: 2,
          username: '@music_lover',
          text: 'Been waiting for this review! 🙌',
          timestamp: '2h ago',
          likes: 45
        }
      ],
      products: [
        {
          id: 7,
          name: 'Pro Wireless Headphones',
          price: 299.99,
          brand: 'AudioTech',
          position: { x: 50, y: 50 },
          inStock: true
        }
      ],
      isVerified: true,
      musicInfo: {
        title: 'Test Track',
        artist: 'Audio Sample',
        album: 'Review Tracks'
      },
      location: 'Tech Studio'
    }
  ];
  
  // Additional data types for filters and categories
  export const reelCategories = [
    'For You',
    'Following',
    'Fashion',
    'Food',
    'Fitness',
    'Travel',
    'Tech',
    'Beauty',
    'DIY',
    'Music'
  ];
  
  export const popularHashtags = [
    { tag: 'trending', count: '2.5M' },
    { tag: 'viral', count: '1.8M' },
    { tag: 'foryou', count: '5.2M' },
    { tag: 'fashion', count: '892K' },
    { tag: 'food', count: '756K' },
    { tag: 'fitness', count: '645K' }
  ];
  
  export const musicTrending = [
    {
      id: 1,
      title: 'Summer Vibes',
      artist: 'DJ Cool',
      usageCount: '125K',
      duration: '60s'
    },
    {
      id: 2,
      title: 'Workout Mix 2024',
      artist: 'Fitness Beats',
      usageCount: '89K',
      duration: '45s'
    },
    {
      id: 3,
      title: 'Viral Hits',
      artist: 'Various Artists',
      usageCount: '256K',
      duration: '30s'
    }
  ];