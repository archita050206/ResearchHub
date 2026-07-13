import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How accurate is the semantic search?",
    answer:
      "Our AI-powered semantic search understands concepts instead of just keywords, helping you discover the most relevant research papers.",
  },
  {
    question: "Is my research data private?",
    answer:
      "Absolutely. Your notes, collections and reading history are encrypted and securely stored.",
  },
  {
    question: "Can I collaborate with my team?",
    answer:
      "Yes. Invite collaborators, share collections and work together in real time.",
  },
  {
    question: "Can I export citations?",
    answer:
      "Yes. Export citations in BibTeX, APA, MLA and Chicago formats with one click.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-8">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Everything you need to know about ResearchHub.
          </p>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl border"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between bg-white px-6 py-5 text-left hover:bg-gray-50"
              >

                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {openIndex === index && (

                <div className="bg-gray-50 px-6 pb-5 pt-2 text-gray-600 leading-7">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;