import Link from "next/link";

const HeaderQuickLink = () => {
  return (
    <div className="header-top-link">
      <ul className="quick-link">
        <li>
          <Link href="/sign-up">Join Us</Link>
        </li>
        <li>
          <Link href="/sign-in">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderQuickLink;
