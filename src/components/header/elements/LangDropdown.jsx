const LangDropdown = () => {
    return ( 
        <div className="dropdown">
        <button
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          En
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              English
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Arabic
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Spanish
            </a>
          </li>
        </ul>
      </div>
     );
}
 
export default LangDropdown;