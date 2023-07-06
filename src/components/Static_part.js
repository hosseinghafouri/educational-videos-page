import logo from "../logo.png";
import Course from "./Course";
import Video from "./Video";
import "../styles/css/style.css";

let data = {
  posts: [
    {
      id: 95,
      shortTitle: "3توضیح کوتاه در باره رس آپ",
      fullTitle: "the fucking world in fire",
      description:
        "world fire will be to hard for humans like crono virus, just fucking words",
      videoSrc: "https://link.com",
    },
    {
      id: 1,
      shortTitle: "1توضیح کوتاه در باره رس آپ",
      fullTitle: "the fucking world in fire",
      description:
        "world fire will be to hard for humans like crono virus, just fucking words",
      videoSrc: "https://link.com",
    },
    {
      id: 9,
      shortTitle: "2توضیح کوتاه در باره رس آپ",
      fullTitle: "the fucking world in fire",
      description:
        "world fire will be to hard for humans like crono virus, just fucking words",
      videoSrc: "https://link.com",
    },
  ],
};



function Static_part() {
  return (
    <div className="Static_part">
      <div class="progress">
        <span>&#x1F815;</span>
      </div>
      <header className="header">
        <div className="navbar">
          {/* <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </nav> */}
          <img src={logo} alt="logo img" />
          <h1 className="logo-name">رس آپ</h1>
        </div>
        {/* <div className="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div> */}
      </header>
      <div class="main">
        <aside>
          {data.posts.map((item) => (
            <Course title={item.shortTitle} Ftitle={item.fullTitle} num={item.id} />
          ))}
        </aside>
        <main>
          
          <Video title="" desc=""/>
        </main>
      </div>
      {/* <footer class="fotter">
        <div class="summury">
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.
          </p>
        </div>

        <div class="links">
          <ul>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Conect us</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
          </ul>
        </div>
      </footer> */}
    </div>
  );
}

export default Static_part;
