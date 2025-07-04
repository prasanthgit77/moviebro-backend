const teluguMovies = [
  {
    title: "RRR",
    genre: ["Action", "Drama"],
    year: 2022,
    rating: 8.7,
    description: "A fictional story of two legendary revolutionaries and their journey far away from home before they started fighting for their country.",
    posterUrl: "/posters/RRR.jpg",
    platforms: ["Netflix", "ZEE5"]
  },
  {
    title: "Pushpa: The Rise",
    genre: ["Action", "Drama"],
    year: 2021,
    rating: 7.6,
    description: "A lorry driver rises in the smuggling syndicate of red sandalwood trees.",
    posterUrl: "/posters/Pushpa.webp",
    platforms: ["Amazon Prime"]
  },
  {
    title: "Dasara",
    genre: ["Action", "Thriller"],
    year: 2023,
    rating: 7.8,
    description: "In the coal mines of Telangana, a drunkard rises against injustice.",
    posterUrl: "/posters/Dasara.jpg",
    platforms: ["Netflix"]
  },
  {
    title: "Salaar",
    genre: ["Action", "Thriller"],
    year: 2023,
    rating: 8.1,
    description: "A violent man promises his dying friend that he will take down their enemies.",
    posterUrl: "/posters/salaar.jpg",
    platforms: ["Netflix"]
  },
  {
    title: "Sarkaru Vaari Paata",
    genre: ["Action", "Drama"],
    year: 2022,
    rating: 6.8,
    description: "A man with a finance background fights against corrupt bankers.",
    posterUrl: "/posters/svp.jpg",
    platforms: ["Amazon Prime"]
  },
  {
    title: "Rangasthalam",
    genre: ["Drama", "Action"],
    year: 2018,
    rating: 8.4,
    description: "A partially deaf villager stands up against a corrupt politician.",
    posterUrl: "/posters/ranga.webp",
    platforms: ["Amazon Prime"]
  },
  {
    title: "Ala Vaikunthapurramuloo",
    genre: ["Comedy", "Drama"],
    year: 2020,
    rating: 7.4,
    description: "A man discovers that he's not the biological son of the man who raised him.",
    posterUrl: "/posters/alavp.jpg",
    platforms: ["Netflix"]
  },
  {
    title: "Arjun Reddy",
    genre: ["Romance", "Drama"],
    year: 2017,
    rating: 8.0,
    description: "An impulsive and self-destructive man spirals into depression after his lover marries someone else.",
    posterUrl: "/posters/Arjunreddy.jpg",
    platforms: ["Amazon Prime"]
  },
  {
    title: "Bheemla Nayak",
    genre: ["Action", "Thriller"],
    year: 2022,
    rating: 7.2,
    description: "A clash between an ex-army man and a strict police officer turns personal.",
    posterUrl: "/posters/bheemla.jpg",
    platforms: ["Disney+"]
  },
  {
    title: "Jathi Ratnalu",
    genre: ["Comedy"],
    year: 2021,
    rating: 7.2,
    description: "Three naive young men from Jogipet find themselves in a political mess in Hyderabad.",
    posterUrl: "/posters/jathiratnalu.jpg",
    platforms: ["Amazon Prime"]
  },
  {
    title: "Veera Simha Reddy",
    genre: ["Action", "Drama"],
    year: 2023,
    rating: 6.5,
    description: "A faction leader's legacy leads to bloodshed and revenge.",
    posterUrl: "/posters/veerasimha.webp",
    platforms: ["Disney+"]
  },
  {
    title: "Waltair Veerayya",
    genre: ["Action", "Comedy"],
    year: 2023,
    rating: 6.7,
    description: "An undercover fisherman takes on a dangerous mission.",
    posterUrl: "/posters/waltair.webp",
    platforms: ["Netflix"]
  },
  {
    title: "Virupaksha",
    genre: ["Mystery", "Thriller"],
    year: 2023,
    rating: 7.6,
    description: "A village is haunted by a mysterious curse — and a man's past may hold the answer.",
    posterUrl: "/posters/virupaksha.webp",
    platforms: ["Netflix"]
  },
  {
    title: "Bro",
    genre: ["Fantasy", "Drama"],
    year: 2023,
    rating: 6.0,
    description: "A man meets the God of Time after a fatal accident and gets a second chance to fix his life.",
    posterUrl: "/posters/bro.jpg",
    platforms: ["Netflix"]
  },
  {
    title: "Balagam",
    genre: ["Drama"],
    year: 2023,
    rating: 8.3,
    description: "A rural family must deal with emotional conflict and traditions after the death of their patriarch.",
    posterUrl: "/posters/balagam.jpg",
    platforms: ["Amazon Prime"]
  },
  {
    title: "Baby",
    genre: ["Romance", "Drama"],
    year: 2023,
    rating: 7.8,
    description: "A coming-of-age love story of two high school sweethearts facing harsh realities of life.",
    posterUrl: "/posters/baby.jpg",
    platforms: ["Aha", "Amazon Prime"]
  },
  {
    title: "Goodachari",
    genre: ["Action", "Thriller"],
    year: 2018,
    rating: 7.9,
    description: "A young man's life changes after he joins the Indian intelligence agency.",
    posterUrl: "/posters/Goodachari.jpg",
    platforms: ["Amazon Prime"]
  },
  {
    title: "Agent Sai Srinivasa Athreya",
    genre: ["Comedy", "Mystery"],
    year: 2019,
    rating: 8.3,
    description: "A detective from Nellore stumbles into a high-profile crime.",
    posterUrl: "/posters/agentathre.webp",
    platforms: ["Amazon Prime"]
  },
  {
    title: "DJ Tillu",
    genre: ["Comedy", "Thriller"],
    year: 2022,
    rating: 7.2,
    description: "A laid-back DJ gets into trouble after falling for the wrong girl.",
    posterUrl: "/posters/djtillu.jpg",
    platforms: ["Aha", "Amazon Prime"]
  },
  {
    title: "Love Story",
    genre: ["Romance", "Drama"],
    year: 2021,
    rating: 6.9,
    description: "Two struggling individuals navigate caste and class barriers in their pursuit of love.",
    posterUrl: "/posters/lovestory.jpg",
    platforms: ["Aha"]
  },
  {
    title: "Uppena",
    genre: ["Romance", "Drama"],
    year: 2021,
    rating: 6.7,
    description: "A coastal village boy falls in love with a rich girl — but her father has other plans.",
    posterUrl: "/posters/uppena.jpg",
    platforms: ["Netflix"]
  },
  {
    title: "Middle Class Melodies",
    genre: ["Comedy", "Drama"],
    year: 2020,
    rating: 7.4,
    description: "A young man opens a tiffin center in Guntur and navigates life's spices.",
    posterUrl: "/posters/mcm.jpg",
    platforms: ["Amazon Prime"]
  },
  {
    title: "Pelli Choopulu",
    genre: ["Romance", "Comedy"],
    year: 2016,
    rating: 8.2,
    description: "An arranged marriage meeting leads to the launch of a food truck.",
    posterUrl: "/posters/pellichoopulu.jpg",
    platforms: ["Amazon Prime"]
  },
  {
    title: "Evaru",
    genre: ["Thriller", "Mystery"],
    year: 2019,
    rating: 8.1,
    description: "A corrupt cop gets involved in a murder investigation that turns complex.",
    posterUrl: "/posters/evaru.jpg",
    platforms: ["Amazon Prime"]
  },
  {
    title: "Sita Ramam",
    genre: ["Romance", "Drama"],
    year: 2022,
    rating: 8.5,
    description: "An orphan soldier's love letters reach his beloved long after he's gone.",
    posterUrl: "/posters/Sitaramam.webp",
    platforms: ["Disney+", "Amazon Prime"]
  }
];

export default teluguMovies;
