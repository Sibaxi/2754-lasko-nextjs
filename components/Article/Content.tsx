import { isExternalLink } from "@/helpers/general";
import cx from "classnames";
import Link from "next/link";
import ArrowDiagonalIcon from "../Icons/ArrowDiagonal";

export type ContentProps = {
  title: string | null;
  variant: {
    value: string;
  };
  asset: { permalink: string } | null;
  content_field: (Cta | Text)[];
};

type Text = {
  text: string;
  type: "text";
};

type Cta = {
  link: string;
  asset?: { permalink: string };
  title: string;
  type: "cta";
};

export default function Content({
  title,
  asset,
  variant,
  content_field,
}: ContentProps) {
  return (
    <div className={cx("grid py-20 gap-10", asset ? "grid-cols-2" : "")}>
      <div className={cx("px-6", variant?.value === "left" ? "order-2" : "")}>
        <h2 className="text-green-800 font-black font-neutraface">{title}</h2>
        <div className="mt-4">
          {content_field.map((item, i) => {
            if (item.type === "text") {
              return (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                  className="content"
                ></div>
              );
            } else if (item.type === "cta") {
              <Link
                href={item.link}
                className="inline-flex py-3 px-4 gap-4 shadow-small-card"
              >
                {item.asset && (
                  <img
                    src={item.asset.permalink}
                    alt="content"
                    className="size-10 object-contain rounded-lg overflow-clip"
                  />
                )}
                <span className="text-xl font-semibold leading-[1.4] text-black">
                  {item.title}
                </span>
                {isExternalLink(item.link) && (
                  <ArrowDiagonalIcon className="size-6 text-black" />
                )}
              </Link>;
            }
          })}
        </div>
      </div>
      {asset && (
        <img
          src={asset.permalink}
          alt="content"
          className={cx(
            " rounded-2xl",
            variant?.value === "left" ? "order-1" : ""
          )}
        />
      )}
    </div>
  );
}
