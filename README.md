```
pnpm i
pnpm run dev
```

The critical part that causes the bug is the server component page that redirects.

If the user tries to go to a protected route "/protected-route", and that route redirects to another route after running some checks for example, then it will not correctly navigate to the intended final destination.
