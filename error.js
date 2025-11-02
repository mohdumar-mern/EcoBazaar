12:34:36.537 Running build in Washington, D.C., USA (East) – iad1
12:34:36.537 Build machine configuration: 2 cores, 8 GB
12:34:36.666 Cloning github.com/mohdumar-mern/EcoBazaar (Branch: master, Commit: bc6fb70)
12:34:36.667 Previous build caches not available.
12:34:37.025 Cloning completed: 359.000ms
12:34:37.405 Running "vercel build"
12:34:37.800 Vercel CLI 48.8.0
12:34:38.390 Installing dependencies...
12:34:50.852 
12:34:50.852 added 385 packages in 12s
12:34:50.853 
12:34:50.853 149 packages are looking for funding
12:34:50.853   run `npm fund` for details
12:34:50.911 Running "npm run build"
12:34:51.080 
12:34:51.081 > client@0.1.0 build
12:34:51.081 > next build
12:34:51.081 
12:34:53.211  ⚠ `images.domains` is deprecated in favor of `images.remotePatterns`. Please update next.config.mjs to protect your application from malicious users.
12:34:53.237 Attention: Next.js now collects completely anonymous telemetry regarding usage.
12:34:53.238 This information is used to shape Next.js' roadmap and prioritize features.
12:34:53.238 You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
12:34:53.238 https://nextjs.org/telemetry
12:34:53.238 
12:34:53.250    ▲ Next.js 16.0.0 (Turbopack)
12:34:53.251 
12:34:53.314    Creating an optimized production build ...
12:35:03.153 
12:35:03.154 > Build error occurred
12:35:03.154 Error: Turbopack build failed with 2 errors:
12:35:03.154 ./components/ui/pagination.jsx:9:1
12:35:03.154 Module not found: Can't resolve '@/components/ui/utton'
12:35:03.154 [0m [90m  7 |[39m
12:35:03.154  [90m  8 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
12:35:03.154 [31m[1m>[22m[39m[90m  9 |[39m [36mimport[39m { buttonVariants } [36mfrom[39m [32m"@/components/ui/utton"[39m[33m;[39m
12:35:03.154  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
12:35:03.154  [90m 10 |[39m
12:35:03.154  [90m 11 |[39m [36mfunction[39m [33mPagination[39m({
12:35:03.154  [90m 12 |[39m   className[33m,[39m[0m
12:35:03.154 
12:35:03.154 Import map: aliased to relative './components/ui/utton' inside of [project]/
12:35:03.155 
12:35:03.155 
12:35:03.155 Import traces:
12:35:03.155   Client Component Browser:
12:35:03.155     ./components/ui/pagination.jsx [Client Component Browser]
12:35:03.155     ./components/Pagination.jsx [Client Component Browser]
12:35:03.155     ./app/products/page.jsx [Client Component Browser]
12:35:03.155     ./app/products/page.jsx [Server Component]
12:35:03.155 
12:35:03.155   Client Component SSR:
12:35:03.155     ./components/ui/pagination.jsx [Client Component SSR]
12:35:03.155     ./components/Pagination.jsx [Client Component SSR]
12:35:03.155     ./app/products/page.jsx [Client Component SSR]
12:35:03.155     ./app/products/page.jsx [Server Component]
12:35:03.155 
12:35:03.155 https://nextjs.org/docs/messages/module-not-found
12:35:03.155 
12:35:03.155 
12:35:03.155 ./components/ui/pagination.jsx:5:1
12:35:03.155 Module not found: Can't resolve '@/components/ui/utton'
12:35:03.155 [0m [90m 3 |[39m [36mimport[39m { [33mChevronLeftIcon[39m[33m,[39m [33mChevronRightIcon[39m[33m,[39m [33mMoreHorizontalIcon[39m } [36mfrom[39m [32m"lucide-react"[39m[33m;[39m
12:35:03.155  [90m 4 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m[33m;[39m
12:35:03.156 [31m[1m>[22m[39m[90m 5 |[39m [36mimport[39m { buttonVariants } [36mfrom[39m [32m"@/components/ui/utton"[39m[33m;[39m
12:35:03.156  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
12:35:03.159  [90m 6 |[39m [36mfunction[39m [33mPagination[39m(t0) {
12:35:03.159  [90m 7 |[39m   [36mconst[39m $ [33m=[39m _c([35m8[39m)[33m;[39m
12:35:03.159  [90m 8 |[39m   [36mlet[39m className[33m;[39m[0m
12:35:03.159 
12:35:03.159 Import map: aliased to relative './components/ui/utton' inside of [project]/
12:35:03.159 
12:35:03.163 
12:35:03.163 Import traces:
12:35:03.163   Client Component Browser:
12:35:03.163     ./components/ui/pagination.jsx [Client Component Browser]
12:35:03.163     ./components/Pagination.jsx [Client Component Browser]
12:35:03.163     ./app/products/page.jsx [Client Component Browser]
12:35:03.163     ./app/products/page.jsx [Server Component]
12:35:03.163 
12:35:03.163   Client Component SSR:
12:35:03.164     ./components/ui/pagination.jsx [Client Component SSR]
12:35:03.164     ./components/Pagination.jsx [Client Component SSR]
12:35:03.164     ./app/products/page.jsx [Client Component SSR]
12:35:03.164     ./app/products/page.jsx [Server Component]
12:35:03.164 
12:35:03.164 https://nextjs.org/docs/messages/module-not-found
12:35:03.164 
12:35:03.164 
12:35:03.164     at <unknown> (./components/ui/pagination.jsx:9:1)
12:35:03.164     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
12:35:03.164     at <unknown> (./components/ui/pagination.jsx:5:1)
12:35:03.164     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
12:35:03.222 Error: Command "npm run build" exited with 1