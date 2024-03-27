import styled from "styled-components";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export default function HomePage({ initialSewingPatterns }) {
  const [sewingPatterns, setSewingPatterns] = useLocalStorageState("patterns", {
    defaultValue: initialSewingPatterns,
  });

  function handlePatternSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setSewingPatterns([...sewingPatterns, { ...data, id: uid() }]);

    event.target.reset();
  }

  return (
    <>
      <h1>Sewing Pattern Organizer</h1>
      <StyledList>
        {sewingPatterns.map((pattern) => (
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
      <form onSubmit={handlePatternSubmit}>
        <label htmlFor="pattern-name">Name</label>
        <input type="text" id="pattern-name" name="name"></input>
        <label htmlFor="pattern-designer">Designer</label>
        <input type="text" id="pattern-designer" name="designer"></input>
        <label htmlFor="pattern-category">Category</label>
        <select id="pattern-category" name="category">
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
          name="fabricYardage"
        ></input>
        <label htmlFor="pattern-notions">Required Notions</label>
        <input type="textarea" id="pattern-notions" name="notions"></input>
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
