
const slugify = function (text) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w-]+/g, '') // Remove all non-word chars
		.replace(/--+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, '') // Trim - from end of text
}

const unSlugify = function (text) {
	return text
		.toString()
		.replace('-', ' ') 
}

const discountPercentage = function(old, discount) {
	const discountPercent = ((old - discount) / old) * 100;

	return Math.round(discountPercent);

}

const reviewAverage = function (review) {
	let totalRating = 0;
	for (let i = 0; i < review.length; i++) {
		const element = review[i].rating;
		totalRating += element;
	}
	return Math.round(totalRating / review.length);
}

const mapInSlices = function (array, sliceSize) {
	const out = [];
	for (var i = 0; i < array.length; i += sliceSize) {
	  const slice = array.slice(i, i + sliceSize);
	  out.push(slice);
	}
	return out;
}

const recentMonthList = function (lastFrom) {
	const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let today = new Date();
    let day;
    let month;
    let year;

    let recentMonths = [];

    for(var i = lastFrom; i > 0; i -= 1) {
        day = new Date(today.getFullYear(), today.getMonth() - i, 1);
        month = monthNames[day.getMonth()];
        year = day.getFullYear();
        recentMonths.push(month + ' ' + year);
    }

	return recentMonths;
}

const getPriceRange = function (product) {
	let priceLists = []
	const productsList = product.map((data) => {
		priceLists.push(data.price);
	})
	const highPrice = Math.max(...priceLists);
	const priceGap = 100;
	const priceInterval = Math.round(highPrice / priceGap);
	let priceRange = [];
	
	[...Array(priceInterval)].map((item, index) => {
		let from = priceGap * index;
		let to = from + priceGap;
		priceRange.push({from, to});
	})

	return priceRange;
}

const calculateTotalAmount = function (items) {
	let totalAmount = 0;
	const allAmount = items.map((item) => {
		let price = item.salePrice ? item.salePrice : item.price;
		let productsPrice = item.cartQuantity * price;
		return productsPrice;
	})
	for (let i = 0; i < allAmount.length; i++) {
		const price = allAmount[i];
		totalAmount += price;
	}
	return parseFloat(totalAmount).toFixed(2);
}

const calculateTotalQuantity = function (items) {
	let totalQuantity = 0;
	for (let i = 0; i < items.length; i++) {
		const product = items[i];
		totalQuantity += product.cartQuantity;
	}
	return totalQuantity;
}

export { slugify, unSlugify, discountPercentage, reviewAverage, mapInSlices, recentMonthList, getPriceRange, calculateTotalAmount, calculateTotalQuantity };