import { Cormorant } from "next/font/google";
import { useEffect, useState } from "react";

const cormorant = Cormorant({ subsets: ["latin"] });

export default function NavMenu() {
  const [menu, setMenu] = useState("home");

  const handleScroll = () => {
    const position = window.scrollY;    

    if (position < 844) {
      setMenu("home");
      return;
    }

    if (position < 2104) {
      setMenu("brides");
      return;
    }

    if (position < 3027) {
      setMenu("dates");
      return;
    }

    if (position < 4054) {
      setMenu("gallery");
      return;
    }

    setMenu("others");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed z-40 w-full bottom-0 right-0 left-0 p-2 transition ${
        menu === "home" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={` bg-primary-400 shadow shadow-black-900/20 h-full flex justify-evenly rounded-lg ${cormorant.className}`}
      >
        {/* HOME */}
        <a
          href="#cover"
          onClick={() => setMenu("home")}
          className="flex flex-col items-center justify-center"
        >
          <svg
            className={`stroke-1 transition mt-1 ${
              menu === "home" ? "stroke-primary-900" : "stroke-white"
            }`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.31645 0.957031C8.95707 1.03516 8.52348 1.21484 8.2227 1.41406C7.93754 1.60156 0.957074 7.43359 0.593793 7.78516C0.328168 8.04297 0.0976991 8.50391 0.0312929 8.89844C-0.144488 9.95312 0.597699 11.0117 1.65629 11.2109L1.91411 11.2578V14.2734C1.91411 17.5938 1.91411 17.5586 2.1602 18.0234C2.32426 18.3398 2.69536 18.7109 3.00004 18.8633C3.4727 19.1016 3.46098 19.1016 6.02348 19.1016H8.35551L8.36723 16.3789L8.37895 13.6523L8.50395 13.3867C8.81645 12.7266 9.52348 12.3398 10.2266 12.4492C10.8907 12.5508 11.4141 13.0156 11.5782 13.6523C11.6329 13.8516 11.6407 14.2617 11.6407 16.4922V19.1016H13.9961C16.5508 19.1016 16.543 19.1016 16.9883 18.8789C17.3164 18.7148 17.6954 18.3203 17.8633 17.9688C17.9375 17.8086 18.0196 17.5703 18.043 17.4453C18.0704 17.293 18.086 16.1914 18.086 14.2383V11.2656L18.3321 11.2188C18.8555 11.1211 19.4414 10.7148 19.6993 10.2695C20.1758 9.45312 20.0586 8.47266 19.4063 7.79688C19.0821 7.46094 12.1329 1.64453 11.7774 1.41406C11.461 1.20703 11.0547 1.03906 10.6641 0.957031C10.3282 0.886719 9.63676 0.886719 9.31645 0.957031ZM10.7813 1.78906C10.9219 1.83594 11.1446 1.9375 11.2774 2.01953C11.6094 2.21875 18.8516 8.30078 18.9922 8.49219C19.336 8.96484 19.2618 9.68359 18.8282 10.1172C18.5625 10.3828 18.3829 10.4453 17.8047 10.4609L17.3047 10.4766L17.2969 13.9219L17.2852 17.3633L17.1563 17.625C17.0039 17.9336 16.793 18.1289 16.4961 18.2422C16.2969 18.3164 16.1914 18.3203 14.3555 18.3203H12.4258L12.4102 15.9492C12.3985 13.3633 12.4063 13.4883 12.168 12.9961C11.7461 12.1406 10.8008 11.5898 9.85161 11.6562C9.45707 11.6797 8.96879 11.8398 8.6602 12.0469C8.35161 12.2539 8.00395 12.6445 7.83989 12.9766C7.57426 13.5 7.57817 13.4766 7.57817 16.0234V18.3242L5.57817 18.3125L3.57426 18.3008L3.40629 18.2109C3.14848 18.0742 2.94145 17.8672 2.82426 17.625L2.71489 17.4023L2.70317 13.9375L2.69536 10.4766L2.19536 10.4609C1.61723 10.4453 1.43754 10.3828 1.17192 10.1172C0.750043 9.69531 0.668012 9.02734 0.976605 8.54297C1.05473 8.41797 2.08598 7.53125 4.67582 5.36328C6.64848 3.71094 8.35942 2.28125 8.47661 2.1875C8.7227 1.99609 9.08598 1.82031 9.40629 1.73828C9.73442 1.65625 10.4532 1.68359 10.7813 1.78906Z" />
          </svg>
          <p
            className={`text-xs ${
              menu === "home" ? "text-primary-900" : "text-white"
            }`}
          >
            Home
          </p>
        </a>
        <a
          href="#brides"
          onClick={() => setMenu("brides")}
          className="flex flex-col items-center justify-center"
        >
          <svg
            className={`mt-1 transition ${
              menu === "brides"
                ? "stroke-primary-900 fill-primary-900"
                : "stroke-white fill-white"
            }`}
            width="20"
            height="22"
            viewBox="0 0 20 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.4741 0.493924C12.4655 0.491128 12.4569 0.488441 12.4482 0.485862C12.2583 0.428123 12.0453 0.40567 11.8117 0.490488C11.682 0.537614 11.5653 0.611687 11.4583 0.695486C11.4579 0.695847 11.4574 0.696208 11.4569 0.69657C11.4045 0.737696 11.3544 0.781142 11.3063 0.824879C11.3001 0.830525 11.2939 0.836176 11.2877 0.841828C11.2753 0.853127 11.2636 0.863627 11.2527 0.873396C11.25 0.870854 11.2472 0.868261 11.2444 0.865615C11.2236 0.845448 11.2023 0.825521 11.1808 0.80604C11.1456 0.774122 11.11 0.743403 11.0752 0.714796L12.4741 0.493924ZM12.4741 0.493924C12.4742 0.49393 12.4742 0.493937 12.4742 0.493944L12.3589 0.885933C12.3496 0.883205 12.3404 0.880642 12.3312 0.878246M11.625 1.21094C11.2812 1.52344 11.2109 1.52344 10.8984 1.22656L10.9593 1.16378L11.207 1.40202L11.5485 1.1374L11.5537 1.13335L11.625 1.21094ZM11.625 1.21094L11.5541 1.133L11.7047 1.0163L11.712 1.01067L11.7119 1.0106C11.895 0.863232 12.0983 0.817802 12.33 0.877936L12.3047 0.964844M11.625 1.21094C11.9141 0.945312 12.0625 0.890625 12.3047 0.964844M12.3047 0.964844L12.3312 0.878246M12.3047 0.964844C12.5859 1.04688 12.75 1.36328 12.6602 1.64062L12.3312 0.878246" />
            <path d="M9.21877 3.95706C9.11721 4.16409 8.02346 5.25003 7.87893 5.28518C7.8487 5.29302 7.8208 5.29829 7.79329 5.29968L7.86488 5.231L7.86558 5.23032L8.10007 5.00537L8.58054 4.54443L8.58147 4.54354C8.78974 4.3427 8.93861 4.19738 9.029 4.08303C9.06567 4.03664 9.10401 3.98182 9.13591 3.91708L9.21877 3.95706ZM9.21877 3.95706L9.13617 3.91654C9.1482 3.89208 9.1593 3.86621 9.16905 3.83884C9.20669 3.73314 9.21096 3.64153 9.21096 3.58206C9.21096 3.23675 9.00891 2.95769 8.72119 2.83743L8.76174 2.73831M9.21877 3.95706C9.43362 3.51174 9.21487 2.92971 8.76174 2.73831M8.76174 2.73831L8.72007 2.83696C8.62135 2.79587 8.51259 2.77346 8.39846 2.77346C8.19697 2.77346 8.04208 2.84479 7.91279 2.93825C7.91219 2.93868 7.91158 2.93912 7.91098 2.93956C7.86021 2.97641 7.81339 3.01664 7.76923 3.05727C7.70782 3.00244 7.63744 2.94728 7.55836 2.90004L8.76174 2.73831ZM6.89455 3.37112L6.82804 3.30316C6.86219 3.2642 6.9039 3.23146 6.95175 3.20751C6.95742 3.20609 6.96952 3.20345 6.98998 3.20097C7.02631 3.19656 7.07901 3.19377 7.15391 3.19508C7.25751 3.20066 7.28637 3.20671 7.29565 3.20922C7.29577 3.20925 7.29588 3.20928 7.29598 3.20931C7.29688 3.20954 7.29726 3.20965 7.29966 3.21082C7.30403 3.21294 7.31487 3.21867 7.33748 3.23348C7.3748 3.25834 7.41728 3.28622 7.45804 3.30943C7.47802 3.3208 7.50824 3.3374 7.5463 3.35339C7.54661 3.35352 7.54691 3.35364 7.54722 3.35377C7.57938 3.36722 7.61709 3.3802 7.6589 3.38921C7.69528 3.39704 7.73231 3.40141 7.76955 3.40212C7.8456 3.40357 7.92255 3.38975 7.99663 3.35894L8.08198 3.44917L7.99672 3.3589C8.00049 3.35733 8.00424 3.35572 8.00799 3.35407C8.09423 3.31601 8.15548 3.26231 8.17534 3.2449C8.1759 3.2444 8.17643 3.24394 8.17693 3.2435L8.17893 3.24175C8.18233 3.23979 8.19248 3.23418 8.21168 3.22685C8.24569 3.21386 8.2924 3.20158 8.3469 3.19403C8.36429 3.19163 8.38155 3.18983 8.39846 3.18861C8.4342 3.18604 8.46836 3.18606 8.49882 3.18836C8.52086 3.19003 8.5387 3.19272 8.55215 3.19558C8.55876 3.19699 8.56379 3.19832 8.56734 3.19939C8.56907 3.19991 8.57034 3.20033 8.57117 3.20062C8.70874 3.2611 8.80057 3.42481 8.80198 3.58206C8.80241 3.63081 8.79416 3.67894 8.77587 3.72318L7.27737 4.16018M6.89455 3.37112C7.0508 3.21096 7.23049 3.23831 7.45705 3.44924C7.59768 3.58206 7.6758 3.62503 7.76955 3.62503C7.8633 3.62503 7.94143 3.58206 8.08205 3.44924C8.22658 3.31253 8.3008 3.27346 8.39846 3.27346C8.57815 3.27346 8.71096 3.40237 8.71096 3.58206C8.71096 3.71096 8.6719 3.76174 8.2344 4.18362L7.75393 4.64456L7.27737 4.16018M6.89455 3.37112C6.71096 3.55081 6.75002 3.63284 7.27737 4.16018M6.89455 3.37112L6.82659 3.30482L7.27737 4.16018M7.1719 2.69534L7.16802 2.77033C7.03213 2.75995 6.90806 2.78595 6.7986 2.83562L7.1719 2.69534ZM7.1719 2.69534C7.39846 2.70706 7.47659 2.72659 7.6133 2.81643L7.55779 2.8997L7.1719 2.69534Z" />
            <mask id="path-3-inside-1_123_144" fill="white">
              <path d="M2.92967 3.76951C2.70311 3.83982 2.49998 4.10154 2.0742 4.85545C1.96482 5.04686 1.86326 5.23436 1.84373 5.26561C1.81248 5.31248 1.75389 5.28514 1.51951 5.10154C1.15623 4.8242 1.05857 4.78123 0.8867 4.81248C0.640606 4.85936 0.562481 4.96092 0.414044 5.41795C0.335919 5.65232 0.23045 6.06248 0.179669 6.32811C-0.195331 8.18357 0.0390437 9.62107 0.882794 10.6914C1.37889 11.3164 1.99607 11.7226 2.98826 12.0781C3.05857 12.1054 3.05076 12.1211 2.89842 12.25C2.7617 12.3711 2.73436 12.4179 2.73436 12.5351C2.73436 12.625 2.7617 12.6992 2.81248 12.7461C2.94529 12.8633 3.09764 12.8359 3.34373 12.6445C4.15623 12.0195 4.18748 11.8008 3.49607 11.6172C2.83592 11.4414 2.25779 11.1601 1.81639 10.8086C0.632794 9.85545 0.289044 8.12889 0.863262 5.96873C0.929669 5.72264 0.988262 5.5117 0.999981 5.49217C1.00779 5.47654 1.17186 5.5742 1.35936 5.71092C2.10936 6.24998 3.41404 7.02342 3.56639 7.02342C3.80467 7.02342 3.92186 6.69139 3.74217 6.52732C3.69139 6.48436 3.35936 6.27732 2.99998 6.06248C2.6367 5.85154 2.34373 5.66014 2.34373 5.6367C2.34764 5.52732 2.97654 4.44529 3.03514 4.44529C3.05467 4.44529 3.11717 4.51951 3.17967 4.60545C3.35936 4.85936 3.85936 5.44139 4.37889 6.00389C5.05467 6.72654 5.21873 6.92967 5.37889 7.21092C5.59764 7.60154 5.70701 7.99607 5.73045 8.48045C5.76951 9.23045 5.59373 10.0078 5.53123 9.35936C5.47654 8.78123 5.28123 8.19529 4.97264 7.69529C4.73826 7.31639 4.60936 7.25389 4.39842 7.41795C4.2617 7.52342 4.26561 7.68748 4.41014 7.89451C4.64842 8.24607 4.83592 8.72264 4.91795 9.18748C4.94139 9.31639 4.96092 9.66795 4.96092 9.97264C4.96092 10.5703 4.98826 10.664 5.17576 10.7109C5.36326 10.7578 5.37108 10.7539 6.12498 9.87107C6.98826 8.85936 7.06248 8.80467 7.59764 8.80467C7.96483 8.80467 8.18357 8.89451 8.43357 9.1367C8.70311 9.39451 8.76951 9.56639 8.76951 9.99217C8.76951 10.3203 8.75779 10.3867 8.66404 10.5586C8.60936 10.664 8.5117 10.9023 8.45311 11.0859C8.17186 11.9726 7.66014 12.7148 7.00779 13.1797C6.28904 13.6914 5.28514 13.9453 4.23436 13.8828C3.65623 13.8437 3.66404 13.8398 3.52342 14.5039L3.41795 15.0117L3.10936 15.0234C2.54295 15.0429 1.95311 14.8242 1.66404 14.4804C1.53904 14.3359 1.39061 14.0234 1.35545 13.8359C1.33201 13.7187 1.33982 13.7109 1.47264 13.6836C1.72264 13.6367 2.03123 13.5039 2.0742 13.4258C2.14061 13.2969 2.10154 13.1133 1.98436 13.0273L1.87498 12.9453L1.61326 13.0312C1.46482 13.0781 1.29686 13.125 1.23045 13.1406C1.00389 13.1836 0.898419 13.2461 0.820294 13.3711C0.60545 13.7187 0.890606 14.5664 1.37498 15.0117C1.80857 15.414 2.24217 15.5703 3.02732 15.6054C3.79686 15.6367 3.89451 15.5781 4.02733 14.9648C4.06639 14.7773 4.10936 14.5859 4.11717 14.5429C4.1367 14.4726 4.16404 14.4648 4.42186 14.4765C4.75779 14.4922 5.45311 14.4258 5.80467 14.3437C7.34373 13.9883 8.48045 12.9062 9.00779 11.2929C9.21092 10.6758 9.1992 10.6875 9.62889 10.5156L9.99998 10.3711L10.3711 10.5156C10.7929 10.6836 10.789 10.6758 10.9961 11.3047C11.3242 12.2969 11.9179 13.1367 12.6758 13.6719C13.0117 13.9101 13.3633 14.0937 13.4883 14.0937C13.625 14.0937 13.75 13.957 13.75 13.8008C13.75 13.6445 13.6875 13.5781 13.4219 13.4414C12.5664 13.0117 11.8906 12.164 11.5469 11.0859C11.4883 10.9023 11.3906 10.664 11.3359 10.5586C11.2422 10.3867 11.2304 10.3203 11.2304 9.99217C11.2304 9.56639 11.2969 9.39451 11.5664 9.1367C11.8164 8.89451 12.0351 8.80467 12.4023 8.80467C12.9179 8.80467 13.0664 8.90232 13.6758 9.64061C14.1719 10.2422 14.5273 10.6289 14.6328 10.6875C14.6836 10.7148 14.7695 10.7265 14.8242 10.7109C15.0117 10.664 15.039 10.5703 15.039 9.96092C15.039 8.55076 15.5117 7.66014 16.6054 6.99217C18.0117 6.1367 18.3359 5.93357 18.6406 5.71092C18.8281 5.5742 18.9883 5.47654 19 5.49217C19.0117 5.50779 19.0703 5.72264 19.1367 5.96873C19.7109 8.1367 19.3711 9.85154 18.1719 10.8164C17.8125 11.1054 17.1367 11.4414 16.6406 11.5742C16.1484 11.7109 16.1015 11.7304 16.0508 11.8437C15.9726 12.0117 16.039 12.1289 16.3906 12.4258C17.1367 13.0586 17.9687 13.5586 18.4531 13.6679C18.6992 13.7226 18.6953 13.7148 18.5508 14.1172C18.3398 14.6836 17.6679 15.0508 16.8906 15.0234L16.582 15.0117L16.4765 14.5039C16.4023 14.1484 16.3476 13.9765 16.2969 13.9336C16.2344 13.8867 16.0937 13.875 15.457 13.8789C14.5859 13.8789 14.5312 13.8984 14.5312 14.1523C14.5312 14.3711 14.6328 14.4336 15.0547 14.4648C15.2539 14.4804 15.5156 14.4844 15.6367 14.4804C15.8359 14.4648 15.8633 14.4726 15.8828 14.5429C15.8906 14.5859 15.9336 14.7773 15.9726 14.9648C16.1054 15.5781 16.2031 15.6367 16.9726 15.6054C17.7578 15.5703 18.1914 15.414 18.625 15.0117C19.0898 14.582 19.3906 13.7265 19.1953 13.3945C19.1094 13.2461 19.0273 13.2031 18.6875 13.1172C18.5273 13.0742 18.2812 12.9883 18.1406 12.9219C17.8789 12.7969 17.3086 12.4258 17.0742 12.2265L16.9414 12.1133L17.3086 11.9726C18.9883 11.3203 19.8984 10.0312 19.9844 8.17576C20.0234 7.35154 19.8789 6.34764 19.5898 5.43357C19.4414 4.95701 19.3633 4.85936 19.1133 4.81248C18.9414 4.78123 18.8437 4.8242 18.4804 5.10154C18.2461 5.28514 18.1875 5.31248 18.1562 5.26561C18.1367 5.23436 18.0351 5.04686 17.9258 4.85545C17.6601 4.3867 17.3242 3.89061 17.2383 3.83592C17.1015 3.74998 16.9258 3.73436 16.7851 3.79295C16.6914 3.83201 16.5781 3.9492 16.4219 4.16014C16.1094 4.58592 15.7344 5.02342 15.0195 5.79295C14.6836 6.15623 14.3203 6.58982 14.2148 6.74998C13.8906 7.23826 13.6719 7.93748 13.6719 8.46482V8.6992L13.4531 8.54686C12.8867 8.15232 12.2187 8.09373 11.6094 8.39451C11.3008 8.54686 10.9804 8.85545 10.832 9.14842C10.7187 9.37498 10.7109 9.37889 10.3594 9.52732L9.99998 9.67576L9.64061 9.52342C9.28514 9.37498 9.28123 9.37107 9.16795 9.14842C9.01951 8.85545 8.6992 8.54686 8.39061 8.39451C7.78123 8.09373 7.11326 8.15232 6.54686 8.54686L6.32811 8.6992V8.46482C6.32811 7.93748 6.10936 7.23826 5.78514 6.74998C5.67967 6.58982 5.31639 6.15623 4.98045 5.79295C4.26561 5.02342 3.89061 4.58592 3.57811 4.16014C3.31639 3.80467 3.14061 3.6992 2.92967 3.76951ZM17.1367 4.66795C17.3125 4.94139 17.6562 5.58201 17.6562 5.6367C17.6562 5.66014 17.375 5.84373 17.0312 6.04686C16.0664 6.61717 15.8242 6.78514 15.5234 7.08201C14.9179 7.67576 14.5508 8.47654 14.4687 9.37107C14.4062 10.0117 14.2304 9.22264 14.2695 8.48045C14.2929 7.99607 14.4023 7.60154 14.6211 7.21092C14.7812 6.92967 14.9453 6.72654 15.6211 6.00389C16.1406 5.44139 16.6406 4.85936 16.8203 4.60545C16.8828 4.51951 16.9453 4.44529 16.9648 4.44529C16.9804 4.44529 17.0586 4.54686 17.1367 4.66795Z" />
            </mask>
            <path
              d="M2.92967 3.76951C2.70311 3.83982 2.49998 4.10154 2.0742 4.85545C1.96482 5.04686 1.86326 5.23436 1.84373 5.26561C1.81248 5.31248 1.75389 5.28514 1.51951 5.10154C1.15623 4.8242 1.05857 4.78123 0.8867 4.81248C0.640606 4.85936 0.562481 4.96092 0.414044 5.41795C0.335919 5.65232 0.23045 6.06248 0.179669 6.32811C-0.195331 8.18357 0.0390437 9.62107 0.882794 10.6914C1.37889 11.3164 1.99607 11.7226 2.98826 12.0781C3.05857 12.1054 3.05076 12.1211 2.89842 12.25C2.7617 12.3711 2.73436 12.4179 2.73436 12.5351C2.73436 12.625 2.7617 12.6992 2.81248 12.7461C2.94529 12.8633 3.09764 12.8359 3.34373 12.6445C4.15623 12.0195 4.18748 11.8008 3.49607 11.6172C2.83592 11.4414 2.25779 11.1601 1.81639 10.8086C0.632794 9.85545 0.289044 8.12889 0.863262 5.96873C0.929669 5.72264 0.988262 5.5117 0.999981 5.49217C1.00779 5.47654 1.17186 5.5742 1.35936 5.71092C2.10936 6.24998 3.41404 7.02342 3.56639 7.02342C3.80467 7.02342 3.92186 6.69139 3.74217 6.52732C3.69139 6.48436 3.35936 6.27732 2.99998 6.06248C2.6367 5.85154 2.34373 5.66014 2.34373 5.6367C2.34764 5.52732 2.97654 4.44529 3.03514 4.44529C3.05467 4.44529 3.11717 4.51951 3.17967 4.60545C3.35936 4.85936 3.85936 5.44139 4.37889 6.00389C5.05467 6.72654 5.21873 6.92967 5.37889 7.21092C5.59764 7.60154 5.70701 7.99607 5.73045 8.48045C5.76951 9.23045 5.59373 10.0078 5.53123 9.35936C5.47654 8.78123 5.28123 8.19529 4.97264 7.69529C4.73826 7.31639 4.60936 7.25389 4.39842 7.41795C4.2617 7.52342 4.26561 7.68748 4.41014 7.89451C4.64842 8.24607 4.83592 8.72264 4.91795 9.18748C4.94139 9.31639 4.96092 9.66795 4.96092 9.97264C4.96092 10.5703 4.98826 10.664 5.17576 10.7109C5.36326 10.7578 5.37108 10.7539 6.12498 9.87107C6.98826 8.85936 7.06248 8.80467 7.59764 8.80467C7.96483 8.80467 8.18357 8.89451 8.43357 9.1367C8.70311 9.39451 8.76951 9.56639 8.76951 9.99217C8.76951 10.3203 8.75779 10.3867 8.66404 10.5586C8.60936 10.664 8.5117 10.9023 8.45311 11.0859C8.17186 11.9726 7.66014 12.7148 7.00779 13.1797C6.28904 13.6914 5.28514 13.9453 4.23436 13.8828C3.65623 13.8437 3.66404 13.8398 3.52342 14.5039L3.41795 15.0117L3.10936 15.0234C2.54295 15.0429 1.95311 14.8242 1.66404 14.4804C1.53904 14.3359 1.39061 14.0234 1.35545 13.8359C1.33201 13.7187 1.33982 13.7109 1.47264 13.6836C1.72264 13.6367 2.03123 13.5039 2.0742 13.4258C2.14061 13.2969 2.10154 13.1133 1.98436 13.0273L1.87498 12.9453L1.61326 13.0312C1.46482 13.0781 1.29686 13.125 1.23045 13.1406C1.00389 13.1836 0.898419 13.2461 0.820294 13.3711C0.60545 13.7187 0.890606 14.5664 1.37498 15.0117C1.80857 15.414 2.24217 15.5703 3.02732 15.6054C3.79686 15.6367 3.89451 15.5781 4.02733 14.9648C4.06639 14.7773 4.10936 14.5859 4.11717 14.5429C4.1367 14.4726 4.16404 14.4648 4.42186 14.4765C4.75779 14.4922 5.45311 14.4258 5.80467 14.3437C7.34373 13.9883 8.48045 12.9062 9.00779 11.2929C9.21092 10.6758 9.1992 10.6875 9.62889 10.5156L9.99998 10.3711L10.3711 10.5156C10.7929 10.6836 10.789 10.6758 10.9961 11.3047C11.3242 12.2969 11.9179 13.1367 12.6758 13.6719C13.0117 13.9101 13.3633 14.0937 13.4883 14.0937C13.625 14.0937 13.75 13.957 13.75 13.8008C13.75 13.6445 13.6875 13.5781 13.4219 13.4414C12.5664 13.0117 11.8906 12.164 11.5469 11.0859C11.4883 10.9023 11.3906 10.664 11.3359 10.5586C11.2422 10.3867 11.2304 10.3203 11.2304 9.99217C11.2304 9.56639 11.2969 9.39451 11.5664 9.1367C11.8164 8.89451 12.0351 8.80467 12.4023 8.80467C12.9179 8.80467 13.0664 8.90232 13.6758 9.64061C14.1719 10.2422 14.5273 10.6289 14.6328 10.6875C14.6836 10.7148 14.7695 10.7265 14.8242 10.7109C15.0117 10.664 15.039 10.5703 15.039 9.96092C15.039 8.55076 15.5117 7.66014 16.6054 6.99217C18.0117 6.1367 18.3359 5.93357 18.6406 5.71092C18.8281 5.5742 18.9883 5.47654 19 5.49217C19.0117 5.50779 19.0703 5.72264 19.1367 5.96873C19.7109 8.1367 19.3711 9.85154 18.1719 10.8164C17.8125 11.1054 17.1367 11.4414 16.6406 11.5742C16.1484 11.7109 16.1015 11.7304 16.0508 11.8437C15.9726 12.0117 16.039 12.1289 16.3906 12.4258C17.1367 13.0586 17.9687 13.5586 18.4531 13.6679C18.6992 13.7226 18.6953 13.7148 18.5508 14.1172C18.3398 14.6836 17.6679 15.0508 16.8906 15.0234L16.582 15.0117L16.4765 14.5039C16.4023 14.1484 16.3476 13.9765 16.2969 13.9336C16.2344 13.8867 16.0937 13.875 15.457 13.8789C14.5859 13.8789 14.5312 13.8984 14.5312 14.1523C14.5312 14.3711 14.6328 14.4336 15.0547 14.4648C15.2539 14.4804 15.5156 14.4844 15.6367 14.4804C15.8359 14.4648 15.8633 14.4726 15.8828 14.5429C15.8906 14.5859 15.9336 14.7773 15.9726 14.9648C16.1054 15.5781 16.2031 15.6367 16.9726 15.6054C17.7578 15.5703 18.1914 15.414 18.625 15.0117C19.0898 14.582 19.3906 13.7265 19.1953 13.3945C19.1094 13.2461 19.0273 13.2031 18.6875 13.1172C18.5273 13.0742 18.2812 12.9883 18.1406 12.9219C17.8789 12.7969 17.3086 12.4258 17.0742 12.2265L16.9414 12.1133L17.3086 11.9726C18.9883 11.3203 19.8984 10.0312 19.9844 8.17576C20.0234 7.35154 19.8789 6.34764 19.5898 5.43357C19.4414 4.95701 19.3633 4.85936 19.1133 4.81248C18.9414 4.78123 18.8437 4.8242 18.4804 5.10154C18.2461 5.28514 18.1875 5.31248 18.1562 5.26561C18.1367 5.23436 18.0351 5.04686 17.9258 4.85545C17.6601 4.3867 17.3242 3.89061 17.2383 3.83592C17.1015 3.74998 16.9258 3.73436 16.7851 3.79295C16.6914 3.83201 16.5781 3.9492 16.4219 4.16014C16.1094 4.58592 15.7344 5.02342 15.0195 5.79295C14.6836 6.15623 14.3203 6.58982 14.2148 6.74998C13.8906 7.23826 13.6719 7.93748 13.6719 8.46482V8.6992L13.4531 8.54686C12.8867 8.15232 12.2187 8.09373 11.6094 8.39451C11.3008 8.54686 10.9804 8.85545 10.832 9.14842C10.7187 9.37498 10.7109 9.37889 10.3594 9.52732L9.99998 9.67576L9.64061 9.52342C9.28514 9.37498 9.28123 9.37107 9.16795 9.14842C9.01951 8.85545 8.6992 8.54686 8.39061 8.39451C7.78123 8.09373 7.11326 8.15232 6.54686 8.54686L6.32811 8.6992V8.46482C6.32811 7.93748 6.10936 7.23826 5.78514 6.74998C5.67967 6.58982 5.31639 6.15623 4.98045 5.79295C4.26561 5.02342 3.89061 4.58592 3.57811 4.16014C3.31639 3.80467 3.14061 3.6992 2.92967 3.76951ZM17.1367 4.66795C17.3125 4.94139 17.6562 5.58201 17.6562 5.6367C17.6562 5.66014 17.375 5.84373 17.0312 6.04686C16.0664 6.61717 15.8242 6.78514 15.5234 7.08201C14.9179 7.67576 14.5508 8.47654 14.4687 9.37107C14.4062 10.0117 14.2304 9.22264 14.2695 8.48045C14.2929 7.99607 14.4023 7.60154 14.6211 7.21092C14.7812 6.92967 14.9453 6.72654 15.6211 6.00389C16.1406 5.44139 16.6406 4.85936 16.8203 4.60545C16.8828 4.51951 16.9453 4.44529 16.9648 4.44529C16.9804 4.44529 17.0586 4.54686 17.1367 4.66795Z"
              strokeWidth="2"
              mask="url(#path-3-inside-1_123_144)"
            />
            <path d="M11.2425 6.5976L11.6294 6.75881C11.5997 6.83008 11.5565 6.8855 11.5464 6.89835C11.5459 6.89899 11.5455 6.89953 11.5452 6.89996C11.5266 6.92393 11.5061 6.94808 11.487 6.96992C11.448 7.01435 11.3985 7.06745 11.3441 7.12413C11.2344 7.23846 11.0914 7.38138 10.9424 7.52637L10.9424 7.52637L10.9406 7.52818L10.8782 7.58823L10.878 7.58838L10.4093 8.0399L10.0894 8.34802C10.2473 8.32801 10.4368 8.15908 10.9452 7.65635C11.6874 6.92588 11.7968 6.75791 11.7968 6.40244M11.2425 6.5976C11.2417 6.59891 11.2408 6.60024 11.2399 6.60158M11.2425 6.5976L11.1679 6.5665L11.2399 6.60158M11.2425 6.5976C11.2736 6.54986 11.283 6.52372 11.287 6.50935C11.2917 6.49282 11.2967 6.46632 11.2968 6.40488C11.2952 6.27395 11.2676 6.18948 11.2333 6.1309C11.2181 6.10482 11.1982 6.07815 11.1715 6.05133M11.2399 6.60158L11.6174 6.78549C11.678 6.66111 11.7083 6.5314 11.7102 6.40327L11.7968 6.40244M11.2399 6.60158C11.2383 6.60394 11.2367 6.60634 11.2351 6.6088C11.1532 6.73002 10.9937 6.90493 10.6596 7.23577C10.6595 7.23589 10.6593 7.236 10.6592 7.23612C10.6383 7.25679 10.6168 7.27808 10.5945 7.29999L10.5937 7.30079C10.4209 7.47164 10.291 7.59787 10.1885 7.69168C10.166 7.71224 10.1456 7.73055 10.127 7.74685C10.102 7.76884 10.0804 7.78716 10.0617 7.80242C10.0424 7.78567 10.0213 7.76698 9.99833 7.74643C9.99221 7.74093 9.98595 7.73531 9.97957 7.72955C9.8516 7.61402 9.68945 7.45988 9.5259 7.29896C9.5118 7.28509 9.49771 7.27119 9.48367 7.2573C9.48356 7.25718 9.48344 7.25706 9.48332 7.25695C9.33474 7.10991 9.19064 6.9628 9.07592 6.84036C9.01285 6.77305 8.9613 6.716 8.9237 6.67204C8.91567 6.66264 8.90895 6.65462 8.90339 6.64788M11.7968 6.40244H11.7102C11.7133 6.17866 11.6296 5.95976 11.4691 5.78261C11.4233 5.73144 11.3496 5.65154 11.242 5.58912L11.2812 5.51572M11.7968 6.40244C11.7929 5.99619 11.621 5.70713 11.2812 5.51572M11.2812 5.51572L11.2404 5.58816C11.2202 5.5765 11.1988 5.56547 11.1762 5.55536C11.0312 5.49055 10.8911 5.48838 10.8085 5.48838C10.8063 5.48838 10.8041 5.48838 10.8019 5.48839L10.8007 5.40244M11.2812 5.51572C11.1054 5.42197 11.0312 5.40244 10.8007 5.40244M10.8007 5.40244V5.48839C10.7033 5.48863 10.5576 5.49436 10.3978 5.57716C10.3382 5.60807 10.2824 5.6473 10.231 5.68863C10.2307 5.6889 10.2303 5.68917 10.23 5.68944C10.1736 5.73493 10.1225 5.78291 10.0776 5.82512L10.0754 5.82719L10.074 5.82853C10.0678 5.83438 10.0619 5.83994 10.0562 5.84522C10.0543 5.84345 10.0524 5.84165 10.0504 5.83982C9.98837 5.78049 9.91863 5.7208 9.84149 5.66745L9.89837 5.57822M10.8007 5.40244C10.5195 5.40635 10.3437 5.46494 10.1718 5.6251C10.0898 5.69932 10.0859 5.69932 9.89837 5.57822M9.89837 5.57822L9.84097 5.6671C9.70063 5.57015 9.53581 5.49423 9.34832 5.47963C9.23604 5.47089 9.13296 5.48483 9.03938 5.51505L9.01165 5.4376M9.89837 5.57822C9.58587 5.379 9.30071 5.33604 9.01165 5.4376M9.01165 5.4376L9.03891 5.5152C8.85157 5.57582 8.70231 5.70171 8.59354 5.84157C8.52577 5.92854 8.47659 6.02656 8.44636 6.12964L8.35931 6.10166M9.01165 5.4376C8.69524 5.55088 8.46087 5.79307 8.35931 6.10166M8.35931 6.10166L8.44618 6.13025C8.37859 6.36138 8.40625 6.61786 8.53323 6.83211C8.53333 6.83227 8.53342 6.83243 8.53352 6.83259C8.54265 6.84797 8.55229 6.86313 8.56245 6.87806C8.59828 6.93112 8.6477 6.9849 8.67271 7.01212L8.67385 7.01336C8.71259 7.05553 8.76125 7.10637 8.81517 7.16156C8.92352 7.27244 9.0615 7.40939 9.20225 7.54617L9.2041 7.54797L9.2041 7.54796L9.71582 8.04015L9.94118 8.25691L9.9179 8.32041M8.35931 6.10166C8.28899 6.32041 8.33196 6.67197 8.45306 6.879C8.57024 7.08213 9.77337 8.26572 9.9179 8.32041M9.9179 8.32041L9.94173 8.25743L10.0374 8.34942C9.99904 8.34671 9.96068 8.3361 9.9179 8.32041ZM11.1715 6.05133L11.0976 6.11729L11.1707 6.0506M11.1715 6.05133C11.1712 6.05108 11.171 6.05084 11.1707 6.0506M11.1715 6.05133L11.1707 6.0506M11.1707 6.0506C11.1385 6.01838 11.0963 5.98593 11.0405 5.95402C10.9682 5.91572 10.9512 5.91166 10.9452 5.91023L10.945 5.91018C10.9355 5.9079 10.909 5.90271 10.8085 5.90245C10.8071 5.90245 10.8057 5.90245 10.8043 5.90244C10.6972 5.90416 10.642 5.91607 10.6102 5.92718C10.5838 5.93641 10.5553 5.9512 10.5127 5.9909L10.5127 5.99094L10.5073 5.99587C10.5067 5.99639 10.5058 5.99717 10.5047 5.99818C10.4907 6.0111 10.4361 6.0615 10.3704 6.09935C10.362 6.10423 10.3533 6.10893 10.3445 6.11344C10.3444 6.1135 10.3443 6.11357 10.3441 6.11364C10.2448 6.1643 10.1238 6.1903 9.99131 6.16791C9.91264 6.15461 9.8466 6.12626 9.80239 6.10382M9.80239 6.10382L9.70696 6.20322L9.80059 6.10291M9.80239 6.10382C9.80179 6.10351 9.80119 6.10321 9.80059 6.10291M9.80239 6.10382L9.98235 5.91636L9.97098 5.92034M9.80059 6.10291C9.78477 6.09483 9.77183 6.08757 9.76222 6.08212C9.71957 6.05796 9.67162 6.02699 9.62909 5.99952L9.62845 5.99911C9.42051 5.86685 9.2952 5.86827 9.17878 5.90884C9.07059 5.94786 8.98302 6.01256 8.91981 6.0951M9.80059 6.10291L9.97098 5.92034M8.91981 6.0951L8.98821 6.14853L8.9197 6.09525M8.91981 6.0951C8.91978 6.09515 8.91974 6.0952 8.9197 6.09525M8.91981 6.0951L8.9197 6.09525M8.9197 6.09525C8.88299 6.14322 8.85452 6.19722 8.835 6.2557C8.82883 6.27607 8.81937 6.34041 8.83078 6.43461C8.84141 6.52238 8.86442 6.58828 8.88106 6.62006M8.88106 6.62006C8.88284 6.62223 8.88902 6.63042 8.9017 6.64584M8.88106 6.62006C8.88229 6.62242 8.88349 6.62459 8.88465 6.62656L8.88466 6.62656L8.88615 6.62914C8.88562 6.62822 8.88512 6.62736 8.88465 6.62656C8.88198 6.62201 8.88041 6.61953 8.88051 6.61946C8.88054 6.61944 8.88072 6.61964 8.88106 6.62006ZM8.9017 6.64584L8.97649 6.59775L8.90339 6.64788M8.9017 6.64584C8.90225 6.64651 8.90281 6.64719 8.90339 6.64788M8.9017 6.64584L8.90339 6.64788M9.97098 5.92034C9.9627 5.92356 9.95839 5.92601 9.95843 5.926C9.95844 5.92599 9.95893 5.92572 9.95992 5.92511C9.96314 5.92311 9.96945 5.91893 9.97929 5.91145L9.97098 5.92034ZM10.1638 7.8865C10.1644 7.88693 10.1649 7.88728 10.1653 7.88756C10.1704 7.89118 10.1696 7.8902 10.1638 7.8865Z" />
            <path d="M7.78906 9.41402C7.66797 9.46871 7.61719 9.60933 7.61719 9.87496C7.61719 10.1679 7.72656 10.3203 7.93359 10.3125C8.14062 10.3086 8.20312 10.1992 8.20312 9.8359C8.20312 9.55074 8.19531 9.5234 8.10156 9.44918C7.98828 9.35933 7.91406 9.35152 7.78906 9.41402Z" />
            <path d="M11.8984 9.44918C11.8047 9.5234 11.7969 9.55074 11.7969 9.8359C11.7969 10.1992 11.8594 10.3086 12.0664 10.3125C12.2734 10.3203 12.3828 10.1679 12.3828 9.87496C12.3828 9.60152 12.332 9.46871 12.1992 9.41011C12.0664 9.34761 12.0156 9.35543 11.8984 9.44918Z" />
          </svg>
          <p
            className={`text-xs ${
              menu === "brides" ? "text-primary-900" : "text-white"
            }`}
          >
            Mempelai
          </p>
        </a>
        <a
          href="#dates"
          onClick={() => setMenu("dates")}
          className="flex flex-col items-center justify-center"
        >
          <svg
            className={`mt-1 transition ${
              menu === "dates"
                ? "stroke-primary-900 fill-primary-900"
                : "stroke-white fill-white"
            }`}
            width="20"
            height="20"
            viewBox="0 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.2032 2.16152H14.1823V0.692767C14.1823 0.421933 13.9427 0.161517 13.6615 0.171933C13.3802 0.18235 13.1407 0.4011 13.1407 0.692767V2.16152H5.849V0.692767C5.849 0.421933 5.60942 0.161517 5.32817 0.171933C5.04692 0.18235 4.80733 0.4011 4.80733 0.692767V2.16152H2.79692C1.35942 2.16152 0.192749 3.32818 0.192749 4.76568V16.224C0.192749 17.6615 1.35942 18.8282 2.79692 18.8282H16.2032C17.6407 18.8282 18.8073 17.6615 18.8073 16.224V4.76568C18.8073 3.32818 17.6407 2.16152 16.2032 2.16152ZM17.7657 16.224C17.7657 17.0886 17.0677 17.7865 16.2032 17.7865H2.79692C1.93233 17.7865 1.23442 17.0886 1.23442 16.224V7.45318H17.7657V16.224ZM17.7657 6.41152H1.23442V4.76568C1.23442 3.9011 1.93233 3.20318 2.79692 3.20318H4.80733V3.81777C4.80733 4.0886 5.04692 4.34902 5.32817 4.3386C5.60942 4.32818 5.849 4.10943 5.849 3.81777V3.20318H13.1407V3.81777C13.1407 4.0886 13.3802 4.34902 13.6615 4.3386C13.9427 4.32818 14.1823 4.10943 14.1823 3.81777V3.20318H16.2032C17.0677 3.20318 17.7657 3.9011 17.7657 4.76568V6.41152Z" />
            <path d="M8.97091 14.8886V11.2845C8.97091 11.223 8.90424 11.1855 8.85216 11.2178L8.18757 11.6261C8.08341 11.6897 7.95007 11.6157 7.95007 11.4928V10.8147C7.95007 10.7053 8.00736 10.6032 8.10216 10.547L8.89799 10.0709C8.94695 10.0417 9.00216 10.0261 9.05841 10.0261H9.71049C9.88341 10.0261 10.023 10.1657 10.023 10.3386V14.8876C10.023 15.0605 9.88341 15.2001 9.71049 15.2001H9.28445C9.11049 15.2011 8.97091 15.0615 8.97091 14.8886Z" />
          </svg>
          <p
            className={`text-xs mt-0.5 ${
              menu === "dates" ? "text-primary-900" : "text-white"
            }`}
          >
            Tanggal
          </p>
        </a>
        <a
          href="#gallery"
          onClick={() => setMenu("gallery")}
          className="flex flex-col items-center justify-center"
        >
          <svg
            className={`mt-1 transition ${
              menu === "gallery"
                ? "stroke-primary-900 fill-primary-900"
                : "stroke-white fill-white"
            }`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.76168 0.25786C1.43356 0.496141 0.351524 1.56255 0.0741804 2.9063C0.00386787 3.24614 -3.83816e-05 3.55864 -3.83816e-05 9.64849C-3.83816e-05 16.668 -0.0117571 16.3086 0.242149 16.8282C0.406212 17.1719 0.863243 17.6368 1.19918 17.8047C1.43356 17.9258 1.74606 18.0196 2.03902 18.0665C2.16402 18.086 2.18746 18.1094 2.23043 18.2344C2.3984 18.754 2.85152 19.2852 3.33981 19.5391C3.88668 19.8243 3.43356 19.8086 11.2109 19.7969L18.1836 19.7852L18.4414 19.6993C19.1054 19.4727 19.6679 18.9102 19.8945 18.2461L19.9804 17.9883L19.9921 10.9883C20.0039 3.27348 20.0156 3.69927 19.7578 3.17192C19.5937 2.82817 19.1367 2.36333 18.8007 2.19536C18.5664 2.07427 18.2539 1.98052 17.9609 1.93364C17.8359 1.91411 17.8125 1.89067 17.7695 1.76567C17.6015 1.24614 17.1484 0.714891 16.6601 0.460985C16.1171 0.179735 16.5039 0.19536 9.42574 0.199266C4.1484 0.203173 3.01559 0.210985 2.76168 0.25786ZM16.0195 1.03911C16.4101 1.15239 16.7421 1.41802 16.914 1.75786L16.9921 1.91411H13.4804C11.5507 1.91411 9.91793 1.92583 9.84762 1.93755C9.53512 2.00005 9.42184 2.35942 9.64449 2.58208L9.75777 2.69536H13.7812C16.2343 2.69536 17.8789 2.71099 18.0039 2.73442C18.4414 2.81645 18.8671 3.12895 19.0625 3.51567C19.2187 3.82427 19.2226 3.94145 19.2109 8.9102L19.1992 13.7032L18.5312 13.0899C17.7421 12.3672 17.1289 11.8946 16.9023 11.8321C16.8125 11.8086 16.6015 11.7969 16.4257 11.8047C15.9531 11.8243 15.7695 11.9336 14.6875 12.8321C14.1836 13.254 13.6992 13.6368 13.6132 13.6797C13.3007 13.8438 12.8086 13.7422 12.6093 13.4727C12.5546 13.3985 11.7812 12.004 10.8945 10.3711C9.71481 8.19927 9.23434 7.35161 9.10543 7.21489C9.00387 7.10942 8.82809 6.97661 8.67574 6.90239C8.43746 6.7852 8.39449 6.77739 8.00777 6.77739C7.63668 6.77739 7.57809 6.78911 7.37106 6.88677C6.94137 7.10161 6.91012 7.14458 4.88277 10.5821C3.84371 12.3516 2.96871 13.8243 2.94137 13.8594C2.90231 13.9141 2.89449 12.9844 2.90231 8.9063L2.91012 3.88677L2.99996 3.66411C3.17184 3.24224 3.44137 2.97661 3.87106 2.80083C4.07027 2.7227 4.16402 2.71489 5.51559 2.69536L6.95309 2.67583L7.05465 2.57427C7.17574 2.45317 7.19137 2.23833 7.09371 2.08989C6.98434 1.92192 6.8359 1.9063 5.35152 1.92192C4.15621 1.93755 3.93356 1.94927 3.74996 2.00786C3.01559 2.24614 2.44918 2.81255 2.19918 3.55474C2.13277 3.75786 2.12887 4.08208 2.11715 10.5235L2.10934 17.2774L1.9609 17.254C1.58981 17.2071 1.12887 16.8555 0.937462 16.4844C0.777305 16.1719 0.777305 16.129 0.789024 9.4727L0.800743 3.06645L0.890587 2.81255C1.05856 2.3477 1.21481 2.10161 1.56246 1.75395C1.83199 1.47661 1.95699 1.38677 2.22652 1.25786C2.8359 0.964891 2.37887 0.984423 9.45699 0.980516C15.1484 0.97661 15.8281 0.984423 16.0195 1.03911ZM8.35934 7.61723C8.4609 7.66802 8.56246 7.77348 8.6484 7.90239C8.71871 8.01177 9.82027 10.0196 11.0937 12.3633C12.3632 14.7071 13.4492 16.6602 13.5 16.7071C13.6406 16.836 13.832 16.8243 13.9921 16.6836C14.2109 16.4883 14.1836 16.3907 13.6562 15.4375C13.4023 14.9766 13.207 14.5938 13.2187 14.5782C13.2304 14.5665 13.3515 14.543 13.4843 14.5235C13.8828 14.4727 14.1289 14.3165 15.1367 13.4766C15.6523 13.0469 16.1289 12.6719 16.1992 12.6368C16.3515 12.5625 16.6406 12.5625 16.8086 12.6329C16.8789 12.6602 17.4492 13.1563 18.0781 13.7344L19.2187 14.7813V16.2266C19.2187 17.793 19.1992 17.9688 19.0117 18.293C18.8671 18.5352 18.5546 18.8086 18.289 18.9141L18.0664 19.004L11.1367 19.0157C4.88668 19.0235 4.18356 19.0196 3.98824 18.961C3.42184 18.8008 3.02731 18.3555 2.92965 17.7696C2.91012 17.6329 2.89059 17.0665 2.89059 16.5118V15.504L5.14059 11.6875C6.37887 9.58989 7.43746 7.82036 7.49215 7.75786C7.70309 7.5313 8.07418 7.4727 8.35934 7.61723Z" />
            <path d="M8.20311 1.95703C7.82811 2.10547 7.93358 2.69531 8.33202 2.69531C8.49999 2.69531 8.69139 2.54688 8.72264 2.39453C8.74999 2.23828 8.66014 2.04688 8.51952 1.97656C8.38671 1.90625 8.33983 1.90234 8.20311 1.95703Z" />
            <path d="M14.4336 5.16027C14.1133 5.22668 13.6992 5.45324 13.4414 5.70714C13.0391 6.10949 12.8398 6.57824 12.8398 7.12902C12.8398 8.64855 14.4492 9.61339 15.793 8.89855C16.2422 8.65636 16.6484 8.14074 16.7813 7.64074C16.8555 7.37121 16.8516 6.85949 16.7734 6.59777C16.5859 5.95714 16.0781 5.4298 15.4414 5.21496C15.2109 5.13683 14.6914 5.10949 14.4336 5.16027ZM15.332 6.01183C15.7578 6.19933 16.0547 6.65246 16.0547 7.11339C16.0547 7.48839 15.9648 7.71105 15.707 7.97277C15.4219 8.26183 15.1367 8.37511 14.7617 8.34777C14.0234 8.29699 13.5078 7.64074 13.6406 6.91418C13.6914 6.64464 13.7813 6.46496 13.9727 6.27746C14.3281 5.91808 14.8789 5.81261 15.332 6.01183Z" />
            <path d="M14.3007 17.4375C13.9609 17.625 14.1054 18.1641 14.4921 18.1641C14.6913 18.1641 14.8827 17.9727 14.8827 17.7773C14.8827 17.4844 14.5585 17.293 14.3007 17.4375Z" />
          </svg>

          <p
            className={`text-xs ${
              menu === "gallery" ? "text-primary-900" : "text-white"
            }`}
          >
            Galeri
          </p>
        </a>
        <a
          href="#others"
          onClick={() => setMenu("others")}
          className="flex flex-col items-center justify-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className={`mt-1 transition ${
              menu === "others"
                ? "stroke-primary-900 fill-primary-900"
                : "stroke-white fill-white"
            }`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.95312 0.296875C1.24609 0.480469 0.582031 1.01562 0.277344 1.64844C0.046875 2.125 0 2.38281 0 3.26562C0 3.94141 0.0078125 4.02344 0.0742187 4.10547C0.175781 4.23047 0.410156 4.23047 0.511719 4.10547C0.578125 4.02344 0.585937 3.94141 0.585937 3.32031C0.585937 2.51172 0.617187 2.30859 0.800781 1.91797C0.960937 1.58594 1.30859 1.21875 1.625 1.04688C2.07031 0.804688 1.55078 0.820312 10 0.820312C18.4492 0.820312 17.9297 0.804688 18.375 1.04688C18.6914 1.21875 19.0391 1.58594 19.1992 1.91797C19.2734 2.07812 19.3516 2.30078 19.375 2.41797C19.3984 2.55078 19.4141 4.02344 19.4141 6.43359V10.2383L19.5117 10.332C19.6328 10.457 19.7812 10.457 19.9062 10.332L20.0039 10.2344L19.9922 6.26172L19.9805 2.28516L19.8906 2.03125C19.7266 1.58594 19.5625 1.32031 19.2383 0.992188C18.9883 0.738281 18.8594 0.644531 18.5937 0.515625C17.9727 0.210938 18.6914 0.234375 9.98047 0.238281C3.3125 0.238281 2.13672 0.246094 1.95312 0.296875Z" />
            <path d="M6.31248 4.37891C6.18358 4.48047 6.17186 4.6875 6.28904 4.80469C6.36717 4.88281 6.41795 4.88281 11.6328 4.88281H16.9023L16.9844 4.79297C17.0898 4.67969 17.0937 4.53125 16.9961 4.41016L16.9219 4.31641L11.668 4.30469L6.41795 4.29688L6.31248 4.37891Z" />
            <path d="M0.0820523 5.10147C2.10851e-05 5.20694 2.10828e-05 5.21476 2.10828e-05 9.4296C2.10828e-05 14.1483 -0.00779143 13.9452 0.277365 14.5273C0.406271 14.7851 0.51174 14.9296 0.757834 15.1757C1.22658 15.6483 1.69143 15.8749 2.3008 15.9296L2.59768 15.9569L2.61721 17.6757C2.63674 19.3749 2.63674 19.3944 2.72268 19.5155C2.77346 19.5819 2.87111 19.6679 2.94533 19.703C3.10549 19.7773 3.38283 19.7812 3.51174 19.7108C3.56252 19.6835 4.45315 18.8437 5.49221 17.8476C6.66018 16.7304 7.43361 16.0155 7.51174 15.9882C7.60549 15.953 8.88283 15.9413 12.7149 15.9374C18.3516 15.9374 18.0274 15.9491 18.5938 15.6718C19.0274 15.4608 19.5039 14.9765 19.7227 14.5312C19.9727 14.0194 20 13.8241 20 12.5273V11.4023L19.9024 11.3085C19.7891 11.1913 19.6524 11.1835 19.5274 11.2851L19.4336 11.3593L19.4141 12.5858C19.3906 13.7499 19.3867 13.8202 19.3008 14.0429C19.0742 14.621 18.6641 15.0312 18.086 15.2616C17.9219 15.328 17.5781 15.3319 12.6563 15.3515L7.40236 15.371L7.22658 15.4569C7.1094 15.5155 6.40236 16.1679 5.15627 17.3632C4.1133 18.3632 3.25002 19.1796 3.2344 19.1796C3.21486 19.1796 3.20315 18.4648 3.20315 17.5858C3.20315 16.5546 3.18752 15.9413 3.16018 15.8398C3.07815 15.539 2.78127 15.3515 2.39846 15.3515C2.00393 15.3515 1.42971 15.0702 1.1133 14.7226C0.910177 14.5038 0.800802 14.3241 0.691427 14.039L0.60549 13.8085L0.585959 9.48819C0.566427 5.3046 0.562521 5.16007 0.492209 5.08194C0.382834 4.96085 0.183615 4.97257 0.0820523 5.10147Z" />
            <path d="M3.0156 7.51172C2.90232 7.63281 2.90623 7.79297 3.02732 7.91016L3.12107 8.00781H9.99998H16.8789L16.9726 7.91016C17.0976 7.78906 17.1015 7.62109 16.9804 7.50781L16.8906 7.42188H9.99607H3.09763L3.0156 7.51172Z" />
            <path d="M3.10547 10.5547C2.91797 10.6562 2.87109 10.8789 3.00781 11.0156C3.08594 11.0938 3.13672 11.0938 10 11.0938C16.8633 11.0938 16.9141 11.0938 16.9922 11.0156C17.0703 10.9375 17.0938 10.8047 17.0469 10.6836C16.9766 10.5 17.2578 10.5078 9.99219 10.5078C5.14063 10.5117 3.16016 10.5234 3.10547 10.5547Z" />
          </svg>

          <p
            className={`text-xs ${
              menu === "others" ? "text-primary-900" : "text-white"
            }`}
          >
            More
          </p>
        </a>
      </div>
    </section>
  );
}
