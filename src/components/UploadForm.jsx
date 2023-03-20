import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  //allow image types
  const types = ["image/png", "image/jpeg", "image/gif", "image/ico"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected?.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image type (png , jpeg or gif)");
    }
  };
  return (
    <div className="section-div">
      {error ? (
        <div className="text-center text-red-600 text-lg mb-4">{error}</div>
      ) : null}
      <form className="text-center ">
        <label>
          <input
            type="file"
            onChange={changeHandler}
            className="opacity-0 w-0 h-0 outline-none"
          />
          <span className="border font-semibold tracking-wider border-yellow-700 rounded-md cursor-pointer opacity-70 hover:opacity-100 duration-200 px-4 py-2">
            上傳檔案
          </span>
        </label>
        <div className="mt-4">
          {file ? <div>{file.name}</div> : null}
          {file ? (
            <div>
              <ProgressBar file={file} setFile={setFile} />
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
