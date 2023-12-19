import NavBar from "../components/ui/NavBar";

export default function GoogleForm() {
  return (
    <>
      <NavBar />
      <div className="m-auto w-[640px]">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfVQzQ1kwhFkv7tThH0IEeSN7mR6oLFiQNe5Fj_MTMAgvp1Og/viewform?embedded=true"
          width="640"
          height="2632"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
}
