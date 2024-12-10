import Link from "next/link";
import FacebookIcon from "./Icons/Facebook";
import InstagramIcon from "./Icons/Instagram";
import YouTubeIcon from "./Icons/Youtube";
import cx from "classnames";

type SocialsProps = {
  socialsTitle: string;
  socials: { title: string; url: string }[];
  className?: string;
};

export default function Socials({
  socialsTitle,
  socials,
  className,
}: SocialsProps) {
  const getSocialIcon = (title: string) => {
    switch (title) {
      case "Facebook":
        return <FacebookIcon />;
      case "Instagram":
        return <InstagramIcon />;
      case "Youtube":
        return <YouTubeIcon />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cx(" justify-center items-center flex flex-col", className)}
    >
      <p className="text-sm font-semibold mx-auto">{socialsTitle}</p>
      <div className="flex gap-3 mt-3">
        {socials.map((social, index) => (
          <Link key={index} href={social.url} target="_blank">
            {getSocialIcon(social.title)}
          </Link>
        ))}
      </div>
    </div>
  );
}