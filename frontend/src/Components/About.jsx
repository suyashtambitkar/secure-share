import Navigation from "./Navigation";
const About = () => {
  return (
    <div className="mt-2">
      <Navigation />
      <div className="border-2 border-[#4b4d8f] bg-[#4b4d8f23] rounded-sm  max-w-6xl mx-4 md:mx-auto mt-5 md:mt-10 px-6 md:px-10 py-6 md:py-10">
        <h2 className="text-2xl font-semibold mb-6">About Us</h2>
        <h3 className="text-[18px] font-semibold">Your Privacy, Our Priority</h3>
        <p className="text-sm md:text-base mb-4">We believe in secure and private file sharing. All files you send through our platform are shared directly between you and the recipient.</p>
        <h3 className="text-[18px] font-semibold">No Storage, No Tracking</h3>
        <p className="text-sm md:text-base mb-4">We do not store your files, passwords, or personal data on our servers. Once your file is delivered, it's gone from our system forever.</p>
        <h3 className="text-[18px] font-semibold">Private Transfer</h3>
        <p className="text-sm md:text-base mb-4">Your files are transmitted securely, ensuring that only the person with your shared code can receive them.</p>
        <h3 className="text-[18px] font-semibold">Our Mission</h3>
        <p className="text-sm md:text-base mb-4">To make file sharing fast, private, and hassle-free — without compromising your privacy.</p>
      </div>
    </div>
  )
}

export default About;