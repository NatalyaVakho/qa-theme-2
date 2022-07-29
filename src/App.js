import "./App.scss";
import { Header } from "./components";
import { Footer } from "./components";
import banner from "./assets/images/goats.jpg";
import pic1 from "./assets/images/download.jpg";
import pic2 from "./assets/images/download-1.jpg";
import pic3 from "./assets/images/download 2.jpg";
import pic4 from "./assets/images/download-1 2.jpg";
import pic5 from "./assets/images/download-3.jpg";
import pic6 from "./assets/images/download-2.jpg";
import pic7 from "./assets/images/bbc.jpg";
import client1 from "./assets/images/client-1.jpg";
import client2 from "./assets/images/client-2.jpg";
import client3 from "./assets/images/client-3.jpg";
import client4 from "./assets/images/client-5.jpg";
import client5 from "./assets/images/client-4.jpg";

const App = () => {
  return (
    <div className="project_wrapper">
      <Header />
      <main className="main">
        <div className="main__section">
          <div className="banner">
            <span className="banner__heading">Aliquam pharetra vulputate</span>
            <span className="banner__text">
              Vivamus est mauris, sollicitudin ut ipsum pharetra, porta rutrum
              turpis. Suspendisse sollicitudin quam eget condimentum posuere. In
              auctor vel mi porta commodo. Vestibulum mattis fringilla tempus.
              Etiam eu consectetur nisi. Aenean blandit sodales euismod. In hac
              habitasse platea dictumst.
            </span>
            <div className="banner__banner-button">
              <span className="purple_button_text">READ MORE</span>
            </div>
            <img className="banner__goats" src={banner} alt="goats"></img>
          </div>
          <div className="posts">
            <div className="posts__top">
              <div className="block1">
                <div className="block-header">
                  <span className="block-header__color-circle color"></span>
                  <span className="block-header__color-rectangle color"></span>
                  <span className="block-header__block-name">ABOUT SUPER LOGO</span>
                </div>
                <div className="block-main">
                  <div className="block-main__picture">
                    <span className="block-main__border"></span>
                    <img className="block-main__dog" src={pic1} alt=""></img>
                  </div>
                  <p className="block-main__long_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quam massa, dignissim at nisi nec, iaculis molestie leo.
                    Aenean hendrerit pretium enim quis rutrum. Pellentesque
                    mattis sem a efficitur auctor. Sed vulputate vitae dui non
                    fermentum. Donec non sem dignissim, tincidunt arcu eget,
                    posuere tellus. Quisque consectetur diam id faucibus
                    sagittis. Praesent placerat, diam non sollicitudin suscipit,
                    eros erat
                  </p>
                  <div className="block-main__inscription white">Read more...</div>
                </div>
              </div>
              <div className="block2">
                <div className="block-header">
                  <span className="block-header__color-circle"></span>
                  <span className="block-header__color-rectangle"></span>
                  <span className="block-header__block-name">SOME WORDS OUR CEO</span>
                </div>
                <div className="block-main">
                  <div className="block-main__picture">
                    <span className="block-main__border"></span>
                    <img className="jobs" src={pic2} alt=""></img>
                  </div>
                  <p className="block-main__long_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quam massa, dignissim at nisi nec, iaculis molestie leo.
                    Aenean hendrerit pretium enim quis rutrum. Pellentesque
                    mattis sem a efficitur auctor. Sed vulputate vitae dui non
                    fermentum. Donec non sem dignissim, tincidunt arcu eget,
                    posuere tellus. Quisque consectetur diam id faucibus
                    sagittis. Praesent placerat, diam non sollicitudin suscipit,
                    eros erat
                  </p>
                  <div className="block-main__inscription">Steve Jobs, CEO</div>
                </div>
              </div>
            </div>
            <div className="posts__bottom">
              <div className="block3">
                <div className="block-header">
                  <span className="block-header__color-circle color"></span>
                  <span className="block-header__color-rectangle color"></span>
                  <span className="block-header__block-name">ABOUT SUPER LOGO</span>
                </div>
                <div className="block-main">
                  <div className="block-main__picture">
                    <span className="block-main__border"></span>
                    <img className="lori" src={pic3} alt=""></img>
                  </div>
                  <p className="block-main__long_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quam massa, dignissim at nisi nec, iaculis molestie leo.
                    Aenean hendrerit pretium enim quis rutrum. Pellentesque
                    mattis sem a efficitur auctor. Sed vulputate vitae dui non
                    fermentum. Donec non sem dignissim, tincidunt arcu eget,
                    posuere tellus. Quisque consectetur diam id faucibus
                    sagittis. Praesent placerat, diam non sollicitudin suscipit,
                    eros erat
                  </p>
                  <div className="block-main__inscription white">Read more...</div>
                </div>
              </div>
              <div className="block4">
                <div className="block-header">
                  <span className="block-header__color-circle"></span>
                  <span className="block-header__color-rectangle"></span>
                  <span className="block-header__block-name">SOME WORDS OUR CEO</span>
                </div>
                <div className="block-main">
                  <div className="block-main__picture">
                    <span className="block-main__border"></span>
                    <img className="girl" src={pic4} alt=""></img>
                  </div>
                  <p className="block-main__long_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quam massa, dignissim at nisi nec, iaculis molestie leo.
                    Aenean hendrerit pretium enim quis rutrum. Pellentesque
                    mattis sem a efficitur auctor. Sed vulputate vitae dui non
                    fermentum. Donec non sem dignissim, tincidunt arcu eget,
                    posuere tellus. Quisque consectetur diam id faucibus
                    sagittis. Praesent placerat, diam non sollicitudin suscipit,
                    eros erat
                  </p>
                  <div className="block-main__inscription">Steve Jobs, CEO</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-posts">
            <div className="bottom-posts__bottom-services">
              <div className="bottom_block_header">
                <span className="block-header__color-circle color"></span>
                <span className="block-header__color-rectangle color size"></span>
                <span className="block-header__block-name">SERVICES</span>
              </div>
              <div className="bottom_block_main">
                <p className="block-main__long_text distance text-size">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quam massa, dignissim at nisi nec, iaculis molestie leo.
                  Aenean hendrerit pretium enim quis rutrum. Pellentesque mattis
                  sem a efficitur auctor. Sed vulputate vitae dui non fermentum.
                  Donec non sem dignissim, tincidunt arcu eget, posuere tellus.
                  Quisque consectetur diam id faucibus sagittis. Praesent
                  placerat, diam non sollicitudin suscipit, eros erat
                </p>
                <div className="block-main__inscription distance white dist-top">Read more...</div>
              </div>
            </div>
            <div className="bottom-posts__bottom-middle">
              <div className="bottom_block_header">
                <span className="block-header__color-circle"></span>
                <span className="block-header__color-rectangle size"></span>
                <span className="block-header__block-name">RECENT POST</span>
              </div>
              <div className="bottom_block_main">
                <div className="part1">
                  <div className="small_picture">
                    <span className="small_border"></span>
                    <img className="car" src={pic5} alt=""></img>
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
                    <img className="phone" src={pic6} alt=""></img>
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
                    <img className="bbc" src={pic7} alt=""></img>
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
            <div className="bottom-posts__bottom-services">
              <div className="bottom_block_header">
                <span className="block-header__color-circle color"></span>
                <span className="block-header__color-rectangle color size"></span>
                <span className="block-header__block-name">SERVICES</span>
              </div>
              <div className="bottom_block_main">
                <p className="block-main__long_text distance text-size">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quam massa, dignissim at nisi nec, iaculis molestie leo.
                  Aenean hendrerit pretium enim quis rutrum. Pellentesque mattis
                  sem a efficitur auctor. Sed vulputate vitae dui non fermentum.
                  Donec non sem dignissim, tincidunt arcu eget, posuere tellus.
                  Quisque consectetur diam id faucibus sagittis. Praesent
                  placerat, diam non sollicitudin suscipit, eros erat
                </p>
                <div className="block-main__inscription distance white dist-top">Read more...</div>
              </div>
            </div>
          </div>
          <div className="clients-block">
            <div className="clients-block__cbheader">
              <span className="block-header__color-circle"></span>
              <span className="block-header__color-rectangle clients"></span>
              <span className="block-header__block-name">CLIENTS</span>
            </div>
            <div className="clients-block__main-clients">
              <img className="pic1" src={client1} alt=""></img>
              <img className="pic2" src={client2} alt=""></img>
              <img className="pic3" src={client3} alt=""></img>
              <img className="pic2" src={client4} alt=""></img>
              <img className="pic4" src={client5} alt=""></img>
            </div>
          </div>
        </div>
      </main> 
      <Footer />
    </div>
  );
};

export default App;
