import Section from "~/containers/Section";

const MediaSection = () => {
  return (
    <Section sectionId="media" className="py-20 bg-surface py-10 text-on-surface bg-hero">
      <div className="h-full w-full undefined">
        <div className="mx-auto h-full w-[90vw] max-w-[75rem] text-center ">
          <h1 className="title-1 text-center font-bold uppercase tracking-widest text-brown">
            Trailer
          </h1>
          <iframe
            src="https://www.youtube.com/embed/6YnxuDwMUlw?si=NFIDOkP44Mjt-JDv"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full shadow-md md:mb-14"
          />
        </div>
      </div>
    </Section>
  );
};

export default MediaSection;
