import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
export function FaqSection() {
  /* Declaration de l'etat */
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [{
    question: "Lorem ipsum dolor sit amet?",
    answer: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }, {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }, {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }, {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }, {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }, {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }, {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }, {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }];
  return (
    /* Section FAQ */
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0a1e37]">
          Vous pouvez demander
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => <div key={index} className="border-b border-gray-200">
              <button className="flex justify-between items-center w-full py-4 text-left" onClick={() => toggleFaq(index)}>
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? <ChevronUpIcon className="h-5 w-5 text-[#3498db]" /> : <ChevronDownIcon className="h-5 w-5 text-[#3498db]" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40" : "max-h-0"}`}>
                <p className="pb-4 text-gray-600">{faq.answer}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>
  );
}