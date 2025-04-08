function Essencia() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between w-full h-auto md:h-[80vh] pl-5 py-8">
      <div className="w-full h-auto md:w-1/2 md:h-full flex items-center justify-center">
        <img
          src={
            "https://res.cloudinary.com/dtpwzhjp9/image/upload/v1744128194/date_time_2_1_1c92f017e7.jpg"
          }
          alt="Essencia"
          className="w-full h-auto md:w-auto md:h-full object-contain rounded-2xl drop-shadow-md"
        />
      </div>
      <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col items-start justify-center p-5">
        <p className="text-base md:text-lg lg:text-xl font-bold text-black leading-relaxed text-left">
          ✨ Embark on The Discovery ✨ <br />
          <br />
          An evening of celebration, recognition, and new beginnings awaits!
          <br />
          <br />
          Join us as we set sail on Essencia ’24 — the Annual General Meeting
          and Award Ceremony of the Electronics and Computer Science Club of the
          University of Kelaniya. <br />
          <br />⚓ Date: April 09th, 2025 <br />⚓ Time: 5:00 PM <br />⚓ Venue:
          A7 406 <br />
          <br />
          Experience a journey through milestones achieved, stories shared, and
          individuals honored for their remarkable contributions. 🏆 <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default Essencia;
