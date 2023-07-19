import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import Modal from "./Modal";

const Form = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [noOfItems,setNoOfItems] = useState(0);
  


  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };



  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    console.log(file);
    if (file) {
      if (file.type === "application/json") {
        fileReader.readAsText(file, "UTF-8");
        fileReader.onload = (e) => {
          setFile(e.target.result);
        };
        setError("");
      } else {
        setFile(null);
        setNoOfItems(0);
        setError("Invalid file type. Please select a JSON file.");
      }
    }
  };

  const resetInput = ()=>{
      setFile(null);
      setName('');
      setError('');
      setEmail('');   
  }


  const formSubmitHandler = async (e)=>{
    e.preventDefault();
         const user = {
            name,email, setFile:JSON.parse(file),type:file
         }
         setNoOfItems(file.length);         

         const response = await fetch(
            "https://jsonform-ce866-default-rtdb.firebaseio.com/data.json",
            {
              method: "POST",
              body: JSON.stringify(user),
              headers: {
                "Content-Type": "application/json",
              },
            })
            
            resetInput();
  }

  return (
    <React.Fragment>
      <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex flex-1 sm:mx-auto sm:w-full sm:max-w-sm ">
          <AiOutlineArrowLeft className="text-3xl mt-1 pt-1 cursor-pointer"></AiOutlineArrowLeft>
          <h2 className="text-center text-2xl font-semibold pt-0.5 ml-4 leading-9">
            Submit form
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formSubmitHandler}>
            <div>
              <label
                htmlFor="name"
                className="block text-lg  leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-3">
                <input
                  id="name"
                  //   name="email"
                  type="text"
                  required
                  placeholder="Full Name"
                  onChange={nameChangeHandler}
                  className="block w-full bg-stone-50 rounded-md border-0 outline-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 "
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg  leading-6 text-gray-900"
                >
                  Email
                </label>
              </div>
              <div className="mt-3">
                <input
                  id="email"
                  //   name="email"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={emailChangeHandler}
                  className="block w-full bg-stone-50 rounded-md border-0 outline-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg  leading-6 text-gray-900"
                >
                  Upload JSON File
                </label>
              </div>
              <div className="mt-3 ">
                <div className="mt-2 flex bg-stone-50 justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <BsFillFileEarmarkArrowUpFill
                      className="mx-auto h-8 w-8 text-sm text-blue-500"
                      aria-hidden="true"
                    ></BsFillFileEarmarkArrowUpFill>
                    <div className="mt-2 flex text-sm leading-6">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold"
                      >
                        <span className="text-slate-400">Browse file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {error && <p className="ml-1 text-sm text-gray-500">{error}</p>}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg  leading-6 text-gray-900"
                >
                  File Contents
                </label>
              </div>
              <div className="mt-3 ">
                <div className="mt-2 flex bg-stone-50 justify-center rounded-lg border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <div className="mt-2 flex text-sm leading-6">{file}</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-lay-400 px-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
