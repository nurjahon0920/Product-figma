import React from "react";
import "./App.scss";
function App() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">
              <img src="./src/assets/header/logo.svg" alt="Logo" />
              <span>Product</span>
            </a>
            <div className="nav-links">
              <a href="#" className="nav-link">
                Product
              </a>
              <a href="#" className="nav-link">
                Custimers
              </a>
              <a href="#" className="nav-link">
                Pricing
              </a>
              <a href="#" className="nav-link">
                Resources
              </a>
              <button className="sign sign-in">Sign in</button>
              <button className="sign sign-up">Sign up</button>
              <button className="btn-dark">
                <img src="./src/assets/header/moon.svg" alt="Moon" />
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section className="sec1">
          <div className="container">
            <div className="sec1-content">
              <div className="sec1-text">
                <h1>Work at the speed of thought</h1>
                <p>
                  Tools, tutorials, design and innovation experts, all in one
                  place! The most intuitive way to imagine your next user
                  experience.
                </p>
                <div className="sec1-btns">
                  <button>Get started</button>
                  <a href="#">
                    <img src="./src/assets/sec1/play.svg" alt="Play" />
                    <span>Watch the video</span>
                  </a>
                </div>
              </div>
              <div className="sec1-img">
                <img src="./src/assets/sec1/sec1-img.png" alt="sec1 img" />
              </div>
            </div>
          </div>
        </section>
        <section className="sec2">
          <div className="container">
            <h2>Product was Built Specifically for You</h2>
            <div className="cards">
              <div className="card">
                <img src="./src/assets/sec2/sec2-icon1.svg" alt="Icon bor" />
                <h3>First click tests</h3>
                <p>While most people enjoy casino gambling,</p>
              </div>
              <div className="card">
                <img src="./src/assets/sec2/sec2-icon2.svg" alt="Icon bor" />
                <h3>Design surveys</h3>
                <p>Sports betting, lottery and bingo playing for the fun</p>
              </div>
              <div className="card">
                <img src="./src/assets/sec2/sec2-icon3.svg" alt="Icon bor" />
                <h3>Preference tests</h3>
                <p>The Myspace page defines the individual.</p>
              </div>
              <div className="card">
                <img src="./src/assets/sec2/sec2-icon4.svg" alt="Icon bor" />
                <h3>Five second tests</h3>
                <p>
                  Personal choices and the overall personality of the person.
                </p>
              </div>
            </div>
            <button>SIGN UP NOW</button>
          </div>
        </section>
        <section className="sec3">
          <div className="container">
            <div className="sec3-text">
              <h2>Contents Strategies</h2>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
            </div>
            <div className="sec3-cards">
              <div className="card">
                <img src="./src/assets/sec3/sec3-img1.png" alt="card rasmi" />
                <div className="card-text">
                  <p>
                    By <b>Wahid Ari</b> | 03 March 2019
                  </p>
                  <h3>Increasing Prosperity With Positive Thinking</h3>
                </div>
              </div>
              <div className="card">
                <img src="./src/assets/sec3/sec3-img2.png" alt="card rasmi" />
                <div className="card-text">
                  <p>
                    By <b>Wahid Ari</b> | 03 March 2019
                  </p>
                  <h3>Motivation Is The First Step To Success</h3>
                </div>
              </div>
              <div className="card">
                <img src="./src/assets/sec3/sec3-img3.png" alt="card rasmi" />
                <div className="card-text">
                  <p>
                    By <b>Wahid Ari</b> | 03 March 2019
                  </p>
                  <h3>Success Steps For Your Personal Or Business</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec4">
          <div className="container">
            <div className="sec4-text">
              <h2>Price Table</h2>
              <p>We offer competitive price</p>
            </div>
            <div className="sec4-cards">
              <div className="sec4-card">
                <h3>Free</h3>
                <p className="sec4-card-top">Brief price description</p>
                <div className="sec4_card_price">
                  <h1>0</h1>
                  <div className="sec4_card_price_right">
                    <h2>$</h2>
                    <p>Per / month</p>
                  </div>
                </div>
                <p className="uchqator">
                  <p>Only 2 Operators</p>
                  <p>Notifications</p>
                  <p>Landing Pages</p>
                </p>
                <button>Order Now</button>
              </div>
              <div className="sec4-card">
                <h3>Standard</h3>
                <p className="sec4-card-top">Brief price description</p>
                <div className="sec4_card_price">
                  <h1>5</h1>
                  <div className="sec4_card_price_right">
                    <h2>$</h2>
                    <p>Per / month</p>
                  </div>
                </div>
                <p className="uchqator">
                  <p>5+ Operators</p>
                  <p>Notifications</p>
                  <p>Landing Pages</p>
                </p>
                <button>Order Now</button>
              </div>
              <div className="sec4-card">
                <h3>Premium</h3>
                <p className="sec4-card-top">Brief price description</p>
                <div className="sec4_card_price">
                  <h1>10</h1>
                  <div className="sec4_card_price_right">
                    <h2>$</h2>
                    <p>Per / month</p>
                  </div>
                </div>
                <p className="uchqator">
                  <p>10+ Operators</p>
                  <p>Notifications</p>
                  <p>Landing Pages</p>
                </p>
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </section>
        <section className="sec5">
          <div className="container">
            <h2>What Clients Say</h2>
            <h3 className="sec5_top_h3">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </h3>
            <div className="cards">
              <div className="card">
                <img
                  src="./src/assets/sec5/4talik-yulduz.png"
                  alt="yulduzlar"
                  className="yulduzlar"
                />
                <p>
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <div className="sec5_group">
                  <img
                    src="./src/assets/sec5/sec5-img1.png"
                    alt="Wahid Ari"
                    className="img2"
                  />
                  <div className="sec5_group_right">
                    <h4>Wahid Ari</h4>
                    <h5>Designer</h5>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  src="./src/assets/sec5/4talik-yulduz.png"
                  alt="yulduzlar"
                  className="yulduzlar"
                />
                <p>
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <div className="sec5_group">
                  <img
                    src="./src/assets/sec5/sec5-img2.png"
                    alt="Wahid Ari"
                    className="img2"
                  />
                  <div className="sec5_group_right">
                    <h4>Wahid Ari</h4>
                    <h5>Designer</h5>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  src="./src/assets/sec5/4talik-yulduz.png"
                  alt="yulduzlar"
                  className="yulduzlar"
                />
                <p>
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <div className="sec5_group">
                  <img
                    src="./src/assets/sec5/sec5-img3.png"
                    alt="Wahid Ari"
                    className="img2"
                  />
                  <div className="sec5_group_right">
                    <h4>Wahid Ari</h4>
                    <h5>Designer</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec6">
          <div className="container">
            <div className="sec6_text">
              <h1>Join 100 Compannies who boost their business with Product</h1>
              <button>Get This</button>
            </div>
            <img src="./src/assets/sec6/sec6-img.png" alt="" />
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
