import "./TrendingBooks.css";

export default function TrendingBooks() {

    /* -------- YOUR CUSTOM BOOK IMAGES -------- */
    const bookImages = [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book%205%20%281%29-5JMhZ96vgiMKWSEYmIbiDm6TTesisB.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book%205-BMFuGatO0sr4OtEBszyk43SnAb7JFo.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bbok%206-VzisHWZmZIk6S8bngFFfHCf5cAmPK7.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BOKKKKK-gB9I24YL343iCeBO3LIkML8vcClItw.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-16%20at%2012.12.25_68afe91a-JHAw2W8Ihm6AjhTbnik84Ql5kOQpm9.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%20101-n963i7I7aUg3YQDgGSZGonVVwpGKVk.png",

        "https://m.media-amazon.com/images/I/41limWOQOcL._SY445_SX342_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/81IprXRO0HL._AC_UY218_.jpg",
        "https://m.media-amazon.com/images/I/51g9XZ38JmS._AC_UY218_.jpg",
        "https://m.media-amazon.com/images/I/61VrY0YRxoL._AC_UY218_.jpg",
        "https://m.media-amazon.com/images/I/81pcNw2vXgL._AC_UY218_.jpg",
        "https://m.media-amazon.com/images/I/81EKQluVmXL._AC_UY218_.jpg"

    ];

    /* -------- BOOK DATA -------- */
    const books = [
        { title: "A Beautiful Moment", price: "₹499" },
        { title: "A Journey Through Lets Lessons", price: "₹399" },
        { title: "Toxic Parenting", price: "₹299" },
        { title: "The Shattering", price: "₹350" },
        { title: "Shattered Sonnets", price: "₹450" },

        { title: "Light House", price: "₹799" },
        { title: "हसरतें", price: "₹699" },
        { title: "Ranga Half-Pants", price: "₹199" },
        { title: "Moonlight : Moonlight", price: "₹250" },
        { title: "The Distance Between You And Me", price: "₹399" },

        { title: "10Th Girl Friend", price: "₹199" },
        { title: "You Are Far Away From Me", price: "₹320" }

    ];

    return (
        <section className="tb-section" >

            {/* background blobs */}
            < div className="tb-blob tb-blob1" > </div>
            < div className="tb-blob tb-blob2" > </div>
            < div className="tb-blob tb-blob3" > </div>

            < h2 className="tb-title" > Trending Books </h2>

            < div className="tb-carousel" >
                {
                    books.slice(0, 12).map((book, index) => (
                        <div className="tb-card" key={index} >

                            <img
                                src={bookImages[index % bookImages.length]}
                                alt={book.title}
                                loading="lazy"
                            />

                            <div className="tb-overlay" >
                                <h3>{book.title} </h3>
                                < p className="tb-price" > {book.price} </p>
                                < button className="tb-btn" > Buy Now </button>
                            </div>

                        </div>
                    ))
                }
            </div>

        </section>
    );
}