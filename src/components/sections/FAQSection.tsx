interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section id="faq" className="relative" aria-labelledby="faq-heading">
      <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-cyan-500/20">
        <h3 id="faq-heading" className="text-3xl font-bold text-cyan-400 mb-8 text-center">
          Frequently Asked Questions
        </h3>
        <dl className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-700 pb-6 last:border-b-0">
              <dt className="text-xl font-semibold text-purple-400 mb-3">
                Q{index + 1}: {faq.question}
              </dt>
              <dd className="text-gray-300 leading-relaxed pl-6">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}