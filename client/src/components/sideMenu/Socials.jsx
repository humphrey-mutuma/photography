import { Icon } from "@iconify/react";

const Socials = ({ socialMedia }) => {
  return (
    <footer className="w-full flex justify-center space-x-4 py-5">
      <a
        href={`https://web.facebook.com/${socialMedia?.facebook}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="w-6 h-6 shrink-0" icon="logos:facebook" />
      </a>{" "}
      <a
        href={`https://twitter.com/${socialMedia?.twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="w-6 h-6 shrink-0" icon="logos:twitter" />
      </a>
      <a
        href={`https://www.instagram.com/${socialMedia?.instagram}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="w-6 h-6 shrink-0" icon="akar-icons:instagram-fill" />
      </a>{" "}
    </footer>
  );
};

export default Socials;
