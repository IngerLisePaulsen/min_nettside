/**
 * Denne komponenten renderer på CV siden.
 * Komponenten består av en liste av type objekter som tilsvarer med det som vises på siden.
 * Eksempel:
 * - Utvide sections med flere erfaringer eller utdanning
 * - Utvide sections med "Ferdigheter"
 */
import { CVSection } from "@/components/CVSection";

const sections = [
  {
    title: "Erfaring",
    items: [
      {
        sectionTitle: "Omega 365 Solutions  | Sommerstudent",
        period: "Omega 365 Solutions  | Sommerstudent | Juni 2023 - Juli 2023",
        description:
          "Under min periode hos Omega 365 fikk jeg og en annen student mulighet til å lage vår helt egen app. Vi fikk fritt velge hvilken app vi skulle lage også hvile teknologier vi ville benytte oss av",
      },
    ],
  },
  {
    title: "Utdanning",
    items: [
      {
        sectionTitle: "Høgskulen på Vestlandet | Lærerutdanning med master",
        period: "Høgskulen på Vestlandet | Lærerutdanning med master | August 2016 - Juli 2022",
        description:
          "Jeg gikk 4 årig utdanning for å få bacheloren min. Deretter tok jeg 2 år til med master. Jeg har følgende fag: Naturfag, Norsk og kroppsøving.",
      },
      {
        sectionTitle: "Høgskulen på Vestlandet | Informasjonsteknologi",
        period: "Høgskulen på Vestlandet | Informasjonsteknologi | August 2022 - Juli 2025",
        description:
          "Jeg gikk 4 årig utdanning for å få bacheloren min. Deretter tok jeg 2 år til med master. Jeg har følgende fag: Naturfag, Norsk og kroppsøving.",
      },
      
    ],
  },
];

export default function CV() {
  return (
    <div className="font-bold container mx-auto mt-32 px-2 gap-16 flex flex-col">
      {sections.map((section) => {
        return <CVSection {...section} key={section.title} />;
      })}
    </div>
  );
}

