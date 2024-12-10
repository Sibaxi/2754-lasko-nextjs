import React from "react";

interface InstagramIconProps {
  className?: string;
}

const InstagramIcon: React.FC<InstagramIconProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.6638 3.88672C6.54754 3.88672 3.19922 7.23814 3.19922 11.3555V22.0221C3.19922 26.1384 6.55064 29.4867 10.668 29.4867H21.3346C25.4509 29.4867 28.7992 26.1353 28.7992 22.018V11.3513C28.7992 7.23504 25.4478 3.88672 21.3305 3.88672H10.6638ZM23.4659 8.15339C24.0547 8.15339 24.5326 8.63125 24.5326 9.22005C24.5326 9.80885 24.0547 10.2867 23.4659 10.2867C22.8771 10.2867 22.3992 9.80885 22.3992 9.22005C22.3992 8.63125 22.8771 8.15339 23.4659 8.15339ZM15.9992 10.2867C19.5288 10.2867 22.3992 13.1571 22.3992 16.6867C22.3992 20.2163 19.5288 23.0867 15.9992 23.0867C12.4696 23.0867 9.59922 20.2163 9.59922 16.6867C9.59922 13.1571 12.4696 10.2867 15.9992 10.2867ZM15.9992 12.4201C14.8676 12.4201 13.7824 12.8696 12.9822 13.6697C12.1821 14.4699 11.7326 15.5551 11.7326 16.6867C11.7326 17.8183 12.1821 18.9036 12.9822 19.7037C13.7824 20.5039 14.8676 20.9534 15.9992 20.9534C17.1308 20.9534 18.2161 20.5039 19.0162 19.7037C19.8164 18.9036 20.2659 17.8183 20.2659 16.6867C20.2659 15.5551 19.8164 14.4699 19.0162 13.6697C18.2161 12.8696 17.1308 12.4201 15.9992 12.4201Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default InstagramIcon;