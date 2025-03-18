"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

export function FAQ() {
  const [openedQuestion, setOpenedQuestion] = useState(null);

  const faqItems = [
    {
      question:
        "How is Zencoder different from other AI code assistants like GitHub Copilot, Sourcegraph, Codeium & Replit?",
      answer:
        "Zencoder differentiates itself through its comprehensive repository understanding capabilities, agentic workflow that can execute multi-step tasks autonomously, and deeper integration with development environments. Unlike simpler code completion tools, Zencoder acts as a true collaborative agent that can understand project context, suggest architectural improvements, and execute complex development workflows without constant human guidance.",
    },
    {
      question: "What are the differences between Cognition Labs' Devin and Zencoder?",
      answer:
        "While both Devin and Zencoder are AI coding agents, Zencoder focuses on enterprise integration, with robust team collaboration features and security controls designed for organizations. Zencoder's repository grokking technology provides deeper understanding of existing codebases, and our agentic pipeline allows for customizable workflows that align with established development practices rather than replacing them.",
    },
    // Additional FAQ items...
  ];

  const toggleQuestion = (index) => {
    setOpenedQuestion(openedQuestion === index ? null : index);
  };

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center min-h-screen w-screen font-inter">
      <div className="w-full max-w-4xl mx-auto px-7 flex items-center justify-center">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-md p-6 sm:p-8 md:p-10 featured-item text-center w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-[var(--border)] pb-4 sm:pb-6 transition-all duration-300 ease-in-out"
              >
                <button
                  className="w-full text-left flex justify-between items-start focus:outline-none group dropdown-item rounded-lg p-2"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openedQuestion === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-medium pr-4 sm:pr-8 group-hover:text-[var(--primary)] transition-colors duration-300">
                    {item.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-[var(--primary)] transition-all duration-300 mt-1 ${
                      openedQuestion === index ? "transform rotate-45" : ""
                    }`}
                  >
                    <Plus size={24} />
                  </div>
                </button>
                {openedQuestion === index && (
                  <div
                    className="mt-3 sm:mt-4 text-sm sm:text-base text-[var(--muted)] pr-4 sm:pr-12 animate-in fade-in slide-in-from-top-1 duration-300"
                    id={`faq-answer-${index}`}
                  >
                    <p className="leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
