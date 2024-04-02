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
      <StyledH1>Sewing Pattern Organizer</StyledH1>
      <StyledList>
        {sewingPatterns.map((pattern) => (
          <li key={pattern.id}>
            <StyledCard>
              <StyledH2>{pattern.name}</StyledH2>
              <h3>{pattern.designer}</h3>
              <p>Category: {pattern.category}</p>
              <Link href={`/patterns/${pattern.id}`}>more</Link>
            </StyledCard>
          </li>
        ))}
      </StyledList>
      <StyledH2>Add a new pattern:</StyledH2>
      <StyledForm onSubmit={handlePatternSubmit}>
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
      </StyledForm>
    </>
  );
}

const StyledH1 = styled.h1`
  font-family: var(--font-serif-semibold);
  text-align: center;
  color: var(--color-dark-green);
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 4px;
  margin: auto;
  width: 80%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledCard = styled.div`
  background-color: var(--color-light-green);
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 2px 2px 2px var(--color-dark-green);
`;

const StyledH2 = styled.h2`
  padding: 0;
  margin: 0;
  font-family: var(--font-serif-semibold);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
  margin: auto;
`;
