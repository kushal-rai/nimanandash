import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/registration");
  };
  const process = [
    {
      title: "Register",
      description:
        "Click on 'Register Now' and fill out the form with correct details.",
    },
    {
      title: "Get contacted",
      description:
        "Our team will reach out to you with a list of individuals matching your preferences.",
    },
    {
      title: "Arrange meeting",
      description:
        "We'll organize a meeting with your potential future spouse.",
    },
  ];
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 z-0 bg-cover opacity-70 bg-center "
        style={{
          backgroundImage: "url('assets/img/hero.webp')",
        }}
      />
      <div className="relative z-10 text-black w-[80%] m-auto text-center space-y-5 md:space-y-20 md:pt-20 pt-10">
        <h1 className="font-bold text-2xl md:text-3xl uppercase text-white shadow-lg bg-red-600 rounded-full text-center bg-opacity-90 w-[85%] m-auto p-4 md:mb-20 ">
          How to get started?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-4 sm:gap-7 m-auto max-w-5xl ">
          {process.map((item, index) => (
            <div
              key={index}
              className="bg-slate-100 flex flex-col items-center rounded-xl p-6 shadow-md bg-opacity-95 text-center"
            >
              <h2 className="font-semibold text-2xl uppercase mb-2 sm:mb-4">
                {item.title}
              </h2>
              <p className="text-base">{item.description}</p>
            </div>
          ))}
        </div>
        <Button
          onClick={handleButtonClick}
          className=" bg-red-600 text-white hover:bg-red-700 font-medium uppercase text-lg"
        >
          Register Now
        </Button>
      </div>
    </section>
  );
}
