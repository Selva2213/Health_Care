import React, { useState } from "react";
import InputBar from "../components/InputBar";

// Star Rating Component
const StarRating = ({ rating, onChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center">
      {stars.map((star) => (
        <button
          key={star}
          className={`text-4xl ${
            star <= rating ? "text-yellow-400" : "text-gray-400"
          } focus:outline-none`}
          onClick={() => onChange(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default function ReviewPage() {
  const [namePatient, setNamePatient] = useState("");
  const [nameDoctor, setNameDoctor] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <div className="h-screen">
      <h1 className="py-4 text-center font-mono font-bold text-3xl text-blue-800">
        Your Feedback Matters!
      </h1>
      <div className="mt-5 p-3 w-1/4 m-auto bg-sky-50 shadow-md rounded-md overflow-hidden justify-center items-center">
        <div className="p-6">
          <div className="flex flex-col mb-4">
            <InputBar
              labelName={"Name Of Patient"}
              forVal={"namePatient"}
              typeVal={"text"}
              idVal={"namePatient"}
              nameVal={"namePatient"}
              value={namePatient}
              onChange={(e) => setNamePatient(e.target.value)}
              // placeholder={"Enter your name.."}
            />
          </div>
          <InputBar
            labelName={"Name Of Doctor"}
            forVal={"nameDoctor"}
            typeVal={"text"}
            idVal={"nameDoctor"}
            nameVal={"nameDoctor"}
            value={nameDoctor}
            onChange={(e) => setNameDoctor(e.target.value)}
            // placeholder={"Enter doctor's name..."}
          />
          <div className="mb-4 mt-3">
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-purple-900"
            >
              Share your experience in scaling:
            </label>
            <StarRating rating={rating} onChange={setRating} />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:border-blue-500"
              rows="3"
              placeholder="Add your comments..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button className="px-4 py-2 bg-gray-200 text-purple-900 rounded-md focus:outline-none hover:bg-gray-300">
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
