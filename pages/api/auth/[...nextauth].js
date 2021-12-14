import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.SECRET,
  callbacks: {
    //   async jwt(token, account) {
    //     if (account?.accessToken) {
    //       // eslint-disable-next-line no-param-reassign
    //       token.accessToken = account.accessToken;
    //     }
    //     return token;
    //   },
    //   redirect: async (url, _baseUrl) => {
    //     if (url === '/profile') {
    //       return Promise.resolve('/');
    //     }
    //     return Promise.resolve('/');
    //   },
    //   async session({ session, token, user }) {
    //     // Send properties to the client, like an access_token from a provider.
    //     // eslint-disable-next-line no-param-reassign
    //     console.log(session, token, user);
    //     session.accessToken = token.accessToken;
    //     return session;
    //   },
    // },
  },
});
