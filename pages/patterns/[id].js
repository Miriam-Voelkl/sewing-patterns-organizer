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

  return <h1>{currentPattern.name}</h1>;
}
