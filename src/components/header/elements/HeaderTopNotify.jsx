const HeaderTopNotify = (props) => {
  const removeNotifyHandler = (e) => {
    let targetElm = e.target.offsetParent.offsetParent;
        targetElm.style.height = '0px';
    setTimeout(() => {
      targetElm.remove();
    }, 300);
  }
  return (
    <div className="header-top-campaign" style={{backgroundImage: `url(${props.bgImage ? props.bgImage :"/images/others/campaign-bg.png"})`}}>
      <div className="container position-relative">
        <div className="campaign-content">
            {props.children}
        </div>
      </div>
      <button className="remove-campaign" onClick={removeNotifyHandler}>
        <i className="fal fa-times" />
      </button>
    </div>
  );
};

export default HeaderTopNotify;
