## Reproduction steps

1. Installation

```
pnpm i
pnpm run dev
```

2. Open incognito browser and go to http://localhost:3000
3. Click on `Go to protected route`
4. Sign in with email address and password e.g. `e2e+clerk_test@test.com`
5. You will be redirected back to homepage with SignIn error message in dev console

# NOTE

I have noticed that this error occurs only if I perform these steps quickly, If I take my time, maybe browse in another tab for a few mins when I'm on the sign in page, then come back and sign in, it works fine. But if I stay on the page and sign in, performing all the steps with no interruptions, then it occurs.

The critical part that causes the bug is the server component page that redirects.

If the user tries to go to a protected route "/protected-route", and that route redirects to another route after running some checks for example, then it will not correctly navigate to the intended final destination.
