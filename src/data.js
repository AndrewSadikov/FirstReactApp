/*
This is sample data that is used to dynamically populate the Card components
In a more advanced project, this data would be generated from an api
Changing this data or adding / removing objects is reflected by the main page
*/

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1795506/pexels-photo-1795506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "A Small Cozy Cottage",
    country: "USA",
    rating: 4.7,
    reviewCount: 4,
    cost: 1500,
  },
  {
    id: 2,
    img: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    title: "City Unit With Amazing View",
    country: "FRANCE",
    rating: 4.4,
    reviewCount: 10,
    cost: 2400,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/2388639/pexels-photo-2388639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Colorful Mexican Street",
    country: "MEXICO",
    rating: 4.9,
    reviewCount: 6,
    cost: 1200,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "The City Of Madrid",
    country: "SPAIN",
    rating: 4.8,
    reviewCount: 9,
    cost: 1800,
  },
];

export default data;
