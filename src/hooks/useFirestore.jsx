import { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";
const useFirestore = (collections) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "images"), orderBy("createAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), _id: doc.id });
      });
      setDocs([...documents]);
    });

    return () => unsubscribe();
  }, [collections]);

  return { docs };
};

export default useFirestore;
