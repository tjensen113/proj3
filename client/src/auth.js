import { useState, useEffect } from "react";

export const useAuth = auth => {
  const [authenticated, setAuthenticated] = useState(null);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
      const doSomething = async() =>{
          console.log("Something")
      };
      doSomething();
    // auth.isAuthenticated().then(isAuthenticated => {
    //   if (isAuthenticated !== authenticated) {
    //     setAuthenticated(isAuthenticated);
    //   }
    // });
  });
  useEffect(() => {
    if (authenticated) {
      auth.getUser().then(setUser);
    } else {
      setUser(null);
    }
  }, [authenticated]);
  return [authenticated, user];
};
