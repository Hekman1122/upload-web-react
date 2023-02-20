import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import useDelete from "../hooks/useDelete";
import { motion } from "framer-motion";
const Showcase = () => {
  const { docs } = useFirestore("images");
  const [modal, setModal] = useState(null);
  const handleModal = (e) => {
    if (e.target.id === "backdrop") {
      setModal(null);
    }
  };
  const { handleDelete, isSuccess } = useDelete();
  return (
    <div className="section-div mt-8">
      {modal ? (
        <div
          className="absolute w-full h-screen top-0 left-0 bg-black/60 z-10 flex justify-center items-center"
          id="backdrop"
          onClick={handleModal}
        >
          <div className="max-w-xl  p-3 bg-slate-50 rounded-md shadow-md">
            <img
              src={modal}
              alt={modal}
              className="max-h-[32rem] object-cover w-full"
            />
          </div>
        </div>
      ) : null}

      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {docs?.map((doc) => {
          return (
            <motion.div
              key={doc._id}
              className="flex flex-col gap-4 justify-center items-center rounded-md overflow-hidden "
              layout
              transition={{ duration: 0.3 }}
            >
              <img
                src={doc.fileUrl}
                alt={doc._id}
                loading="lazy"
                className="w-full h-80 object-cover opacity-90 hover:opacity-100 duration-300 cursor-pointer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setModal(doc.fileUrl);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  handleDelete(doc);
                }}
                className="border border-gray-600 opacity-60 px-6 py-2 rounded-md hover:opacity-100 duration-200"
              >
                Delete file
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Showcase;
