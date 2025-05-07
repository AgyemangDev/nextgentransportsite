import { createContext, useContext, useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// Create a Context for buses
const BusContext = createContext();

// Custom hook to use bus context
export const useBuses = () => useContext(BusContext);

// BusProvider component to manage and provide bus data to children
export const BusProvider = ({ children, from, to }) => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch buses based on 'from' and 'to' values
  useEffect(() => {
    // Only fetch if `from` and `to` values are valid
    if (!from || !to) {
      console.log("No 'from' or 'to' values provided. Skipping fetch.");
      setLoading(false);  // Stop loading if no values are set
      return; // Skip fetch if values are not provided
    }

    // Query to fetch buses for the selected route
    const q = query(
      collection(db, "buses"),
      where("route.from", "==", from),
      where("route.to", "==", to)
    );

    // Subscribe to the Firebase collection snapshot
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedBuses = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBuses(updatedBuses);
      setLoading(false); // Set loading to false after data is fetched
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [from, to]); // Re-run when 'from' or 'to' change

  return (
    <BusContext.Provider value={{ buses, loading }}>
      {children}
    </BusContext.Provider>
  );
};
