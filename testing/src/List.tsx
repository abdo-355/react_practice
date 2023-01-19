import { FC } from "react";

import data from "./data";

interface Props {
  people: typeof data;
}

const List: FC<Props> = ({ people }) => {
  return (
    <>
      {people.map((person) => (
        <article key={person.id} className="person">
          <img src={person.image} alt={person.name} />
          <div>
            <h4>{person.name}</h4>
            <p>{person.age} years</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
