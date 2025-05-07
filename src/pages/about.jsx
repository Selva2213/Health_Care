import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center mt-14 mb-8">
        <img
          draggable={false}
          className="w-[75vw]"
          src="./about.svg"
          alt="about"
        />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
