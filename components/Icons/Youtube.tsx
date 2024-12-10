import React from "react";

interface YouTubeIconProps {
  className?: string;
}

const YouTubeIcon: React.FC<YouTubeIconProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.7625 3.24707C3.9961 3.24707 2.5625 4.68067 2.5625 6.44707V26.9271C2.5625 28.6935 3.9961 30.1271 5.7625 30.1271H26.2425C28.0089 30.1271 29.4425 28.6935 29.4425 26.9271V6.44707C29.4425 4.68067 28.0089 3.24707 26.2425 3.24707H5.7625ZM9.6025 5.80707H11.1388L12.1625 8.36707L13.1862 5.80707H14.7225L12.8025 10.2871V12.8471H11.5225V10.2808C11.1385 9.25042 9.8649 6.45347 9.6025 5.80707ZM16.0025 7.72707C16.5721 7.72707 17.1353 7.89937 17.4937 8.33457C17.7689 8.64817 17.9225 9.15397 17.9225 9.81957V10.7546C17.9225 11.4202 17.795 11.881 17.5262 12.1946C17.1678 12.6234 16.5721 12.8471 16.0025 12.8471C15.4329 12.8471 14.8509 12.6234 14.4925 12.1946C14.2173 11.881 14.0825 11.4202 14.0825 10.7546V9.82582C14.0825 9.16022 14.2296 8.64817 14.5112 8.33457C14.8696 7.89937 15.3561 7.72707 16.0025 7.72707ZM18.5625 7.72707H19.8425V11.5671C19.8745 11.7399 20.0597 11.8171 20.2325 11.8171C20.4949 11.8171 20.8281 11.51 21.1225 11.1708V7.72707H22.4025V12.8471H21.1225V11.9633C20.6041 12.4689 20.1624 12.8475 19.58 12.8283C19.1576 12.8155 18.8634 12.6618 18.7162 12.3546C18.6266 12.1754 18.5625 11.887 18.5625 11.4646V7.72707ZM16.0025 8.76332C15.9145 8.76332 15.8302 8.78262 15.7537 8.81582C15.6772 8.84902 15.608 8.89662 15.55 8.95582C15.492 9.01502 15.445 9.08532 15.4125 9.16332C15.38 9.24132 15.3625 9.32747 15.3625 9.41707V11.2146C15.3625 11.3938 15.434 11.5574 15.55 11.6758C15.608 11.735 15.6772 11.7826 15.7537 11.8158C15.8302 11.849 15.9145 11.8683 16.0025 11.8683C16.0905 11.8683 16.1748 11.849 16.2512 11.8158C16.4808 11.7162 16.6425 11.4834 16.6425 11.2146V9.41707C16.6425 9.05867 16.3545 8.76332 16.0025 8.76332ZM15.9963 14.7671H16.0087C16.0087 14.7671 20.3028 14.7673 23.17 14.9721C23.5732 15.0169 24.4442 15.0233 25.225 15.8233C25.8394 16.4249 26.0375 17.8071 26.0375 17.8071C26.0375 17.8071 26.2425 18.7866 26.2425 20.4058V21.9221C26.2425 23.5413 26.0375 24.5208 26.0375 24.5208C26.0375 24.5208 25.8394 25.903 25.225 26.5046C24.4442 27.3046 23.5732 27.311 23.17 27.3558C20.3028 27.5606 16.0025 27.5671 16.0025 27.5671C16.0025 27.5671 10.6771 27.5157 9.03875 27.3621C8.58435 27.2789 7.5608 27.3044 6.78 26.5108C6.1656 25.9028 5.9675 24.5208 5.9675 24.5208C5.9675 24.5208 5.7625 23.5413 5.7625 21.9221V20.4058C5.7625 18.7866 5.9675 17.8071 5.9675 17.8071C5.9675 17.8071 6.1656 16.4249 6.78 15.8233C7.5608 15.0233 8.4318 15.0169 8.835 14.9721C11.7022 14.7673 15.9963 14.7671 15.9963 14.7671ZM7.6825 17.3271V18.5933H8.9625V25.0071H10.2425V18.5933H11.5225V17.3271H7.6825ZM16.0025 17.3271V25.0071H17.2825V24.2071C17.6863 24.7069 18.2124 25.0071 18.6425 25.0071C19.1238 25.0071 19.5437 24.7481 19.705 24.2521C19.7812 23.9839 19.8374 23.7335 19.8425 23.1671V21.4071C19.8425 20.7747 19.7569 20.2984 19.6763 20.0296C19.515 19.5297 19.1244 19.2503 18.6425 19.2471C18.0153 19.2426 17.7625 19.5671 17.2825 20.1271V17.3271H16.0025ZM11.5225 19.2471V23.5258C11.5225 23.9879 11.5868 24.2979 11.67 24.5008C11.8108 24.8298 12.0979 25.0071 12.5075 25.0071C12.9747 25.0071 13.5769 24.678 14.0825 24.1333V25.0071H15.3625V19.2471H14.0825V23.2596C13.8009 23.6333 13.391 23.9121 13.135 23.9121C12.9686 23.9121 12.8345 23.842 12.8025 23.6583V19.2471H11.5225ZM22.4212 19.2471C21.7761 19.2471 21.2723 19.45 20.9075 19.8333C20.6387 20.1162 20.4825 20.5786 20.4825 21.1783V23.1408C20.4825 23.7367 20.6543 24.1536 20.9225 24.4333C21.2879 24.8167 21.7908 25.0071 22.4513 25.0071C23.1111 25.0071 23.6306 24.8066 23.98 24.3996C24.1336 24.2197 24.2321 24.0174 24.275 23.7921C24.2865 23.6903 24.3225 23.4141 24.3225 23.0871H23.0425V23.5983C23.0425 23.8953 22.7558 24.1358 22.4025 24.1358C22.0492 24.1358 21.7625 23.8946 21.7625 23.5983V22.4471H24.3225V22.0783V21.1533C24.3225 20.5549 24.1756 20.1168 23.9112 19.8333C23.5573 19.45 23.0548 19.2471 22.4212 19.2471ZM22.4025 20.1733C22.7558 20.1733 23.0425 20.4145 23.0425 20.7108V21.5608H21.7625V20.7108C21.7625 20.4139 22.0492 20.1733 22.4025 20.1733ZM18.0637 20.3646C18.4125 20.3646 18.5625 20.5789 18.5625 21.2471V23.0071C18.5625 23.6752 18.4125 23.9058 18.0637 23.9058C17.8647 23.9058 17.4847 23.7693 17.2825 23.5671V20.7671C17.4847 20.5674 17.8647 20.3646 18.0637 20.3646Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default YouTubeIcon;