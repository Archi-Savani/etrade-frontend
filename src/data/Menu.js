const HeaderMenu = [
    {
        name: "Home",
        url: "#",
        hasChildren: true,
        children: [
            {
                name: "Electronics",
                url: "/home/electronics"
            },
            
            {
                name: "Jewellery",
                url: "/home/jewellery"
            },
           
            {
                name: "Fashion",
                url: "/home/fashion"
            },
           
            {
                name: "Furniture",
                url: "/home/furniture"
            },
            {
                name: "NFT",
                url: "/home/nft"
            },
        ]
    },
    {
        name: "Shop",
        url: "#",
        hasChildren: true,
        children: [
            {
                name: "Shop",
                url: "/shop"
            },
            {
                name: "Shop Without Sidebar",
                url: "/shop?layout=no-sidebar"
            },
            {
                name: "Product Variation 1",
                url: "/products/43"
            },
            {
                name: "Product Variation 2",
                url: "/products/65"
            },
            {
                name: "Product Variation 3",
                url: "/products/2"
            },
            {
                name: "Product Variation 4",
                url: "/products/77"
            },
            {
                name: "Product Variation 5",
                url: "/products/19"
            }
        ]
    },
    {
        name: "Pages",
        url: "#",
        hasChildren: true,
        children: [
            {
                name: "Wishlist",
                url: "/wishlist"
            },
            {
                name: "Cart",
                url: "/cart"
            },
            {
                name: "Sign Up",
                url: "/sign-up"
            },
            {
                name: "Privacy Policy",
                url: "/privacy-policy"
            },
            {
                name: "Coming Soon",
                url: "/coming-soon"
            },
        ]
    },
    {
        name: "About",
        url: "/about",
        hasChildren: false,
        
    },
    {
        name: "Blog",
        url: "#",
        hasChildren: true,
        children: [
            {
                name: "Blog Grid",
                url: "/blog"
            },
            {
                name: "Blog List",
                url: "/blog?blog=list"
            },
            {
                name: "Standard Post",
                url: "/blog/important-updates-for-listing-and-delisting-your-nfts"
            },
            {
                name: "Gallery Post",
                url: "/blog/apple-presents-app-best-of-2020-winners"
            },
            {
                name: "Video Post",
                url: "/blog/keeping-yourself-safe-when-buying-nfts-on-etrade"
            },
            {
                name: "Audio Post",
                url: "/blog/how-to-generate-blog-ideas-are-great-for-businesses-that-sell-both-b2b-and-d2c"
            },
            {
                name: "Quote Post",
                url: "/blog/an-oral-history-of-the-aim-away-message-by-the-people-who-were-there"
            }
        ]
    },
    {
        name: "Contact",
        url: "/contact",
        hasChildren: false,
        
    },
]

const CateMenu = [
    {
        name: "Fashion",
        url: "/shop?category=fashion",
        icon: "/images/product/categories/cat-01.png",
        hasChildren: true,
        children: [
            {
                label: "Men",
                items: [
                    {
                        name: "T-shirts",
                        url: "/"
                    },
                    {
                        name: "Shirts",
                        url: "/"
                    },
                    {
                        name: "Jeans",
                        url: "/"
                    }
                ]
            },
            {
                label: "Women",
                items: [
                    {
                        name: "Jeans",
                        url: "/"
                    },
                    {
                        name: "T-shirts",
                        url: "/"
                    },
                    {
                        name: "Shirts",
                        url: "/"
                    },
                    {
                        name: "Tops",
                        url: "/"
                    },
                    {
                        name: "Jumpsuits",
                        url: "/"
                    },
                    {
                        name: "Coats",
                        url: "/"
                    },
                    {
                        name: "Sweater",
                        url: "/"
                    },
                ]
            },
            {
                label: "Accessories",
                items: [
                    {
                        name: "Handbag",
                        url: "/"
                    },
                    {
                        name: "Shoes",
                        url: "/"
                    },
                    {
                        name: "Wallets",
                        url: "/"
                    }
                ]
            },
        ],
        featured: [
            {
                thumb:"/images/product/product-feature1.png",
                url: "/"
            },
            {
                thumb:"/images/product/product-feature2.png",
                url: "/"
            },
            {
                thumb:"/images/product/product-feature3.png",
                url: "/"
            },
            {
                thumb:"/images/product/product-feature4.png",
                url: "/"
            },
            
        ]

    },
    {
        name: "Electronics",
        url: "/shop?category=electronics",
        icon: "/images/product/categories/cat-02.png",
        hasChildren: false
    },
    {
        name: "Home Decor",
        url: "/",
        icon: "/images/product/categories/cat-03.png",
        hasChildren: false
    },
    {
        name: "Medicine",
        url: "/",
        icon: "/images/product/categories/cat-04.png",
        hasChildren: false
    },
    {
        name: "Furniture",
        url: "/shop?category=furniture",
        icon: "/images/product/categories/cat-05.png",
        hasChildren: false
    },
    {
        name: "Crafts",
        url: "/",
        icon: "/images/product/categories/cat-06.png",
        hasChildren: false
    },
    {
        name: "Accessories",
        url: "/",
        icon: "/images/product/categories/cat-07.png",
        hasChildren: false
    },
    {
        name: "Camera",
        url: "/",
        icon: "/images/product/categories/cat-08.png",
        hasChildren: false
    }
]

const DashboardAsideMenu = [
    {
      icon: "fas fa-th-large",
      name: "Dashboard",
      slug: ""
    },
    {
      icon: "fas fa-shopping-basket",
      name: "Orders",
      slug: "orders"
    },
    {
      icon: "fas fa-file-download",
      name: "Downloads",
      slug: "downloads"
    },
    {
      icon: "fas fa-home",
      name: "Addresses",
      slug: "addresses-edit"
    },
    {
      icon: "fas fa-user",
      name: "Account Details",
      slug: "account-details" 
    }
]

export {HeaderMenu, CateMenu, DashboardAsideMenu};