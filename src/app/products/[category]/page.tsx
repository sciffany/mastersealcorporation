import { useEffect, useState } from "react";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import seals, { categories } from "@/app/lib/data";
import Link from "next/link";
import CategoryItems from "@/app/components/CategoryItems";
export const dynamic = "force-static";
export const dynamicParams = false; // only build known paths

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  const categoryData = categories.find((c) => c.slug === category);
  const categorySeals =
    category === "all" ? seals : seals.filter((s) => s.category === category);

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxSrc]);

  return (
    <div>
      <Navigation />
      <CategoryItems params={{ category }} />
    </div>
  );
}
