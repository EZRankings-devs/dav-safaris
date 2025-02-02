import React, { useEffect } from "react";
import { useParams } from "react-router";
import CountryHeader from "./CountryHeader";
import DescriptionSection from "./DescriptionSection";
import classes from "./CountrySingle.module.css";
import CountryTours from "./CountryTours";
import { CountriesData } from "../../containers/Countries/CountriesData";
import SEO from "../../containers/SEO/SEO";

const countryMeta = {
  UG: {
    title: "Uganda Gorilla Safaris & Gorilla Trekking, Safari Tours Uganda",
    description:
      "gorilla trekking are the most popular way to view these magnificent creatures in the wild. Plan a trip with us and enjoy safari tours, mountain climbing, and more.",
    keywords:
      "safari uganda, safari tours uganda, uganda gorilla safaris, uganda gorilla trekking",
  },
  KE: {
    title:
      "Kenya Safari Tours,  Best Wildlife Safari in Kenya, Birding Safaris",
    description:
      "We the reputed Kenya safari tours offer an exceptional variety of travel options with the best safari holidays to meet travelers' requirements.",
    keywords: "best safari in kenya, kenya safari tours",
  },
  TZ: {
    title: "Best Tanzania Safari Tours, Luxury Tanzania Wildlife Safari",
    description:
      "Best Tanzania Safari Tours are renowned for animals and bird life. Tourists can enjoy  birdwatching tours and mountain hiking during their luxury Tanzania safari trip.",
    keywords:
      "best safari in tanzania, best tanzania safari, tanzania safari tours, luxury tanzania safari",
  },
  RW: {
    title: "Gorilla Trekking Rwanda, Culture Safaris & Birding Safaris Rwanda",
    description:
      "Gorilla trekking in Rwanda gives you the experience to glance Gorillas in their natural habitat. Rwanda culture safaris allow you to experience birding safaris.",
    keywords: "gorilla trekking rwanda",
  },
};

const CountrySingle = () => {
  const { countryName } = useParams();
  const currentCountry = countryName.split("-")[0];
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCountry]);

  const SelectedCountry = CountriesData.filter(
    (country) => country.name.toLowerCase() === currentCountry.toLowerCase()
  )[0];
  return (
    <>
      <SEO
        title={
          countryName === "uganda-safaris"
            ? countryMeta.UG.title
            : countryName === "kenya-safaris"
            ? countryMeta.KE.title
            : countryName === "tanzania-safaris"
            ? countryMeta.TZ.title
            : countryMeta.RW.title
        }
        description={
          countryName === "uganda-safaris"
            ? countryMeta.UG.description
            : countryName === "kenya-safaris"
            ? countryMeta.KE.description
            : countryName === "tanzania-safaris"
            ? countryMeta.TZ.description
            : countryMeta.RW.description
        }
        keywords={
          countryName === "uganda-safaris"
            ? countryMeta.UG.keywords
            : countryName === "kenya-safaris"
            ? countryMeta.KE.keywords
            : countryName === "tanzania-safaris"
            ? countryMeta.TZ.keywords
            : countryMeta.RW.keywords
        }
      />
      <div className={classes.dav__country_single_wrapper}>
        <div
          className={classes.dav__single_tour_hero}
          style={{
            backgroundImage: `url(${
              SelectedCountry && SelectedCountry.imageCover
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <h1>{SelectedCountry.title}</h1>
        </div>
        <CountryHeader Country={SelectedCountry} />
        <DescriptionSection description={SelectedCountry.description} />
        <CountryTours Country={SelectedCountry && SelectedCountry.name} />
      </div>
    </>
  );
};

export default CountrySingle;
