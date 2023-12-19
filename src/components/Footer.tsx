import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <footer className="bg-red-600">
      <div className="container flex justify-between md:w-[80%]  pt-5 pb-5 text-slate-100 text-center">
        <div className="">
          <p>
            Contact : <br /> 9851016192, 9851140335
          </p>
          <p>Tarakeshwor-8, Kathmandu</p>
          <p>Registration no.: 102718261</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>
            Director :
            <br /> Sharaswati Kafle
          </p>

          <p>
            Consultant :
            <br /> Harihar Kafle
          </p>
          <p>
            Legal Counsel :
            <br /> Ramesh Kafle
          </p>
          <p>
            Astrology Consultant :
            <br /> P. Narayan Ghimire
          </p>
        </div>
        <div>
          <p>Connect with us :</p>
          <span className="flex gap-5 justify-center mt-5">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61554507788198&mibextid=2JQ9oc"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              target="_blank"
              href="
https://mail.google.com/mail/?view=cm&fs=1&to=nimanandash@gmail.com"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </span>
        </div>
      </div>
      <p className="text-right pr-10 pb-5">
        &copy; 2023 Nimananda SH wedding centre.
      </p>
    </footer>
  );
}
