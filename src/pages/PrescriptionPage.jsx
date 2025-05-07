import InputBar from "../components/InputBar";

export default function ReviewPage() {
  return (
    <div className="h-screen">
      <h1 className="text-center mt-10 font-mono font-bold text-3xl text-blue-800">
        Prescription Details!
      </h1>
      <div className="mt-10  p-3 w-1/4 m-auto bg-sky-50 shadow-md rounded-md overflow-hidden justify-center items-center">
        <div className="p-6">
          <div className="flex flex-col mb-4">
            <div className="mt-1">
              <InputBar
                labelName={"Name Of Doctor"}
                type={"text"}
                id={"nameDoctor"}
                name={"nameDoctor"}
                // placeholder={"Enter doctor's name..."}
              />
            </div>
            <div className="mt-4">
              <InputBar
                labelName={"Email of Doctor / Phone Number / Details"}
                typeVal={"text"}
                idVal={"contactDoctor"}
                nameVal={"contactDoctor"}
                // placeholder={"doctor contact details here..."}
              />
            </div>
            <div className="mt-4">
              <InputBar
                labelName={"Name of Patient"}
                typeVal={"text"}
                idVal={"namePatient"}
                nameVal={"namePatient"}
                // placeholder={"Enter patient name.."}
              />
            </div>
          </div>

          <div className="mb-4">
            <textarea
              className="w-full px-3 py-8 border border-blue-200 rounded-md focus:outline-none focus:border-blue-500"
              rows="3"
              placeholder="Medicine details and their timings..."
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button className="px-4 py-2 bg-gray-200 text-purple-900 rounded-md focus:outline-none hover:bg-gray-300">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
