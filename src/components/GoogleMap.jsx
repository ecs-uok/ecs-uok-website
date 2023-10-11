export default function GoogleMap() {
  return (
    <div>
      <iframe
        className="rounded-xl mb-2 md:mb-0 border-2 md:border-4 border-primary w-80 h-80 md:w-[640px] md:h-[640px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.6962975440712!2d79.91465077732589!3d6.9722657739371545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259507b373883%3A0xcc2c463d17920fb9!2sA7%20Building!5e0!3m2!1sen!2slk!4v1692283526637!5m2!1sen!2slk"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
