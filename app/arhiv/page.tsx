import { fetchArticles } from "@/api/fetch";
import CardsCta from "@/components/CardsCta";
import DisclousureCards from "@/components/DisclosureCards";
import HeroImage from "@/components/HeroImage";

export default async function Arhiv() {
  const articles = await fetchArticles();
  return (
    <div>
      <HeroImage title="Arhiv objav" />
      <DisclousureCards articles={articles} />
      <CardsCta
        cards={[
          {
            title: "Spoznaj naše pivo",
            copy: "Nabor piv, polnjenih v Laškem.",
            cta: "Razišči",
            url: "url",
            image: "/placeholders/beer.png",
          },
          {
            title: "Spoznaj naše pivo",
            copy: "Nabor piv, polnjenih v Laškem.",
            cta: "Razišči",
            url: "url",
            image: "/placeholders/beer.png",
          },
        ]}
      />
    </div>
  );
}
