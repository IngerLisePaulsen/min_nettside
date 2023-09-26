/**
 * Denne komponenten rendrer et profilbilde og en tekst på hovedsiden.
 * Eksempel:
 * - Du kan endre profilbilde. Husk å legge det nye bilde ditt i public mappen.
 * - Endre "Velkommen" teksten
 * - Oppdater navnet og eposten til din egen.
 */

import Image from "next/image";

export function Introduction() {
  return (
    <div className="flex gap-5 flex-col sm:flex-row">
      <Image
        alt="Bilde av meg"
        src="/riktig.cv.bilde.jpg"
        className="rounded"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-5 my-auto text-center sm:text-middle">
        <h1 className="text-secondary-200 text-4xl sm:text-6xl">Velkommen til min digitale CV |In progress| </h1>
        <p>
          Du kan sende meg en epost på: {"ingerlisepau@hotmail.com"}
          <a
            className="font-bold hover:underline"
            href="mailto:"
          >
            
          </a>
        </p>
      </div>
    </div>
  );
}
