const mongoose = require('mongoose');
const Chat = require("./models/chat.js")

main()
  .then(() => {
    console.log('connection successful');
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats = [
    {
        from: 'Neha',
        to: 'Priya',
        msg: 'Send me your information',
        created_at: new Date(),
    },
    {
        from: 'Priya',
        to: 'Neha',
        msg: 'Sure, I will send it shortly.',
        created_at: new Date(),
    },
    {
        from: 'Rahul',
        to: 'Amit',
        msg: 'Did you complete the assignment?',
        created_at: new Date(),
    },
    {
        from: 'Amit',
        to: 'Rahul',
        msg: 'Yes, I completed it yesterday.',
        created_at: new Date(),
    },
    {
        from: 'Sneha',
        to: 'Pooja',
        msg: 'Are you coming to college tomorrow?',
        created_at: new Date(),
    },
    {
        from: 'Pooja',
        to: 'Sneha',
        msg: 'Yes, I will be there at 9 AM.',
        created_at: new Date(),
    },
    {
        from: 'Vishal',
        to: 'Rohit',
        msg: 'Can you send me the notes?',
        created_at: new Date(),
    },
    {
        from: 'Rohit',
        to: 'Vishal',
        msg: 'Yes, I will send them on WhatsApp.',
        created_at: new Date(),
    },
    {
        from: 'Anjali',
        to: 'Kavya',
        msg: 'What is the topic for tomorrow presentation?',
        created_at: new Date(),
    },
    {
        from: 'Kavya',
        to: 'Anjali',
        msg: 'Our topic is MongoDB and Mongoose.',
        created_at: new Date(),
    }
];

Chat.insertMany(chats);