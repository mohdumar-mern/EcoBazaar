import { CarouselPlugin } from "@/components/ImageSlider";

export const metadata = {
  title: "EcoBazaar | Shop",
};

export default function SiteHomePage() {
  return (
    <section className="p-8 max-h-screen">
      <CarouselPlugin />
      <h2 className="text-2xl font-semibold">Welcome to EcoBazaar</h2>
      <p className="mt-2 text-gray-600">
        Discover eco-friendly products at the best prices!
      </p>
    </section>
  );
}
