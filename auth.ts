/* eslint-disable @typescript-eslint/no-implicit-any-catch */
import type { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import payload from 'payload'

const credentialsConfig = CredentialsProvider({
    name: 'Credentials',
    credentials: {
        email: {
            label: 'Email',
        },
        password: {
            label: 'Password',
            type: 'password',
        },
    },
    async authorize(credentials: any) {
        try {
            payload.logger.info(credentials.email);
            if (credentials.email && credentials.password) {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/login`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password,
                    }),
                })

                if (res.ok) {
                    const { user, errors } = await res.json()
                    if (errors) return null
                    console.log(JSON.stringify(user));
                    return user
                }
            }
            return null
        } catch (error) {
            return null
        }
    },
})

const config = {
    providers: [credentialsConfig],
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);