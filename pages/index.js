import styled from "styled-components";
import Link from "next/link";

export default function HomePage({ initialSewingPatterns }) {
  return (
    <>
      <h1>Sewing Pattern Organizer</h1>
      <StyledList>
        {initialSewingPatterns.map((pattern) => (
          <li key={pattern.id}>
            <StyledCard>
              <h2>{pattern.name}</h2>
              <h3>{pattern.designer}</h3>
              <p>Category: {pattern.category}</p>
              <Link href={`/patterns/${pattern.id}`}>more</Link>
              <section>
                <p>Yardage: {pattern.fabricYardage}</p>
                <p>Notions: {pattern.notions}</p>
              </section>
            </StyledCard>
          </li>
        ))}
      </StyledList>
    </>
  );
}

const StyledCard = styled.div`
  background-color: goldenrod;
  padding: 2rem;
  width: 80%;
  max-width: 600px;
`;

const StyledList = styled.ul`
  list-style: none;
`;
