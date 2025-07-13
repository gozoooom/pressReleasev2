export default function Footer() {
  return (
    <footer className="border-t pt-6 pb-4 px-4 md:px-8 text-xs text-gray-500 space-y-4">
      <nav className="flex flex-col md:flex-row md:justify-center gap-3 md:gap-10 text-sm">
        <a
          href="https://zoooom.me/garage"
          className="hover:underline"
        >
          My Garage
        </a>
        <a
          href="https://zoooom.me/about"
          className="hover:underline"
        >
          About Us
        </a>
        <a
          href="https://zoooom.me/contact"
          className="hover:underline"
        >
          Contact Us
        </a>
        <a
          href="https://newsroom.zoooom.me/"
          className="hover:underline"
        >
          Newsroom
        </a>
      </nav>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4 gap-3">
        <div className="text-center md:text-left">
          © Zoooom, All Rights Reserved
        </div>

        <nav className="flex justify-center md:justify-end gap-4">
          <a href="https://zoooom.me/cookies-policy/" className="hover:underline">
            Cookies Policy
          </a>
          <a href="https://zoooom.me/privacy" className="hover:underline">
            Privacy Notice
          </a>
          <a href="https://zoooom.me/tos" className="hover:underline">
            Terms of Services
          </a>
        </nav>
      </div>
    </footer>
  );
}
