const user = {
  id: "123",
  name: "John Doe",
  avatarUrl: "https://example.com/cat.jpg",
};
const user2 = {
    id: "456",
    name: "śmieć",
    avatarUrl: "https://example.com/cat.jpg",
  };

const messages = [
  { userId: "456", timestamp: new Date("2023-07-15 20:35"), message: "Hi there!" },
  { userId: "123", timestamp: new Date("2023-07-15 20:33"), message: "Hello" },

  // Add more messages as needed
];



export { user, messages, user2};