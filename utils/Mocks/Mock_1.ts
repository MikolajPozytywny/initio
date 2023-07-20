export const user = {
  id: "123",
  name: "John Doe",
  avatarUrl: "https://source.unsplash.com/random/256x256?portrait&sig=1",
  
};
export const user2 = {
    id: "456",
    name: "śmieć",
    avatarUrl: "https://images.unsplash.com/photo-1564109799258-6b7c25cd1c92?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=256&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXR8fHx8fHwxNjg5NzA3NzMx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=256",
  };
  export const user3 = {
    id: "223",
    name: "mrunio",
    avatarUrl: "https://static.posters.cz/image/750/plakaty/kotek-sleeping-i22663.jpg",
  };

  export const messages = [
   { userId: "456", timestamp: new Date("2023-07-15 20:35"), message: "Hi there!" },
  { userId: "123", timestamp: new Date("2023-07-15 20:33"), message: "Hello" },
  { userId: "223", timestamp: new Date("2023-07-15 20:35"), message: "ELO ELO" },


];
export const conversation1 = {

  userIds: ["123", "456"],
  title: "Conversation 1",
  avatarUrl: "https://source.unsplash.com/random/256x256?portrait&sig=2",
  messages: [   
    { userId: "456", timestamp: new Date("2023-07-15 20:35"), message: "Hi there!" },
  { userId: "123", timestamp: new Date("2023-07-15 20:33"), message: "Hello" },
  { userId: "456", timestamp: new Date("2023-07-15 20:35"), message: "ELO ELO" },
],
}

export const conversation2 = {  
  userIds: ["123", "223"],
  title: "Conversation 2",
  avatarUrl: "https://static.posters.cz/image/750/plakaty/kotek-sleeping-i22663.jpg",
  messages: [
    { userId: "223", timestamp: new Date("2023-07-15 20:35"), message: "hejka" },
  { userId: "123", timestamp: new Date("2023-07-15 20:33"), message: "Hello" },
  { userId: "223", timestamp: new Date("2023-07-15 20:35"), message: "ELO ELO" },

],
}

export const conversations = {
  "abc": conversation1,
  "abc2": conversation2,
  
};

