import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, MouseEvent } from "react";

const Home: NextPage = () => {
  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("from onFileUploadChange");
  };
  const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("From onCancelFile");
  };

  const onUploadFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("From onUploadFile");
  };
  return (
    <div>
      <Head>
        <title>File uploader</title>
        <meta name="description" content="File uploader" />
      </Head>

      <main className="py-10">
        <div className="w-full max-w-3xl px-3 mx-auto">
          <h1 className="mb-10 text-3xl font-bold text-gray-900">
            Upload your files
          </h1>

          <form
            className="w-full p-3 border border-gray-500 border-dashed"
            action=""
          >
            <div className="flex flex-col md:flex-row gap-1.5 md:py-4">
              <label className="flex flex-col items-center justify-center flex-grow h-full py-3 transition-colors duration-150 cursor-pointer hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <strong className="text-sm font-medium">Select an image</strong>
                <input
                  className="block w-0 h-0"
                  name="file"
                  type="file"
                  onChange={onFileUploadChange}
                />
              </label>
              <div className="flex mt-4 md:mt-0 md:flex-col justify-center gap-1.5">
                <button
                  disabled={true}
                  onClick={onCancelFile}
                  className="w-1/2 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 bg-gray-700 rounded-sm md:w-auto md:text-base disabled:bg-gray-400 hover:bg-gray-600"
                >
                  Cancel file
                </button>
                <button
                  disabled={true}
                  onClick={onUploadFile}
                  className="w-1/2 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 bg-gray-700 rounded-sm md:w-auto md:text-base disabled:bg-gray-400 hover:bg-gray-600"
                >
                  Upload file
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      <footer>
        <div className="w-full max-w-3xl px-3 mx-auto">
          <p>All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
