
const SearchWidget = () => {	
  return (
    <div className="axil-single-widget mt--40 widget_search">
      <h6 className="widget-title">Search</h6>
      <div className="blog-search">
		<input type="text" placeholder="Search" />
		<button type="submit" className="search-button">
		<i className="fal fa-search" />
		</button>
      </div>
    </div>
  );
};

export default SearchWidget;
