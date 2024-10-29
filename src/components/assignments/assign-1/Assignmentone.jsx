function Assigmentone() {
  let arr = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "data:image/jpeg;base64,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",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image:"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      rating: { rate: 4.6, count: 400 },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnLNMD17KNTcmLoPF-5KIsZhJQaNyg6Ws_g&s",
      rating: { rate: 3.9, count: 70 },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe6PqAmQiKPfKe7_6TnL0eYYILGE72Lv2Iew&s",
      rating: { rate: 3, count: 400 },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL.AC_UL640_QL65_ML3.jpg",
      rating: { rate: 1.9, count: 100 },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL.AC_SY879.jpg",
      rating: { rate: 3.3, count: 203 },
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL.AC_SX679.jpg",
      rating: { rate: 2.9, count: 470 },
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L.AC_SX679.jpg",
      rating: { rate: 4.8, count: 319 },
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL.AC_SX679.jpg",
      rating: { rate: 4.8, count: 400 },
    },
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL.AC_SX679.jpg",
      rating: { rate: 2.9, count: 250 },
    },
    {
      id: 14,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      price: 999.99,
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL.AC_SX679.jpg",
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9.85,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    },
  ];
  return (
    <div className="container text-center">
      <table className="table mt-5 mb-5 table-bordered table-hover border-dark table-warning table-striped">
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Image</th>
          <th >Rate</th>
          <th>Count</th>
        </thead>
        <tbody>
          {arr.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>
              <img src={item.image} alt={item.title} width="50" height="50" />
              </td>
        <td>{item.rating ? item.rating.rate : 'N/A'}</td>
        <td>{item.rating ? `${item.rating.count} reviews` : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Assigmentone;
