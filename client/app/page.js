import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import RSLayout from "./(site)/(layouts)/layout";
import SiteHomePage from "./(site)/(layouts)/page";

export default function Home() {
  return (
    <div className="mx-auto w-full min-h-[70vh]">
    <SiteHomePage />
    </div>
  );
}
