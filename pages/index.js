import initialSewingPatterns from "../lib/initialSewingPatterns.json";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <h1>Sewing Pattern Organizer</h1>
      <ul>
        {initialSewingPatterns.map((pattern) => (
          <li key={pattern.id}>
            <StyledCard>
              <h2>{pattern.name}</h2>
              <h3>{pattern.designer}</h3>
              <p>Category: {pattern.category}</p>
              <section>
                <p>Yardage: {pattern.fabricYardage}</p>
                <p>Notions: {pattern.notions}</p>
              </section>
            </StyledCard>
          </li>
        ))}
      </ul>
    </>
  );
}

const StyledCard = styled.div`
  background-color: goldenrod;
`;
