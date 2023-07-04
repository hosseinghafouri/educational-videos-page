import logo from "../logo.svg";
import Course from "./Course";
import Video from "./Video";
import "../styles/css/style.css";

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
          <Course title="توضیح کوتاه در باره سامانه رس آپ" />
          <Course title="توضیح بخش رستوران" />
          <Course title="توضیح کوتاه حسابداری" />
          <Course title="توضیح کوتاه در باره سامانه رس آپ" />
        </aside>
      <main>
          <Video title="توضیح کوتاه در باره رس آپ" />
        </main>
      </div>
      <footer class="fotter">
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
      </footer>
    </div>
  );
}

export default Static_part;
