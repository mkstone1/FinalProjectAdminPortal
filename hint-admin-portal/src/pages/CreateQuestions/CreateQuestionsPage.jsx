// CreateQuestionsPage.jsx
import React, { useState } from "react";
import "./CreateQuestionPage.css";

const CreateQuestionsPage = () => {
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    categoryId: "Nynne",
    title: "",
    wrongAnswer: "",
    answers: ["", "", "", "", ""],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("answer")) {
      const index = parseInt(name.slice(6)) - 1;

      setFormData((prevData) => ({
        ...prevData,
        answers: prevData.answers.map((answer, i) => {
          return i === index ? value : answer;
        }),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleDropdownChange = (event) => {
    const categoryId = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      categoryId,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      categoryId: formData.categoryId,
      title: formData.title,
      wrongAnswer: formData.wrongAnswer,
      answers: formData.answers.map((answer, i) => ({
        id: i + 1,
        answer: answer,
      })),
    };

    console.log(formData);

    // Assuming you have an API endpoint to send the data
    const apiUrl =
      "https://finalprojectbackend.azurewebsites.net/api/cards?code=qaWssbOBmAK8d9RvAnfj-8_JggACRsp_J7VcJLsz6Xz4AzFuVStsTQ==";
    console.log(formData);
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log("Data submitted successfully");
        setFormData({
          categoryId: "Nynne",
          title: "",
          wrongAnswer: "",
          answers: ["", "", "", "", ""],
        });
      } else {
        console.error("Failed to submit data");
        setError("En fejl er sket. Snak med Mark");
      }
    } catch (error) {
      console.error("Error during API request", error);
      setError("En fejl er sket. Snak med Mark");
    }
  };

  return (
    <div id="question-form">
      <form onSubmit={handleSubmit} className="question-form-element">
        <h1>Create Questions</h1>
        <select
          id="categoryId"
          value={formData.categoryId}
          style={{ marginBottom: 25, marginLeft: 25 }}
          onChange={handleDropdownChange}
        >
          <option>Nynne</option>
          <option>Tale</option>
          <option>Mime</option>
        </select>

        <div className="question-form-element">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="question-form-input"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="question-form-element">
          <label htmlFor="wrongAnswer">Rødt svar</label>
          <input
            type="text"
            id="wrongAnswer"
            name="wrongAnswer"
            className="question-form-input"
            value={formData.wrongAnswer}
            onChange={handleInputChange}
          />
        </div>

        {formData.answers.map((answer, index) => (
          <div key={index} className="question-form-element">
            <label htmlFor={`answer${index + 1}`}>{`Svar ${index + 1}`}</label>
            <input
              className="question-form-input"
              type="text"
              id={`answer${index + 1}`}
              name={`answer${index + 1}`}
              value={answer}
              onChange={handleInputChange}
            />
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
      {error && <div className="error-box">{error}</div>}
    </div>
  );
};

export default CreateQuestionsPage;
