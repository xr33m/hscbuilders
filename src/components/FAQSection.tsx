import React from 'react';
import { PhoneCall, ChevronDown } from 'lucide-react';
import { Button } from './MovingBorderButton';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does landscaping cost?",
      answer: "Landscaping costs vary depending on the scope of work, property size, and materials chosen. We provide free, detailed quotes for all projects. Basic lawn maintenance typically starts at £50-100 per visit, while complete landscape installations can range from £3,000 to £15,000+ depending on complexity."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes! We offer completely free, no-obligation estimates for all our services. Our team will visit your property, assess your needs, and provide a detailed written quote within 24-48 hours."
    },
    {
      question: "What areas do you service?",
      answer: "We proudly serve Glasgow and surrounding areas within a 30-mile radius, including Edinburgh, Stirling, Paisley, and Hamilton. Contact us to confirm service availability in your specific location."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. We are fully licensed, bonded, and insured for your protection and peace of mind. We carry comprehensive liability insurance and workers' compensation coverage for all our team members."
    },
    {
      question: "How often should I have my lawn maintained?",
      answer: "Most lawns benefit from weekly maintenance during growing season (spring through autumn) and bi-weekly or monthly service during slower growth periods. We'll create a custom maintenance schedule based on your lawn's specific needs and your budget."
    },
    {
      question: "Do you offer seasonal cleanup services?",
      answer: "Yes! We provide comprehensive spring and autumn cleanup services including leaf removal, debris cleanup, pruning, mulching, and preparing your landscape for the changing seasons."
    },
    {
      question: "Can you help with landscape design?",
      answer: "Definitely! Our experienced designers can create custom landscape plans that match your vision, budget, and property requirements. We handle everything from initial concept to final installation."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, cheque, and all major credit cards. For larger projects, we offer flexible payment plans and can work with you to find a payment schedule that fits your budget."
    }
  ];

  return (
    <section className="w-full py-20 lg:py-40 bg-secondary-bg">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Header and CTA */}
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <span className="inline-flex items-center rounded-full border border-primary-accent/30 bg-primary-accent/10 px-3 py-1 text-sm font-medium text-primary-accent">
                  FAQ
                </span>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-heading font-bold text-text-primary">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-text-secondary text-left">
                  Get answers to common questions about our professional landscaping services. 
                  From pricing to maintenance schedules, we've got you covered with expert advice 
                  for your outdoor space transformation.
                </p>
              </div>
              <div className="">
                <Button
                  as="a"
                  href="tel:+447490738974"
                  containerClassName="w-auto h-14"
                  className="px-6 py-3 font-semibold gap-4"
                >
                  <span className="flex items-center gap-2">
                    Call Us Now <PhoneCall className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-primary-bg rounded-xl border border-border-color overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-secondary-bg/50 transition-colors duration-200 focus:outline-none focus:bg-secondary-bg/50"
                >
                  <h3 className="text-lg font-heading font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <ChevronDown 
                      className={`w-5 h-5 text-primary-accent transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-border-color pt-4">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;