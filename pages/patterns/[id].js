import { useRouter } from "next/router";

export default function DetailsPage({ initialSewingPatterns }) {
  const router = useRouter();
  const { id } = router.query;

  const currentPattern = initialSewingPatterns.find(
    (pattern) => pattern.id === id
  );

  if (!currentPattern) {
    return;
  }

  return (
    <>
      <h1>Sewing Pattern Organizer</h1>
      <h2>{currentPattern.name}</h2>
      <h3>{currentPattern.designer}</h3>
      <section>
        <p>Yardage: {currentPattern.fabricYardage}</p>
        <p>Notions: {currentPattern.notions}</p>
      </section>
    </>
  );
}
