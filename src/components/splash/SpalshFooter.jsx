const SplashFooter = () => {
  return (
    <footer className="axil-footer-area footer-style-2 pv-footer-area">
      <div className="copyright-area copyright-default">
        <div className="container">
          <div className="copyright-left d-flex flex-wrap justify-content-center">
            <ul className="quick-link">
              <li>
                © {new Date().getFullYear()}. All rights reserved by {" "}
                <a target="_blank" href="https://axilthemes.com/">
                  Axilthemes
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SplashFooter;
