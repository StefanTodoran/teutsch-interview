import React, { useState } from "react";

export function Bar() {
  const [person, setPerson] = useState({ 
    lastName: "Doe", 
    firstName: "John",
    birthDate: new Date(),
    friends: new Set<string>(["Jane", "Sally"]),
    // ...
  });

  /**
   * Updates lastName property of person.
   * @param newName The new lastName value.
   */
  function getMarried(newName: string) {
    // TODO
  }
  
  /**
   * Adds a new friend to person's friends.
   * @param newFriend The new friend value to add.
   */
  function makeFriend(newFriend: string) {
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