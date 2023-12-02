import { useState } from "react";
import thankYouSvg from "../src/assets/images/thank-you.svg";
import "animate.css";

function Rate() {
  const [click, setClick] = useState(false);
  const [selectedNum, setSelectedNum] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setClick(true);
  };

  const getNumber = (e) => {
    setSelectedNum(e.target.id);
  };

  if (click) {
    return (
      <>
        <main>
          <form className="container thank-you animate__animated animate__fadeIn">
            <img src={thankYouSvg} alt="" />
            <h3 className="status">Selected Number {selectedNum} out of 5</h3>
            <h2>Thank you</h2>
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </form>
        </main>
      </>
    );
  } else {
    return (
      <>
        <main>
          <div className="container">
            <form action="" onSubmit={handleSubmit}>
              <h2>How did we do?</h2>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
              <div className="btn-wrapper">
                {[1, 2, 3, 4, 5].map((number) => {
                  return (
                    <button
                      id={number}
                      key={number}
                      type="button"
                      onClick={getNumber}
                    >
                      {number}
                    </button>
                  );
                })}
              </div>
              <button type="submit" className="primary-btn">
                Submit
              </button>
            </form>
          </div>
        </main>
      </>
    );
  }
}

export default Rate;
