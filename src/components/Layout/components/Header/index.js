import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Image from "~/components/Image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faArrowUpFromBracket,
  faCircleQuestion,
  faCoins,
  faEarthAfrica,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faMessage } from "@fortawesome/free-regular-svg-icons";
import Menu from "~/components/Popper/Menu";
import Search from "~/components/Layout/Search";
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAfrica} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Việt Nam",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feadback and help",
    to: "/feadback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard Shortcuts",
  },
];
function Header() {
  const currentUser = true;

  //handl logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.types) {
      case "language":
        break;
      default:
    }
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View Profile",
      to: "/@hoaa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/setting",
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feadback and help",
      to: "/feadback",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
      title: "Log Out",
      to: "/logout",
      separate: true,
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="tiktok" />
        <Search />
        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 230]} content="Upload Video" placement="bottom">
                <button className={cx("action-btn", "upload")}>
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </button>
              </Tippy>
              <Tippy delay={[0, 230]} content="Message" placement="bottom">
                <button className={cx("action-btn", "message")}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
              <Tippy delay={[0, 230]} content="Notification" placement="bottom">
                <button className={cx("action-btn", "notification")}>
                  <FontAwesomeIcon icon={faBell} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Tải lên</Button>
              <Button primary>Đăng nhập</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1665810000&x-signature=eJNx8cN%2ByExjZe7SxqG1C6QZkyU%3D"
                className={cx("user-avatar")}
                alt="Nguyen Van A"
                // failback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
