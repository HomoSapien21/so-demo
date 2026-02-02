import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Industries from "@/components/Industries";

import { bannerData } from "@/lib/banner.data";
import { headerData } from "@/lib/header.data";
import { servicesData } from "@/lib/services.data";
import { technologiesData } from "@/lib/technologies.data";
import { industriesData } from "@/lib/industries.data";

export default function Home() {
  return (
    <div>
      <Header {...headerData} />
      <Banner {...bannerData} />
      <Services {...servicesData} />
      <Technologies technologies={technologiesData} />
      <Industries {...industriesData} />
    </div>
  );
}
