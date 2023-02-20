import { useState } from "react";
import { storage, db } from "../firebase/config";
import { ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from "firebase/firestore";
const useDelete = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  // Delete the file from storage and firestore
  const handleDelete = (file) => {
    const desertRef = ref(storage, `image/${file.name}`);
    deleteObject(desertRef)
      .then(async () => {
        await deleteDoc(doc(db, "images", file._id));
        setIsSuccess((prev) => !prev);
      })
      .catch((error) => {
        setIsSuccess((prev) => !prev);
        console.dir(error);
      });
  };
  return { handleDelete, isSuccess };
};

export default useDelete;
