declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

import { useEffect } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import NavBar from "../components/ui/NavBar";
export default function AppLayout() {
  useEffect(() => {
    let closeBtn: HTMLElement | null = null;
    let modal: HTMLElement | null = null;

    const setupModal = () => {
      modal = document.querySelector(".modal") as HTMLElement | null;
      if (modal) {
        modal.style.display = "block";
        closeBtn = document.querySelector(".close") as HTMLElement | null;
        if (closeBtn) {
          closeBtn.addEventListener("click", () => {
            if (modal) {
              modal.style.display = "none";
            }
          });
        }
      }
    };

    const closeModal = (event: MouseEvent) => {
      if (modal && event.target === modal) {
        modal.style.display = "none";
      }
    };

    setupModal();

    window.addEventListener("click", closeModal);

    return () => {
      if (closeBtn) {
        closeBtn.removeEventListener("click", () => {});
      }
      window.removeEventListener("click", closeModal);
    };
  }, []);
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      const addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <div
          className="w-full mr-10 absolute z-20 text-right"
          id="google_translate_element"
        ></div>
      </header>
      <main>
        <div>
          <div className="modal">
            <div className="modal-content bg-white text-red-600 z-20">
              <span className="close text-black font-medium text-2xl -mr-10 -mt-10 cursor-pointer hover:text-red-600 flex justify-end ">
                &times;
              </span>
              <p className="font-medium mb-15">
                🎉 Hurry up! 50% discount as opening offer!! 🎉
              </p>
            </div>
          </div>
        </div>

        <Main />
      </main>
      <Footer />;
    </>
  );
}
