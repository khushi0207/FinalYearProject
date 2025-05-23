import logo from './Kharizma.png'
import dotkey from './dot-key.webp'
import cart from './cart.png'
import profile from './profile.png'
import menu from './menu.png'
import bin from './bin.png'
import exchange from './exchange.png'
import star from './star.png'
import dull from './star_dull.png'
import support from './support.png'
import wishcare from './WishCare logo.png'
import cross from './cross.png'
import quality from'./quality.png'
import stripe from './stripe_icon.png'
import razorpay from './razorpay-icon.png'
import search from './search_icon.png'
import dropdown from './dropdown.png'
import  dk_db1 from './dk_db1.jpg'
import youtube from './youtube.png'
import twitter from './twitter.png'
import instagram from './instagram.png'
import pinterest from './pinterest.png'
import facebook from './facebook.png'
import shipping1 from './shipping.png'
import shipping2 from './Delivery.png'
import ss1 from './sunscreen barrier1.png'
import ss2 from './sunscreen barrier2.webp'
import ss3 from './sunscreen barrier3.webp'
import ss4 from './sunscreen vita c+e 1.webp'
import ss5 from './sunscreen vita c+e 2.webp'
import ss6 from './sunscreen vita c+e 3.webp'
import ss7 from './foxtale sunscreen 1.jpeg'
import ss8 from './foxtale sunscreen 2.jpeg'
import ss9 from './foxtale sunscreen 3.jpeg'   
import ss10 from './sunscreen watermelon 1.webp'
import ss11 from './sunscreen watermelon 2.webp'
import ss12 from './sunscreen watermelon 3.webp'
import ss13 from './wishcare gel sunscreen.jpeg'
import ss14 from './wishcare gel sunscreen 2.jpeg'
import ss15 from './wishcare gel sunscreen 3.jpeg'
import ss16 from './wishcare niacinamide 1.webp'
import ss17 from './wishcare niacinamide 2.jpeg'
import ss18 from './wishcare niacinamide 3.jpeg'
import contact from './contact.png'
import logout from './logout.png'
import addItem from './addItem.png'
import listItem from './listItem.png'
import orderedItem from './orderItem.png'
import upload from './upload.png'

export const assets = {upload,addItem,listItem,orderedItem,logo,dotkey,logout,shipping1,shipping2,cart,youtube,pinterest,instagram,facebook,twitter,dropdown,dk_db1,profile,menu,bin,exchange,star,dull,support,wishcare,cross,quality,razorpay,stripe,search,contact}

export const products = [{
    _id : "1",
    name: "Dot & Key sunscreen Hyluronic & ceramides",
    price: 560,
    description: "Dot & Key sunscreen barrier",
    image : [ss1,ss2,ss3],
    rating: 4.5,
    reviews: 1000,
    category: "Skincare",
    subCategory: "sunscreen",
    sizes: ["50mg","80mg"],
    date: 12022025,
    brand: "Dot & Key",
    bestseller:true,
    
},
{
    _id : "2",
    name: "Dot & Key sunscreen vitamin C+E",
    price: 600,
    description: "Dot & Key sunscreen vitamin C+E",
    image :  [ss4,ss5,ss6],
    rating: 4.1,
    reviews: 990,
    category: "Skincare",
    subCategory: "sunscreen",
    sizes: ["50mg","80mg"],
    date: 12022025,
    brand: "Dot & Key",
    bestseller:true,
    
},
{
    _id : "3",
    name: "Foxtale sunscreen",
    price: 600,
    description: "Dot & Key sunscreen barrier",
    image :  [ss7,ss8,ss9],
    rating: 4.3,
    reviews: 1000,
    category: "Skincare",
    subCategory: "sunscreen",
    sizes: ["50mg","80mg"],
    date: 12022025,
    brand: "Dot & Key",
    bestseller:true,
    
},
{
    _id : "4",
    name: "Dot & Key watermelon sunscreen ",
    price: 600,
    description: "Dot & Key watermelon sunscreen ",
    image :  [ss10,ss11,ss12],
    rating: 4.0,
    reviews: 1000,
    category: "Skincare",
    subCategory: "sunscreen",
    sizes: ["50mg","80mg"],
    date: 12022025,
    brand: "Dot & Key",
    bestseller:true,
    
},
{
    _id : "5",
    name: "Dot & Key sunscreen barrier",
    price: 600,
    description: "Dot & Key sunscreen barrier",
    image :  [ss13,ss14,ss15],
    rating: 4.3,
    reviews: 1000,
    category: "Skincare",
    subCategory: "sunscreen",
    sizes: ["50mg","80mg"],
    date: 12022025,
    brand: "Dot & Key",
    bestseller:true,
    
},
{
    _id : "6",
    name: "Dot & Key sunscreen barrier",
    price: 600,
    description: "Dot & Key sunscreen barrier",
    image :  [ss17,ss17,ss18],
    rating: 5,
    reviews: 1000,
    category: "Skincare",
    subCategory: "sunscreen",
    sizes: ["50mg","80mg"],
    date: 12022025,
    brand: "Dot & Key",
    
    bestseller:false,
    
},
{
    _id : "7",
    name: "Dot & Key sunscreen barrier",
    price: 600,
    description: "Dot & Key sunscreen barrier",
    image :  [ss4,ss5,ss6],
    rating: 4.3,
    reviews: 1000,
    category: "Skincare",
    subCategory: "sunscreen",
    sizes: ["50mg","80mg"],
    date: 12022025,
    brand: "Dot & Key",
    
    bestseller:true,
    
},
{
    _id : "8",
    name: "Dot & Key sunscreen barrier",
    price: 600,
    description: "Dot & Key sunscreen barrier",
    image :  [ss13,ss14,ss15],
    rating: 3.9,
    reviews: 1000,
    category: "Skincare",
    subCategory: "sunscreen",
    sizes: ["50mg","80mg"],
    date: 12022025,
    brand: "Dot & Key",
    
    bestseller:false,
    
},
{
    _id : "9",
    name: "WishCare Invisible Gel Sunscreen",
    price: 600,
    description: "WishCare Invisible Gel Sunscreen",
    image :  [ss1,ss2,ss3],
    rating: 4.3,
    reviews: 1000,
    category: "Skincare",
    subCategory: "sunscreen",
    sizes: ["50mg","80mg"],
    date: 12022025,
    brand: "Dot & Key",
    
    bestseller:true,
    
},
{
    _id : "10",
    name: "Dot & Key sunscreen barrier",
    price: 600,
    description: "Dot & Key sunscreen barrier",
    image :  [ss1,ss2,ss3],
    rating: 4.0,
    reviews: 1000,
    category: "Skincare",
    subCategory: "sunscreen",
    sizes: ["50mg","80mg"],
    date: 12022025,
    brand: "Dot & Key",
    
    bestseller:false,
    
}
]