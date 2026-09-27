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
    picture: "/users/user1.png",
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
    picture: "/users/user2.png",
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
    picture: "/users/user3.png",
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
    picture: "/users/user4.png",
    hobbies: ["Gardening", "Cooking"],
    details: "Retired teacher enjoying nature.",
    showDetails: false
  },
  {
    id: 5,
    gender: "female",
    name: { title: "Miss", first: "Sofia", last: "Miller" },
    location: { street: { number: 31, name: "Cedar Lane" }, city: "Dublin", state: "Leinster", country: "Ireland", postcode: 40005, timezone: { offset: "+0:00", description: "GMT" } },
    email: "sofia.miller@example.com",
    dob: { date: "2011-04-19T00:00:00.000Z", age: 15 },
    phone: "01-234-5678", cell: "085-123-4567",
    picture: "/users/user5.png",
    hobbies: ["Drawing", "Swimming"],
    details: "A curious student who enjoys art and sports.",
    showDetails: false
  },
  {
    id: 6,
    gender: "male",
    name: { title: "Mr", first: "Liam", last: "Brown" },
    location: { street: { number: 74, name: "Maple Road" }, city: "Melbourne", state: "Victoria", country: "Australia", postcode: 30006, timezone: { offset: "+10:00", description: "AEST" } },
    email: "liam.brown@example.com",
    dob: { date: "2008-09-03T00:00:00.000Z", age: 18 },
    phone: "03-9123-4567", cell: "0412-345-678",
    picture: "/users/user6.png",
    hobbies: ["Basketball", "Music"],
    details: "A college student and weekend basketball player.",
    showDetails: false
  },
  {
    id: 7,
    gender: "female",
    name: { title: "Ms", first: "Maya", last: "Patel" },
    location: { street: { number: 19, name: "Lakeview Drive" }, city: "Vancouver", state: "BC", country: "Canada", postcode: 50007, timezone: { offset: "-8:00", description: "PST" } },
    email: "maya.patel@example.com",
    dob: { date: "2002-06-14T00:00:00.000Z", age: 24 },
    phone: "604-555-0107", cell: "604-555-0177",
    picture: "/users/user7.png",
    hobbies: ["Hiking", "Cooking"],
    details: "A young designer who loves the outdoors.",
    showDetails: false
  },
  {
    id: 8,
    gender: "male",
    name: { title: "Mr", first: "Mateo", last: "Garcia" },
    location: { street: { number: 56, name: "Calle Mayor" }, city: "Madrid", state: "Community of Madrid", country: "Spain", postcode: 28008, timezone: { offset: "+1:00", description: "CET" } },
    email: "mateo.garcia@example.com",
    dob: { date: "1995-12-22T00:00:00.000Z", age: 30 },
    phone: "91-555-0108", cell: "600-555-0188",
    picture: "/users/user8.png",
    hobbies: ["Cycling", "Reading"],
    details: "A project manager who spends free time cycling.",
    showDetails: false
  },
  {
    id: 9,
    gender: "female",
    name: { title: "Mrs", first: "Nina", last: "Kowalski" },
    location: { street: { number: 103, name: "Wislana" }, city: "Krakow", state: "Lesser Poland", country: "Poland", postcode: 30009, timezone: { offset: "+1:00", description: "CET" } },
    email: "nina.kowalski@example.com",
    dob: { date: "1983-08-10T00:00:00.000Z", age: 43 },
    phone: "12-555-0109", cell: "500-555-0199",
    picture: "/users/user9.png",
    hobbies: ["Gardening", "Travel"],
    details: "An architect with a passion for travel and gardening.",
    showDetails: false
  },
  {
    id: 10,
    gender: "male",
    name: { title: "Mr", first: "George", last: "Wilson" },
    location: { street: { number: 27, name: "Willow Street" }, city: "Boston", state: "MA", country: "USA", postcode: 10010, timezone: { offset: "-5:00", description: "EST" } },
    email: "george.wilson@example.com",
    dob: { date: "1957-01-28T00:00:00.000Z", age: 69 },
    phone: "617-555-0110", cell: "617-555-0200",
    picture: "/users/user10.png",
    hobbies: ["Chess", "History"],
    details: "A retired librarian who enjoys history and chess.",
    showDetails: false
  },
];