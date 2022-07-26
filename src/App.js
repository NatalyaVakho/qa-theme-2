import "./App.css";
import banner from "./assets/images/goats.jpg";
import pic1 from "./assets/images/download.jpg";
import pic2 from "./assets/images/download-1.jpg";
import pic3 from "./assets/images/download 2.jpg";
import pic4 from "./assets/images/download-1 2.jpg";
import pic5 from "./assets/images/download-3.jpg";
import pic6 from "./assets/images/download-2.jpg";
import pic7 from "./assets/images/bbc.jpg";
import client1 from "./assets/images/client-1.jpg"
import client2 from "./assets/images/client-2.jpg"
import client3 from "./assets/images/client-3.jpg"
import client4 from "./assets/images/client-5.jpg"
import client5 from "./assets/images/client-4.jpg"

const App = () => {
  return (
    <div className="project_wrapper">
      <header className="header__wrapper">
        <div className="header_section">
          <div className="top_part">
            <div className="figure">
              <span className="circle"></span>
              <span className="logo">QA LOGO</span>
            </div>
            <div className="search">
              <span className="input"></span>
              <span className="square"></span>
              <span className="text">SEARCH</span>
            </div>
          </div>
          <div className="bottom_part">
            <div className="menu__option active">
              <span className="option_text active_option">HOME</span>
            </div>
            <div className="menu__option">
              <span className="option_text">ABOUT US</span>
            </div>
            <div className="menu__option">
              <span className="option_text">SERVICE</span>
            </div>
            <div className="menu__option">
              <span className="option_text">PARTNERS</span>
            </div>
            <div className="menu__option">
              <span className="option_text">CUSTOMERS</span>
            </div>
            <div className="menu__option">
              <span className="option_text">PROJECT</span>
            </div>
            <div className="menu__option">
              <span className="option_text">CAREERS</span>
            </div>
            <div className="menu__option">
              <span className="option_text">CONTACT</span>
            </div>
          </div>
        </div>
      </header>
      <main className="main_wrapper">
        <div className="main_section">
          <div className="banner">
            <h1>Aliquam pharetra vulputate</h1>
            <h2>
              Vivamus est mauris, sollicitudin ut ipsum pharetra, porta rutrum
              turpis. Suspendisse sollicitudin quam eget condimentum posuere. In
              auctor vel mi porta commodo. Vestibulum mattis fringilla tempus.
              Etiam eu consectetur nisi. Aenean blandit sodales euismod. In hac
              habitasse platea dictumst.
            </h2>
            <div className="banner_button">
              <span className="purple_button_text">READ MORE</span>
            </div>
            <img className="goats" src={banner} alt="goats"></img>
          </div>
          <div className="top_text_blocks">
            <div className="top">
              <div className="block1">
                <div className="block_header">
                  <span className="color_circle"></span>
                  <span className="color_rectangle"></span>
                  <span className="block_name">ABOUT SUPER LOGO</span>
                </div>
                <div className="block_main">
                  <div className="picture">
                    <span className="border"></span>
                    <img src={pic1} alt=""></img>
                  </div>
                  <p className="long_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quam massa, dignissim at nisi nec, iaculis molestie leo.
                    Aenean hendrerit pretium enim quis rutrum. Pellentesque
                    mattis sem a efficitur auctor. Sed vulputate vitae dui non
                    fermentum. Donec non sem dignissim, tincidunt arcu eget,
                    posuere tellus. Quisque consectetur diam id faucibus
                    sagittis. Praesent placerat, diam non sollicitudin suscipit,
                    eros erat
                  </p>
                  <div className="inscription underline">Read more...</div>
                </div>
              </div>
              <div className="block2">
                <div className="block_header">
                  <span className="color_circle color"></span>
                  <span className="color_rectangle color"></span>
                  <span className="block_name">SOME WORDS OUR CEO</span>
                </div>
                <div className="block_main">
                  <div className="picture">
                    <span className="border"></span>
                    <img src={pic2} alt=""></img>
                  </div>
                  <p className="long_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quam massa, dignissim at nisi nec, iaculis molestie leo.
                    Aenean hendrerit pretium enim quis rutrum. Pellentesque
                    mattis sem a efficitur auctor. Sed vulputate vitae dui non
                    fermentum. Donec non sem dignissim, tincidunt arcu eget,
                    posuere tellus. Quisque consectetur diam id faucibus
                    sagittis. Praesent placerat, diam non sollicitudin suscipit,
                    eros erat
                  </p>
                  <div className="inscription">Steve Jobs, CEO</div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="block3">
                <div className="block_header">
                  <span className="color_circle color"></span>
                  <span className="color_rectangle color"></span>
                  <span className="block_name">ABOUT SUPER LOGO</span>
                </div>
                <div className="block_main">
                  <div className="picture">
                    <span className="border"></span>
                    <img src={pic3} alt=""></img>
                  </div>
                  <p className="long_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quam massa, dignissim at nisi nec, iaculis molestie leo.
                    Aenean hendrerit pretium enim quis rutrum. Pellentesque
                    mattis sem a efficitur auctor. Sed vulputate vitae dui non
                    fermentum. Donec non sem dignissim, tincidunt arcu eget,
                    posuere tellus. Quisque consectetur diam id faucibus
                    sagittis. Praesent placerat, diam non sollicitudin suscipit,
                    eros erat
                  </p>
                  <div className="inscription white">Read more...</div>
                </div>
              </div>
              <div className="block4">
                <div className="block_header">
                  <span className="color_circle"></span>
                  <span className="color_rectangle"></span>
                  <span className="block_name">SOME WORDS OUR CEO</span>
                </div>
                <div className="block_main">
                  <div className="picture">
                    <span className="border"></span>
                    <img src={pic4} alt=""></img>
                  </div>
                  <p className="long_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quam massa, dignissim at nisi nec, iaculis molestie leo.
                    Aenean hendrerit pretium enim quis rutrum. Pellentesque
                    mattis sem a efficitur auctor. Sed vulputate vitae dui non
                    fermentum. Donec non sem dignissim, tincidunt arcu eget,
                    posuere tellus. Quisque consectetur diam id faucibus
                    sagittis. Praesent placerat, diam non sollicitudin suscipit,
                    eros erat
                  </p>
                  <div className="inscription">Steve Jobs, CEO</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_text_blocks">
            <div className="bottom_left">
              <div className="bottom_block_header">
                <span className="color_circle color"></span>
                <span className="color_rectangle color size"></span>
                <span className="block_name">SERVICES</span>
              </div>
              <div className="bottom_block_main">
                <p className="long_text distance">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quam massa, dignissim at nisi nec, iaculis molestie leo.
                  Aenean hendrerit pretium enim quis rutrum. Pellentesque mattis
                  sem a efficitur auctor. Sed vulputate vitae dui non fermentum.
                  Donec non sem dignissim, tincidunt arcu eget, posuere tellus.
                  Quisque consectetur diam id faucibus sagittis. Praesent
                  placerat, diam non sollicitudin suscipit, eros erat
                </p>
                <div className="inscription distance white">Read more...</div>
              </div>
            </div>
            <div className="bottom_middle">
              <div className="bottom_block_header">
                <span className="color_circle"></span>
                <span className="color_rectangle size"></span>
                <span className="block_name">RECENT POST</span>
              </div>
              <div className="bottom_block_main">
                <div className="part1">
                  <div className="small_picture">
                    <span className="small_border"></span>
                    <img src={pic5} alt=""></img>
                  </div>
                  <div className="small_text">
                    <h3>LOREM IPSUM</h3>
                    <p className="short_text">
                      Aenean hendrerit pretium enim quis rutrum. Pellentesque
                      mattis sem a efficitur auctor.
                    </p>
                  </div>
                </div>
                <div className="part2">
                  <div className="small_picture">
                    <span className="small_border"></span>
                    <img src={pic6} alt=""></img>
                  </div>
                  <div className="small_text">
                    <h3>LOREM IPSUM</h3>
                    <p className="short_text">
                      Aenean hendrerit pretium enim quis rutrum. Pellentesque
                      mattis sem a efficitur auctor.
                    </p>
                  </div>
                </div>
                <div className="part3">
                  <div className="small_picture">
                    <span className="small_border"></span>
                    <img src={pic7} alt=""></img>
                  </div>
                  <div className="small_text">
                    <h3>LOREM IPSUM</h3>
                    <p className="short_text">
                      Aenean hendrerit pretium enim quis rutrum. Pellentesque
                      mattis sem a efficitur auctor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom_right">
              <div className="bottom_block_header">
                <span className="color_circle color"></span>
                <span className="color_rectangle color size"></span>
                <span className="block_name">SERVICES</span>
              </div>
              <div className="bottom_block_main">
                <p className="long_text distance">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quam massa, dignissim at nisi nec, iaculis molestie leo.
                  Aenean hendrerit pretium enim quis rutrum. Pellentesque mattis
                  sem a efficitur auctor. Sed vulputate vitae dui non fermentum.
                  Donec non sem dignissim, tincidunt arcu eget, posuere tellus.
                  Quisque consectetur diam id faucibus sagittis. Praesent
                  placerat, diam non sollicitudin suscipit, eros erat
                </p>
                <div className="inscription distance white">Read more...</div>
              </div>
            </div>
          </div>
          <div className="clients_block">
            <div className="clients_block_header">
              <span className="color_circle"></span>
              <span className="color_rectangle clients"></span>
              <span className="block_name">CLIENTS</span>
            </div>
            <div className="main_clients">
              <img className="pic1" src={client1} alt=""></img>
              <img className="pic2" src={client2} alt=""></img>
              <img className="pic3" src={client3} alt=""></img>
              <img className="pic2" src={client4} alt=""></img>
              <img className="pic4" src={client5} alt=""></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
