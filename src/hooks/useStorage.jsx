import { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //設定參考路徑和上傳檔案
    const storageRef = ref(storage, `image/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);
    //監聽上傳事件進度
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        let fileUrl = await getDownloadURL(uploadTask.snapshot.ref);
        setUrl(fileUrl);

        //將圖片url加入 firestore 當中
        try {
          const docRef = await addDoc(collection(db, "images"), {
            fileUrl,
            createAt: serverTimestamp(),
            name: file.name,
          });
        } catch (e) {
          setError(e);
          console.log(e);
        }
      }
    );
  }, [file]);

  return { url, error, progress };
};

export default useStorage;
