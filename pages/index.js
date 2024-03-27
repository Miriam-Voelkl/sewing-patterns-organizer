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
            </StyledCard>
          </li>
        ))}
      </StyledList>
      <h2>add a new pattern:</h2>
      <form>
        <label htmlFor="pattern-name">Name</label>
        <input type="text" id="pattern-name" name="patternName"></input>
        <label htmlFor="pattern-designer">Designer</label>
        <input type="text" id="pattern-designer" name="patternDesigner"></input>
        <label htmlFor="pattern-category">Category</label>
        <select id="pattern-category" name="patternCategory">
          <option value="tops">tops</option>
          <option value="jackets-coats">jackets & coats</option>
          <option value="cardigans-waistcoats">cardigans & waistcoats</option>
          <option value="dresses">dresses</option>
          <option value="jumpsuits-overalls">jumpsuits & overalls</option>
          <option value="trousers-shorts">trousers & shorts</option>
          <option value="skirts">skirts</option>
        </select>
        <label htmlFor="pattern-yardage">Required Yardage</label>
        <input
          type="textarea"
          id="pattern-yardage"
          name="patternYardage"
        ></input>
        <label htmlFor="pattern-notions">Required Notions</label>
        <input
          type="textarea"
          id="pattern-notions"
          name="patternNotions"
        ></input>
        <button type="submit">Submit</button>
      </form>
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
