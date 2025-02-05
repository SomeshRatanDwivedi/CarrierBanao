import { useState } from "react";
import { Button } from "./ui/button";

const QuizList = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="p-6 rounded-lg shadow-lg w-full border border-gray-700 bg-gray-900">
        <div>
          <h2 className="text-lg font-semibold mb-3">Question 10 of 10</h2>
          <p className="text-gray-300 mb-4">
            In JavaScript, what is the purpose of the <code className="text-yellow-300">this</code> keyword?
          </p>

          <div className="space-y-3">
            {[
              "To refer to the current function",
              "To refer to the global object",
              "To refer to the object that the current function is a method of",
              "To declare a variable",
            ].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="js-question"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="text-gray-300">{option}</span>
              </label>
            ))}
          </div>
          <Button size="lg" variant="ghost" className="mt-6 text-white border" onClick={() => setShowExplanation(!showExplanation)}>
            Show Explanation
          </Button>


          {showExplanation && (
            <div className="mt-4 p-4 bg-gray-800 rounded-lg text-gray-300">
              <p>
                The <code className="text-yellow-300">this</code> keyword refers to the **object that the current function is a method of**.
                Its value depends on how the function is called.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizList;
