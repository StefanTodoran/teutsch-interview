import { useState } from "react";

export function Bar() {
  const [person, setPerson] = useState({ 
    lastName: "Doe", 
    firstName: "John",
    birthDate: new Date(),
    // ...
  });

  /**
   * Updates lastName property of person.
   * @param newName The new lastName value.
   */
  function getMarried(newName: string) {
    // TODO
  }

  return (
    <div className="id-card">
      <p>First Name: <span>{person.firstName}</span></p>
      <p>Last Name: <span>{person.lastName}</span></p>

      {/* ... */}
    </div>
  );
}