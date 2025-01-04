const ProductReview = [
    {
        id: 1,
        productId: 2,
        review_date: "March 16, 2023",
        comment: "“We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. ”",
        rating: 4,
        user_name: "Eleanor Pena",
        user_thumbnail: "/images/blog/author-image-4.png"
    },
    {
        id: 2,
        productId: 21,
        review_date: "March 28, 2023",
        comment: "“We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. ”",
        rating: 3,
        user_name: "Courtney Henry",
        user_thumbnail: "/images/blog/author-image-4.png"
    },
    {
        id: 3,
        productId: 31,
        review_date: "March 28, 2023",
        comment: "“We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. ”",
        rating: 4,
        user_name: "Devon Lane",
        user_thumbnail: "/images/blog/author-image-5.png"
    },
    {
        id: 3,
        productId: 41,
        review_date: "April 28, 2023",
        comment: "“We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. ”",
        rating: 4,
        user_name: "Devon Lane",
        user_thumbnail: "/images/blog/author-image-5.png"
    }
]

const BlogComment = [
    {
        id: 1,
        postId: 2,
        author_name: "Cameron Williamson",
        author_img: "/images/blog/author-image-4.png",
        date: "Nov 23, 2018",
        time: "12:23 pm",
        comment: "Duis hendrerit velit scelerisque felis tempus, id porta libero venenatis. Nulla facilisi. Phasellus viverra magna commodo dui lacinia tempus. Donec malesuada nunc non dui posuere, fringilla vestibulum urna mollis. Integer condimentum ac sapien quis maximus.",
        reply:[
            {
                replyId: 1,
                author_name: "Cameron Williamson",
                author_img: "/images/blog/author-image-4.png",
                date: "Nov 23, 2018",
                time: "12:23 PM",
                comment: "Duis hendrerit velit scelerisque felis tempus, id porta libero venenatis. Nulla facilisi. Phasellus viverra magna commodo dui lacinia tempus. Donec malesuada nunc non dui posuere, fringilla vestibulum urna mollis. Integer condimentum ac sapien quis maximus.",
            }
        ]
    },
    {
        id: 2,
        postId: 2,
        author_name: "Thopmson Arnold",
        author_img: "/images/blog/author-image-5.png",
        date: "Nov 23, 2018",
        time: "05:23 PM",
        comment: "Duis hendrerit velit scelerisque felis tempus, id porta libero venenatis. Nulla facilisi. Phasellus viverra magna commodo dui lacinia tempus. Donec malesuada nunc non dui posuere, fringilla vestibulum urna mollis. Integer condimentum ac sapien quis maximus."
    },
]

export{ProductReview, BlogComment};