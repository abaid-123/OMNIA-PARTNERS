import React, { useState } from "react";

const FaqAbout = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = Array(6).fill(
    "Lorem Ipsum is simply dummy text of the printing ?"
  );

  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-left  pb-6 mb-8">
          <p className="text-sm mb-2 uppercase tracking-wider">FAQ</p>
          <div className="flex">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 w-[40%]">
              Frequently Ask Questions
            </h2>
            <hr className="block hr_show h-1 w-[60%]  mt-6 border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)]" />
          </div>

          <p className="text-gray-600 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* FAQ List */}
          <div className="w-full lg:w-2/3 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-md p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition"
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-gray-800 font-medium">{faq}</span>
                <button className="text-white bg-blue-600 rounded-full w-8 h-8 text-xl flex items-center justify-center">
                  {openIndex === index ? "-" : "+"}
                </button>
              </div>
            ))}
          </div>

          {/* Question Mark Graphic */}
          <div className="w-full lg:w-1/3 flex justify-center items-start">
            <div className="text-[120px] text-gray-200 font-extrabold leading-none select-none">
              ?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAbout;
