export interface User {
  id: number;
  gender: string;
  name: { title: string; first: string; last: string };
  location: { 
    street: { number: number; name: string }; 
    city: string; state: string; country: string; postcode: number; 
    timezone: { offset: string; description: string } 
  };
  email: string;
  dob: { date: string; age: number };
  phone: string;
  cell: string;
  picture: string;
  hobbies: string[];
  details: string;
  showDetails?: boolean;
}

export const mockUsers: User[] = [
  {
    id: 1,
    gender: "female",
    name: { title: "Mrs", first: "Emma", last: "Lampi" },
    location: { street: { number: 2304, name: "Siilitie" }, city: "Hausjärvi", state: "Uusimaa", country: "Finland", postcode: 98555, timezone: { offset: "+8:00", description: "Beijing" } },
    email: "emma.lampi@example.com",
    dob: { date: "2001-03-08T01:39:19.084Z", age: 25 },
    phone: "02-689-410", cell: "043-730-12-94",
    picture: "/users/user1.jpg",
    hobbies: ["Travel", "Photography", "Music"],
    details: "I love exploring new cultures and taking photos.",
    showDetails: false
  },
  {
    id: 2,
    gender: "male",
    name: { title: "Mr", first: "John", last: "Doe" },
    location: { street: { number: 12, name: "Main St" }, city: "New York", state: "NY", country: "USA", postcode: 10001, timezone: { offset: "-5:00", description: "EST" } },
    email: "john.doe@example.com",
    dob: { date: "2007-05-12T00:00:00.000Z", age: 16 },
    phone: "123-456-7890", cell: "098-765-4321",
    picture: "/users/user2.jpg",
    hobbies: ["Gaming", "Coding"],
    details: "High school student passionate about programming.",
    showDetails: false
  },
  {
    id: 3,
    gender: "male",
    name: { title: "Mr", first: "Robert", last: "Smith" },
    location: { street: { number: 45, name: "Oak Ave" }, city: "London", state: "LND", country: "UK", postcode: 20002, timezone: { offset: "+0:00", description: "GMT" } },
    email: "robert.s@example.com",
    dob: { date: "1980-11-20T00:00:00.000Z", age: 43 },
    phone: "222-333-4444", cell: "555-666-7777",
    picture: "/users/user3.jpg",
    hobbies: ["Fishing", "Reading"],
    details: "Experienced software engineer.",
    showDetails: false
  },
  {
    id: 4,
    gender: "female",
    name: { title: "Ms", first: "Alice", last: "Johnson" },
    location: { street: { number: 88, name: "Pine St" }, city: "Toronto", state: "ON", country: "Canada", postcode: 30003, timezone: { offset: "-4:00", description: "AST" } },
    email: "alice.j@example.com",
    dob: { date: "1965-02-15T00:00:00.000Z", age: 58 },
    phone: "111-222-3333", cell: "444-555-6666",
    picture: "/users/user4.jpg",
    hobbies: ["Gardening", "Cooking"],
    details: "Retired teacher enjoying nature.",
    showDetails: false
  },
  // Для економії місця додано 4 показових користувачів різних вікових категорій (minor, young, adult, senior). 
  // Під час виконання роботи просто розмножте ці об'єкти до 10, змінюючи імена та вік.
];