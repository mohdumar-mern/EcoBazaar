import Trending from "@/components/(trending)/page";
import {  ImageSlider } from "@/components/ImageSlider";

export const metadata = {
  title: "EcoBazaar | Shop",
};

export default function SiteHomePage() {
  return (
    <section className="p-8 min-h-screen">
      <ImageSlider />
      <Trending />
    </section>
  );
}
