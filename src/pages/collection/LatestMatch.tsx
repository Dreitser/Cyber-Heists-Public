// import sign from "../../utils/sign";

import usePhantom from "../../hooks/usePhantom";
import { ToastContainer, toast } from 'react-toastify';

function LatestMatch() {
  const { sign } = usePhantom();

  const signMessage = async () => {
    await sign();
    toast.success("You have signed successfully!");
  }

  return (
    <section className="latest-match-area latest-match-bg pt-150 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title title-style-three white-title text-center mb-70">
              <h2>
                <span>Collections</span>
              </h2>
              <p>
                Compete with 100 players on a remote island for winner takes
                showdown known issue where certain skin strategic
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="latest-match-box mb-30">
              <div className="latest-match-thumb">
                <img src="assets/img/images/latest_match_thumb01.jpg" alt="" />
              </div>
              <div className="tournament-schedule-content">
                <h3>
                  <a href="/#">
                    Forza <span>Horizon ii</span>
                  </a>
                </h3>
                <p>
                  Find tecology people for digital projects in public There are
                  many variations.
                </p>
                <div className="tournament-schedule-meta">
                  <h5>
                    price : <span>$125,00</span>
                  </h5>
                  <a style={{ cursor: "pointer" }} onClick={signMessage}>
                    Sign
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="latest-match-box mb-30">
              <div className="latest-match-thumb">
                <img src="assets/img/images/latest_match_thumb02.jpg" alt="" />
              </div>
              <div className="tournament-schedule-content">
                <h3>
                  <a href="/#">
                    shooting <span>land</span>
                  </a>
                </h3>
                <p>
                  Find tecology people for digital projects in public There are
                  many variations.
                </p>
                <div className="tournament-schedule-meta">
                  <h5>
                    price : <span>$127,00</span>
                  </h5>
                  <a style={{ cursor: "pointer" }} onClick={signMessage}>
                    Sign
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="latest-match-box mb-30">
              <div className="latest-match-thumb">
                <img src="assets/img/images/latest_match_thumb03.jpg" alt="" />
              </div>
              <div className="tournament-schedule-content">
                <h3>
                  <a href="/#">
                    Thanos <span>Sky ii</span>
                  </a>
                </h3>
                <p>
                  Find tecology people for digital projects in public There are
                  many variations.
                </p>
                <div className="tournament-schedule-meta">
                  <h5>
                    price : <span>$125,00</span>
                  </h5>
                  <a style={{ cursor: "pointer" }} onClick={signMessage}>
                    Sign
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="latest-match-box mb-30">
              <div className="latest-match-thumb">
                <img src="assets/img/images/latest_match_thumb04.jpg" alt="" />
              </div>
              <div className="tournament-schedule-content">
                <h3>
                  <a href="/#">
                    Call Of <span>Duty ii</span>
                  </a>
                </h3>
                <p>
                  Find tecology people for digital projects in public There are
                  many variations.
                </p>
                <div className="tournament-schedule-meta">
                  <h5>
                    price : <span>$125,00</span>
                  </h5>
                  <a style={{ cursor: "pointer" }} onClick={signMessage}>
                    Sign
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestMatch;
