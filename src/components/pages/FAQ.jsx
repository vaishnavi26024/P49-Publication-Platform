import { useState } from "react";

function FAQ() {

  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does publishing take?",
      answer: "Publishing usually takes 2–4 weeks depending on editing and design."
    },
    {
      question: "Do you provide ISBN?",
      answer: "Yes, we provide ISBN with all our publication packages."
    },
    {
      question: "Do you offer marketing services?",
      answer: "Yes, we provide digital marketing and distribution services."
    }
  ];

  return (
    <div className="faq-page">

      <h1 className="faq-heading">Frequently Asked Questions</h1>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div className="faq-card" key={index}>
            <h3 onClick={() => toggle(index)}>
              {item.question}
            </h3>
            {open === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>

    </div>
  );
}

export default FAQ;
