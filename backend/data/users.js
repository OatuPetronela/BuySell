import bcrypt from "bcryptjs";

const Users = [
  {
    name: "Anas Maris",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Andreas Manis",
    email: "andreas@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default Users;
