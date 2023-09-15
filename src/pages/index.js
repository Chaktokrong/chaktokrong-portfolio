import { NextSeo } from "next-seo";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className="home-page">
      <NextSeo
        title="Home | Chaktokrong Portfolio"
        openGraph={{
          site_name: "Chaktokrong Portfolio",
          title: "Home",
          description: "This is my personal portfolio",
          images: [
            {
              url: "image/ProfileMember03.png",
              width: 700,
              height: 500,
              alt: "Logo",
              type: "image/jpg",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
    </div>
  );
}
