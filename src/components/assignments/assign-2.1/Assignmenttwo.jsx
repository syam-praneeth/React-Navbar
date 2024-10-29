import './Assignmenttwo.css'

function Assignmenttwo() {
    let productsList=[
      {
        id: 1,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description: "Usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather.Zippered Hand Pockets and Hidden Pocket keep your things secure.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        rating: {
          rate: 2.6,
          count: 235
        }
      },
      {
        id: 2,
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides. ",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        rating: {
          rate: 2.9,
          count: 340
        }
      },
      {
        id: 3,
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets,it covers the hips, and the hood is generous but doesn't overdo it.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        rating: {
          rate: 3.8,
          count: 679
        }
      },
      {
        id: 4,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        rating: {
          rate: 4.7,
          count: 130
        }
      },
      {
        id: 5,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, breathable with moisture wicking fabric which helps to keep moisture away",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: {
          rate: 4.5,
          count: 146
        }
      },
      {
        id: 6,
        title: "DANVOUY Womens T Shirt Cotton Short",
        price: 12.99,
        description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual Season: Spring,Summer,Autumn,Winter.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        rating: {
          rate: 3.6,
          count: 145
        }
      }]
  return (
    <div>
        <div className="row1">
            {
                productsList.map((item)=>(
                    <div className="col1" key={item.id}>
                        <p>{item.id}</p>
                        <h5 className='title'>{item.title}</h5>
                        <h5 className='price'>Price: ${item.price}</h5>
                        <p className='des'>{item.description}</p>
                        <p className='category'>{item.category}</p>
                        <img src={item.image} alt={item.title} />
                        <p className='rate'>
                           Rating: {item.rating.rate}      Count: {item.rating.count}
                        </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Assignmenttwo;