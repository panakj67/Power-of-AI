import React from "react";
import { FaRobot, FaChartPie, FaUserCheck, FaQuoteLeft, FaLightbulb, FaLaptopCode } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setInterviewSetup, setLogin } from "../store/actions/userSlice";

const Hero = () => {

  const steps = [
    {
      icon: <FaRobot className="text-indigo-600 text-4xl" />,
      title: "AI Mock Interviews",
      description: "Practice real-world tech interviews powered by AI.",
      bgGradient: "from-indigo-100 to-purple-100",
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
      title: "Smart Feedback",
      description: "Get instant analysis and improvement tips after each session.",
      bgGradient: "from-yellow-100 to-pink-100",
    },
    {
      icon: <FaLaptopCode className="text-blue-500 text-4xl" />,
      title: "Coding Practice",
      description: "Solve DSA problems with detailed explanations and AI help.",
      bgGradient: "from-blue-100 to-cyan-100",
    },
    {
      icon: <FaUserCheck className="text-pink-500 text-4xl" />,
      title: "Get Interview Ready",
      description: "Polish your soft skills, resume, and confidence with expert support.",
      bgGradient: "from-pink-100 to-red-100",
    },
  ];
  const testimonials = [
    {
      quote:
        "InterviewAI was instrumental in helping me land my dream job. The mock interviews felt incredibly real.",
      name: "Eric R.",
    },
    {
      quote:
        "I loved how I got instant feedback. It helped me improve fast and feel confident going into real interviews.",
      name: "Aditi S.",
    },
    {
      quote:
        "The AI coding tests were extremely helpful in preparing for my technical rounds. Highly recommend it!",
      name: "Mihir T.",
    },
    {
      quote:
        "Great platform for building both soft and hard skills before placement season.",
      name: "Sanya P.",
    },
    {
      quote:
        "Resume review and mock HR rounds gave me a solid edge during campus interviews.",
      name: "Rahul D.",
    },
    {
      quote:
        "One of the best investments for my career prep. Everything felt personalized and effective.",
      name: "Sneha V.",
    },
  ];
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  return (
    <>
    <section className="flex bg-gradient-to-r from-amber-100/30 via-white to-white flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-10">
      {/* Left Content */}
      <div className="w-2/3 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl leading-20 font-semibol text-gray-900">
          AI-POWERED <br /> INTERVIEW PREPARATION
        </h1>
        <p className="mt-4 text-gray-600 w-2/3 text-xl">
          Get ready for your MERN stack developer interview with AI—driven platform
        </p>
        <button onClick={() => {user ? dispatch(setInterviewSetup(true)) : dispatch(setLogin(true))}}
         className="mt-6 px-6 py-3 bg-blue-800 cursor-pointer text-white text-lg font-medium rounded-full hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>

      {/* Right Image */}
      <div className="h-full lg:w-[600px] mb-10 lg:mb-0">
        <img
          src="/img01.png"
          alt="AI Interview Illustration"
          className="h-120 ml-10 object-cover"
        />
      </div>
    </section>

    <section className="bg-white py-16 px-6 lg:px-24 relative overflow-hidden">
      <h2 className="text-3xl lg:text-4xl uppercase font-semibold text-center text-gray-900 mb-18">
        How it works
      </h2>

      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-28">
        {/* Line connector */}
        <div className="absolute hidden lg:block w-full h-1 border-2 border-yellow-300 top-1/2 z-0" />

        {/* Card 1 */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${step.bgGradient} rounded-3xl shadow-sm px-2 h-60 w-60 flex flex-col items-center justify-center max-w-xs text-center z-1`}
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20 px-6 lg:px-24 bg-gradient-to-l from-[#8C76C5]/10 via-white to-white">
        <h2 className="text-4xl text-center uppercase font-semibold text-gray-900 mb-4">
            Access to everything for everyone
        </h2>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Illustration */}
        <div className="w-full lg:w-1/2">
          <img
            src="/img02.png"
            alt="Access illustration"
            className="w-full h-140 object-cover max-w-md mx-auto"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          
          <p className="text-gray-600 text-3xl mb-6">
            Whether you're just starting out or preparing for your dream job, our AI tools, feedback, and curated content are made for you.
          </p>
          <button className="bg-[#8b62f3] cursor-pointer text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition">
            Start Practicing
          </button>
        </div>
      </div>
    </section>

    <section className="py-20 px-6 lg:px-24 bg-gradient-to-br from-amber-50 to-white">
      <h2 className="text-3xl font-semibold text-center uppercase text-gray-900 mb-12">
        What Our Clients Are Saying
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
          >
            <FaQuoteLeft className="text-indigo-600 text-3xl mb-4" />
            <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
            <p className="font-semibold text-indigo-800">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Hero;
