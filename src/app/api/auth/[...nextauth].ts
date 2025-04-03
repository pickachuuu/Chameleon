// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         // Mock authorization logic (replace with your actual authentication logic)
//         if (credentials?.username === "admin" && credentials?.password === "password") {
//           return { id: 1, name: "Admin" }; // Mock user
//         }
//         return null; // Return null if the credentials are invalid
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin", // Customize the sign-in page path
//   },
// });

// export { handler as GET, handler as POST };
