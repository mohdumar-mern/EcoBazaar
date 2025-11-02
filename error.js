12:25:58.661 Running build in Washington, D.C., USA (East) – iad1
12:25:58.661 Build machine configuration: 2 cores, 8 GB
12:25:58.766 Cloning github.com/mohdumar-mern/EcoBazaar (Branch: master, Commit: 7968134)
12:25:58.766 Previous build caches not available.
12:25:59.131 Cloning completed: 365.000ms
12:25:59.534 Running "vercel build"
12:26:00.500 Vercel CLI 48.8.0
12:26:00.849 Installing dependencies...
12:26:13.980 
12:26:13.980 added 385 packages in 13s
12:26:13.982 
12:26:13.983 149 packages are looking for funding
12:26:13.983   run `npm fund` for details
12:26:14.043 Detected Next.js version: 16.0.0
12:26:14.046 Running "npm run build"
12:26:14.159 
12:26:14.160 > client@0.1.0 build
12:26:14.160 > next build
12:26:14.160 
12:26:14.811 Attention: Next.js now collects completely anonymous telemetry regarding usage.
12:26:14.812 This information is used to shape Next.js' roadmap and prioritize features.
12:26:14.812 You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
12:26:14.812 https://nextjs.org/telemetry
12:26:14.812 
12:26:14.827    ▲ Next.js 16.0.0 (Turbopack)
12:26:14.827 
12:26:14.893    Creating an optimized production build ...
12:26:25.367 
12:26:25.368 > Build error occurred
12:26:25.373 Error: Turbopack build failed with 12 errors:
12:26:25.373 ./client/app/products/[id]/page.jsx:11:1
12:26:25.374 Module not found: Can't resolve '../../../components/ui/button'
12:26:25.374 [0m [90m  9 |[39m [36mimport[39m [33mLoader[39m [36mfrom[39m [32m"../../../components/Loader"[39m[33m;[39m
12:26:25.374  [90m 10 |[39m [36mimport[39m [33mProductReview[39m [36mfrom[39m [32m"../../../components/ProductReview"[39m[33m;[39m
12:26:25.374 [31m[1m>[22m[39m[90m 11 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m"../../../components/ui/button"[39m[33m;[39m
12:26:25.375  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
12:26:25.375  [90m 12 |[39m [36mimport[39m [33mRating[39m [36mfrom[39m [32m"../../../components/Rating"[39m[33m;[39m
12:26:25.375  [90m 13 |[39m
12:26:25.375  [90m 14 |[39m [36mconst[39m [33mProductPage[39m [33m=[39m () [33m=>[39m {[0m
12:26:25.375 
12:26:25.375 
12:26:25.375 
12:26:25.375 Import traces:
12:26:25.376   Client Component Browser:
12:26:25.376     ./client/app/products/[id]/page.jsx [Client Component Browser]
12:26:25.376     ./client/app/products/[id]/page.jsx [Server Component]
12:26:25.376 
12:26:25.376   Client Component SSR:
12:26:25.376     ./client/app/products/[id]/page.jsx [Client Component SSR]
12:26:25.376     ./client/app/products/[id]/page.jsx [Server Component]
12:26:25.376 
12:26:25.376 https://nextjs.org/docs/messages/module-not-found
12:26:25.376 
12:26:25.376 
12:26:25.377 ./client/app/products/[id]/page.jsx:11:1
12:26:25.377 Module not found: Can't resolve '../../../components/ui/button'
12:26:25.377 [0m [90m  9 |[39m [36mimport[39m [33mLoader[39m [36mfrom[39m [32m"../../../components/Loader"[39m[33m;[39m
12:26:25.377  [90m 10 |[39m [36mimport[39m [33mProductReview[39m [36mfrom[39m [32m"../../../components/ProductReview"[39m[33m;[39m
12:26:25.377 [31m[1m>[22m[39m[90m 11 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m"../../../components/ui/button"[39m[33m;[39m
12:26:25.378  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
12:26:25.378  [90m 12 |[39m [36mimport[39m [33mRating[39m [36mfrom[39m [32m"../../../components/Rating"[39m[33m;[39m
12:26:25.379  [90m 13 |[39m [36mconst[39m [33mProductPage[39m [33m=[39m () [33m=>[39m {
12:26:25.379  [90m 14 |[39m   [36mconst[39m $ [33m=[39m _c([35m63[39m)[33m;[39m[0m
12:26:25.379 
12:26:25.379 
12:26:25.379 
12:26:25.379 Import traces:
12:26:25.379   Client Component Browser:
12:26:25.379     ./client/app/products/[id]/page.jsx [Client Component Browser]
12:26:25.379     ./client/app/products/[id]/page.jsx [Server Component]
12:26:25.380 
12:26:25.380   Client Component SSR:
12:26:25.380     ./client/app/products/[id]/page.jsx [Client Component SSR]
12:26:25.380     ./client/app/products/[id]/page.jsx [Server Component]
12:26:25.380 
12:26:25.380 https://nextjs.org/docs/messages/module-not-found
12:26:25.380 
12:26:25.380 
12:26:25.380 ./client/components/ui/carousel.jsx:7:1
12:26:25.381 Module not found: Can't resolve './button'
12:26:25.381 [0m [90m  5 |[39m [36mimport[39m useEmblaCarousel [36mfrom[39m [32m"embla-carousel-react"[39m[33m;[39m
12:26:25.381  [90m  6 |[39m [36mimport[39m { [33mArrowLeft[39m[33m,[39m [33mArrowRight[39m } [36mfrom[39m [32m"lucide-react"[39m[33m;[39m
12:26:25.381 [31m[1m>[22m[39m[90m  7 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m"./button"[39m[33m;[39m
12:26:25.381  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
12:26:25.382  [90m  8 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"../../lib/utils"[39m[33m;[39m
12:26:25.382  [90m  9 |[39m [36mconst[39m [33mCarouselContext[39m [33m=[39m [33mReact[39m[33m.[39mcreateContext([36mnull[39m)[33m;[39m
12:26:25.383  [90m 10 |[39m [36mfunction[39m useCarousel() {[0m
12:26:25.383 
12:26:25.383 
12:26:25.383 
12:26:25.384 Import traces:
12:26:25.384   Client Component Browser:
12:26:25.384     ./client/components/ui/carousel.jsx [Client Component Browser]
12:26:25.384     ./client/components/ImageSlider.jsx [Client Component Browser]
12:26:25.384     ./client/components/ImageSlider.jsx [Server Component]
12:26:25.384     ./client/app/(site)/(layouts)/page.jsx [Server Component]
12:26:25.384     ./client/app/page.js [Server Component]
12:26:25.384 
12:26:25.385   Client Component SSR:
12:26:25.385     ./client/components/ui/carousel.jsx [Client Component SSR]
12:26:25.385     ./client/components/ImageSlider.jsx [Client Component SSR]
12:26:25.385     ./client/components/ImageSlider.jsx [Server Component]
12:26:25.385     ./client/app/(site)/(layouts)/page.jsx [Server Component]
12:26:25.385     ./client/app/page.js [Server Component]
12:26:25.385 
12:26:25.385 https://nextjs.org/docs/messages/module-not-found
12:26:25.385 
12:26:25.386 
12:26:25.386 ./client/components/ui/carousel.jsx:6:1
12:26:25.386 Module not found: Can't resolve './button'
12:26:25.386 [0m [90m 4 |[39m [36mimport[39m { [33mArrowLeft[39m[33m,[39m [33mArrowRight[39m } [36mfrom[39m [32m"lucide-react"[39m
12:26:25.386  [90m 5 |[39m
12:26:25.386 [31m[1m>[22m[39m[90m 6 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m"./button"[39m[33m;[39m
12:26:25.386  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
12:26:25.386  [90m 7 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"../../lib/utils"[39m[33m;[39m
12:26:25.387  [90m 8 |[39m [36mconst[39m [33mCarouselContext[39m [33m=[39m [33mReact[39m[33m.[39mcreateContext([36mnull[39m)
12:26:25.387  [90m 9 |[39m[0m
12:26:25.387 
12:26:25.387 
12:26:25.387 
12:26:25.387 Import traces:
12:26:25.387   Client Component Browser:
12:26:25.387     ./client/components/ui/carousel.jsx [Client Component Browser]
12:26:25.387     ./client/components/ImageSlider.jsx [Client Component Browser]
12:26:25.387     ./client/components/ImageSlider.jsx [Server Component]
12:26:25.387     ./client/app/(site)/(layouts)/page.jsx [Server Component]
12:26:25.387     ./client/app/page.js [Server Component]
12:26:25.388 
12:26:25.388   Client Component SSR:
12:26:25.388     ./client/components/ui/carousel.jsx [Client Component SSR]
12:26:25.388     ./client/components/ImageSlider.jsx [Client Component SSR]
12:26:25.388     ./client/components/ImageSlider.jsx [Server Component]
12:26:25.388     ./client/app/(site)/(layouts)/page.jsx [Server Component]
12:26:25.388     ./client/app/page.js [Server Component]
12:26:25.388 
12:26:25.388 https://nextjs.org/docs/messages/module-not-found
12:26:25.389 
12:26:25.389 
12:26:25.389 ./client/components/ui/pagination.jsx:9:1
12:26:25.389 Module not found: Can't resolve './button'
12:26:25.389 [0m [90m  7 |[39m
12:26:25.389  [90m  8 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"../../lib/utils"[39m[33m;[39m
12:26:25.389 [31m[1m>[22m[39m[90m  9 |[39m [36mimport[39m { buttonVariants } [36mfrom[39m [32m"./button"[39m[33m;[39m
12:26:25.390  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
12:26:25.390  [90m 10 |[39m [36mfunction[39m [33mPagination[39m({
12:26:25.390  [90m 11 |[39m   className[33m,[39m
12:26:25.390  [90m 12 |[39m   [33m...[39mprops[0m
12:26:25.390 
12:26:25.390 
12:26:25.390 
12:26:25.390 Import traces:
12:26:25.390   Client Component Browser:
12:26:25.391     ./client/components/ui/pagination.jsx [Client Component Browser]
12:26:25.391     ./client/components/Pagination.jsx [Client Component Browser]
12:26:25.391     ./client/app/products/page.jsx [Client Component Browser]
12:26:25.391     ./client/app/products/page.jsx [Server Component]
12:26:25.391 
12:26:25.391   Client Component SSR:
12:26:25.391     ./client/components/ui/pagination.jsx [Client Component SSR]
12:26:25.391     ./client/components/Pagination.jsx [Client Component SSR]
12:26:25.392     ./client/app/products/page.jsx [Client Component SSR]
12:26:25.392     ./client/app/products/page.jsx [Server Component]
12:26:25.392 
12:26:25.392 https://nextjs.org/docs/messages/module-not-found
12:26:25.392 
12:26:25.392 
12:26:25.392 ./client/components/ui/pagination.jsx:5:1
12:26:25.392 Module not found: Can't resolve './button'
12:26:25.392 [0m [90m 3 |[39m [36mimport[39m { [33mChevronLeftIcon[39m[33m,[39m [33mChevronRightIcon[39m[33m,[39m [33mMoreHorizontalIcon[39m } [36mfrom[39m [32m"lucide-react"[39m[33m;[39m
12:26:25.393  [90m 4 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"../../lib/utils"[39m[33m;[39m
12:26:25.393 [31m[1m>[22m[39m[90m 5 |[39m [36mimport[39m { buttonVariants } [36mfrom[39m [32m"./button"[39m[33m;[39m
12:26:25.393  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
12:26:25.393  [90m 6 |[39m [36mfunction[39m [33mPagination[39m(t0) {
12:26:25.393  [90m 7 |[39m   [36mconst[39m $ [33m=[39m _c([35m8[39m)[33m;[39m
12:26:25.393  [90m 8 |[39m   [36mlet[39m className[33m;[39m[0m
12:26:25.393 
12:26:25.393 
12:26:25.393 
12:26:25.393 Import traces:
12:26:25.393   Client Component Browser:
12:26:25.394     ./client/components/ui/pagination.jsx [Client Component Browser]
12:26:25.394     ./client/components/Pagination.jsx [Client Component Browser]
12:26:25.394     ./client/app/products/page.jsx [Client Component Browser]
12:26:25.394     ./client/app/products/page.jsx [Server Component]
12:26:25.394 
12:26:25.394   Client Component SSR:
12:26:25.394     ./client/components/ui/pagination.jsx [Client Component SSR]
12:26:25.394     ./client/components/Pagination.jsx [Client Component SSR]
12:26:25.394     ./client/app/products/page.jsx [Client Component SSR]
12:26:25.401     ./client/app/products/page.jsx [Server Component]
12:26:25.401 
12:26:25.401 https://nextjs.org/docs/messages/module-not-found
12:26:25.401 
12:26:25.401 
12:26:25.401 ./client/components/IconBtn.jsx:6:1
12:26:25.401 Module not found: Can't resolve './ui/button'
12:26:25.401 [0m [90m 4 |[39m [36mimport[39m [33mLink[39m [36mfrom[39m [32m"next/link"[39m[33m;[39m
12:26:25.402  [90m 5 |[39m [36mimport[39m [33mPropTypes[39m [36mfrom[39m [32m"prop-types"[39m[33m;[39m
12:26:25.402 [31m[1m>[22m[39m[90m 6 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m"./ui/button"[39m[33m;[39m
12:26:25.402  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
12:26:25.402  [90m 7 |[39m [36mconst[39m [33mIconBtn[39m [33m=[39m t0 [33m=>[39m {
12:26:25.402  [90m 8 |[39m   [36mconst[39m $ [33m=[39m _c([35m16[39m)[33m;[39m
12:26:25.402  [90m 9 |[39m   [36mconst[39m {[0m
12:26:25.402 
12:26:25.402 
12:26:25.402 
12:26:25.402 Import traces:
12:26:25.402   Client Component Browser:
12:26:25.402     ./client/components/IconBtn.jsx [Client Component Browser]
12:26:25.402     ./client/components/ProductCard.jsx [Client Component Browser]
12:26:25.404     ./client/app/products/page.jsx [Client Component Browser]
12:26:25.404     ./client/app/products/page.jsx [Server Component]
12:26:25.404 
12:26:25.404   Client Component SSR:
12:26:25.404     ./client/components/IconBtn.jsx [Client Component SSR]
12:26:25.404     ./client/components/ProductCard.jsx [Client Component SSR]
12:26:25.404     ./client/app/products/page.jsx [Client Component SSR]
12:26:25.404     ./client/app/products/page.jsx [Server Component]
12:26:25.405 
12:26:25.405 https://nextjs.org/docs/messages/module-not-found
12:26:25.405 
12:26:25.405 
12:26:25.405 ./client/components/IconBtn.jsx:4:1
12:26:25.405 Module not found: Can't resolve './ui/button'
12:26:25.405 [0m [90m 2 |[39m [36mimport[39m [33mLink[39m [36mfrom[39m [32m"next/link"[39m[33m;[39m
12:26:25.405  [90m 3 |[39m [36mimport[39m [33mPropTypes[39m [36mfrom[39m [32m"prop-types"[39m[33m;[39m
12:26:25.405 [31m[1m>[22m[39m[90m 4 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m"./ui/button"[39m[33m;[39m
12:26:25.405  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
12:26:25.405  [90m 5 |[39m
12:26:25.406  [90m 6 |[39m [36mconst[39m [33mIconBtn[39m [33m=[39m ({
12:26:25.406  [90m 7 |[39m   icon[33m:[39m [33mIcon[39m[33m,[39m[0m
12:26:25.406 
12:26:25.406 
12:26:25.406 
12:26:25.406 Import traces:
12:26:25.406   Client Component Browser:
12:26:25.406     ./client/components/IconBtn.jsx [Client Component Browser]
12:26:25.406     ./client/components/ProductCard.jsx [Client Component Browser]
12:26:25.406     ./client/app/products/page.jsx [Client Component Browser]
12:26:25.406     ./client/app/products/page.jsx [Server Component]
12:26:25.406 
12:26:25.407   Client Component SSR:
12:26:25.407     ./client/components/IconBtn.jsx [Client Component SSR]
12:26:25.407     ./client/components/ProductCard.jsx [Client Component SSR]
12:26:25.407     ./client/app/products/page.jsx [Client Component SSR]
12:26:25.407     ./client/app/products/page.jsx [Server Component]
12:26:25.407 
12:26:25.407 https://nextjs.org/docs/messages/module-not-found
12:26:25.407 
12:26:25.407 
12:26:25.407 ./client/components/NavButton.jsx:3:1
12:26:25.407 Module not found: Can't resolve './ui/button'
12:26:25.407 [0m [90m 1 |[39m [36mimport[39m [33mLink[39m [36mfrom[39m [32m"next/link"[39m[33m;[39m
12:26:25.408  [90m 2 |[39m [36mimport[39m [33mPropTypes[39m [36mfrom[39m [32m"prop-types"[39m[33m;[39m
12:26:25.408 [31m[1m>[22m[39m[90m 3 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m"./ui/button"[39m[33m;[39m
12:26:25.408  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
12:26:25.408  [90m 4 |[39m
12:26:25.408  [90m 5 |[39m [36mconst[39m [33mNavButton[39m [33m=[39m ({ icon[33m:[39m [33mIcon[39m[33m,[39m label[33m,[39m href[33m,[39m variant [33m=[39m [32m"ghost"[39m[33m,[39m className [33m=[39m [32m""[39m }) [33m=>[39m {
12:26:25.408  [90m 6 |[39m   [36mconst[39m content [33m=[39m [33mIcon[39m [33m?[39m [33m<[39m[33mIcon[39m className[33m=[39m[32m"w-5 h-5"[39m [33m/[39m[33m>[39m [33m:[39m [33m<[39m[33mspan[39m[33m>[39m{label}[33m<[39m[33m/[39m[33mspan[39m[33m>[39m[33m;[39m[0m
12:26:25.408 
12:26:25.408 
12:26:25.408 
12:26:25.408 Import traces:
12:26:25.408   Client Component Browser:
12:26:25.409     ./client/components/NavButton.jsx [Client Component Browser]
12:26:25.409     ./client/app/not-found.js [Client Component Browser]
12:26:25.409     ./client/app/not-found.js [Server Component]
12:26:25.409 
12:26:25.409   Client Component SSR:
12:26:25.409     ./client/components/NavButton.jsx [Client Component SSR]
12:26:25.409     ./client/app/not-found.js [Client Component SSR]
12:26:25.409     ./client/app/not-found.js [Server Component]
12:26:25.409 
12:26:25.409   Server Component:
12:26:25.409     ./client/components/NavButton.jsx
12:26:25.409     ./client/components/Footer.jsx
12:26:25.409     ./client/app/(site)/(layouts)/layout.jsx
12:26:25.410     ./client/app/layout.js
12:26:25.410 
12:26:25.410 https://nextjs.org/docs/messages/module-not-found
12:26:25.410 
12:26:25.410 
12:26:25.410 ./client/components/NavButton.jsx:4:1
12:26:25.410 Module not found: Can't resolve './ui/button'
12:26:25.410 [0m [90m 2 |[39m [36mimport[39m [33mLink[39m [36mfrom[39m [32m"next/link"[39m[33m;[39m
12:26:25.410  [90m 3 |[39m [36mimport[39m [33mPropTypes[39m [36mfrom[39m [32m"prop-types"[39m[33m;[39m
12:26:25.410 [31m[1m>[22m[39m[90m 4 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m"./ui/button"[39m[33m;[39m
12:26:25.410  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
12:26:25.410  [90m 5 |[39m [36mconst[39m [33mNavButton[39m [33m=[39m t0 [33m=>[39m {
12:26:25.410  [90m 6 |[39m   [36mconst[39m $ [33m=[39m _c([35m12[39m)[33m;[39m
12:26:25.410  [90m 7 |[39m   [36mconst[39m {[0m
12:26:25.410 
12:26:25.411 
12:26:25.411 
12:26:25.411 Import traces:
12:26:25.411   Client Component Browser:
12:26:25.411     ./client/components/NavButton.jsx [Client Component Browser]
12:26:25.411     ./client/app/not-found.js [Client Component Browser]
12:26:25.411     ./client/app/not-found.js [Server Component]
12:26:25.411 
12:26:25.411   Client Component SSR:
12:26:25.411     ./client/components/NavButton.jsx [Client Component SSR]
12:26:25.411     ./client/app/not-found.js [Client Component SSR]
12:26:25.411     ./client/app/not-found.js [Server Component]
12:26:25.411 
12:26:25.411   Server Component:
12:26:25.411     ./client/components/NavButton.jsx
12:26:25.411     ./client/components/Footer.jsx
12:26:25.412     ./client/app/(site)/(layouts)/layout.jsx
12:26:25.412     ./client/app/layout.js
12:26:25.412 
12:26:25.412 https://nextjs.org/docs/messages/module-not-found
12:26:25.412 
12:26:25.412 
12:26:25.412 ./client/components/ProductCard.jsx:10:1
12:26:25.412 Module not found: Can't resolve './ui/button'
12:26:25.412 [0m [90m  8 |[39m [36mimport[39m [33mIconBtn[39m [36mfrom[39m [32m"./IconBtn"[39m[33m;[39m
12:26:25.412  [90m  9 |[39m [36mimport[39m [33mRating[39m [36mfrom[39m [32m"./Rating"[39m[33m;[39m
12:26:25.412 [31m[1m>[22m[39m[90m 10 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m"./ui/button"[39m[33m;[39m
12:26:25.412  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
12:26:25.412  [90m 11 |[39m [36mexport[39m [36mfunction[39m [33mProductCard[39m(t0) {
12:26:25.412  [90m 12 |[39m   [36mconst[39m $ [33m=[39m _c([35m35[39m)[33m;[39m
12:26:25.412  [90m 13 |[39m   [36mconst[39m {[0m
12:26:25.412 
12:26:25.413 
12:26:25.413 
12:26:25.413 Import traces:
12:26:25.413   Client Component Browser:
12:26:25.413     ./client/components/ProductCard.jsx [Client Component Browser]
12:26:25.413     ./client/app/products/page.jsx [Client Component Browser]
12:26:25.413     ./client/app/products/page.jsx [Server Component]
12:26:25.413 
12:26:25.413   Client Component SSR:
12:26:25.413     ./client/components/ProductCard.jsx [Client Component SSR]
12:26:25.413     ./client/app/products/page.jsx [Client Component SSR]
12:26:25.413     ./client/app/products/page.jsx [Server Component]
12:26:25.413 
12:26:25.413 https://nextjs.org/docs/messages/module-not-found
12:26:25.413 
12:26:25.413 
12:26:25.413 ./client/components/ProductCard.jsx:15:1
12:26:25.414 Module not found: Can't resolve './ui/button'
12:26:25.414 [0m [90m 13 |[39m [36mimport[39m [33mIconBtn[39m [36mfrom[39m [32m"./IconBtn"[39m[33m;[39m
12:26:25.414  [90m 14 |[39m [36mimport[39m [33mRating[39m [36mfrom[39m [32m"./Rating"[39m[33m;[39m
12:26:25.414 [31m[1m>[22m[39m[90m 15 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m"./ui/button"[39m[33m;[39m
12:26:25.414  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
12:26:25.414  [90m 16 |[39m
12:26:25.414  [90m 17 |[39m [36mexport[39m [36mfunction[39m [33mProductCard[39m({ products }) {
12:26:25.414  [90m 18 |[39m   [36mconst[39m router [33m=[39m useRouter()[33m;[39m[0m
12:26:25.414 
12:26:25.414 
12:26:25.414 
12:26:25.414 Import traces:
12:26:25.414   Client Component Browser:
12:26:25.414     ./client/components/ProductCard.jsx [Client Component Browser]
12:26:25.414     ./client/app/products/page.jsx [Client Component Browser]
12:26:25.414     ./client/app/products/page.jsx [Server Component]
12:26:25.415 
12:26:25.415   Client Component SSR:
12:26:25.415     ./client/components/ProductCard.jsx [Client Component SSR]
12:26:25.415     ./client/app/products/page.jsx [Client Component SSR]
12:26:25.415     ./client/app/products/page.jsx [Server Component]
12:26:25.415 
12:26:25.415 https://nextjs.org/docs/messages/module-not-found
12:26:25.415 
12:26:25.415 
12:26:25.415     at <unknown> (./client/app/products/[id]/page.jsx:11:1)
12:26:25.415     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
12:26:25.415     at <unknown> (./client/app/products/[id]/page.jsx:11:1)
12:26:25.415     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
12:26:25.415     at <unknown> (./client/components/ui/carousel.jsx:7:1)
12:26:25.415     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
12:26:25.415     at <unknown> (./client/components/ui/carousel.jsx:6:1)
12:26:25.416     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
12:26:25.416     at <unknown> (./client/components/ui/pagination.jsx:9:1)
12:26:25.416     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
12:26:25.416     at <unknown> (./client/components/ui/pagination.jsx:5:1)
12:26:25.416     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
12:26:25.416     at <unknown> (./client/components/IconBtn.jsx:6:1)
12:26:25.416     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
12:26:25.419     at <unknown> (./client/components/IconBtn.jsx:4:1)
12:26:25.419     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
12:26:25.419     at <unknown> (./client/components/NavButton.jsx:3:1)
12:26:25.419     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
12:26:25.419     at <unknown> (./client/components/NavButton.jsx:4:1)
12:26:25.419     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
12:26:25.419     at <unknown> (./client/components/ProductCard.jsx:10:1)
12:26:25.420     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
12:26:25.420     at <unknown> (./client/components/ProductCard.jsx:15:1)
12:26:25.420     at <unknown> (https://nextjs.org/docs/messages/module-not-found)