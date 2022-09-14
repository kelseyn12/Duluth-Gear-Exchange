import React from "react"

function Newsletter() {
  return (
    <>
      {/* Begin Mailchimp Signup Form */}
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
        rel="stylesheet"
        type="text/css"
      />
      <div id="mc_embed_signup">
        <form
          action="https://greatlakesgearexchange.us20.list-manage.com/subscribe/post?u=8cbc5704103be947583a230a3&id=a951d36437&f_id=002f4be6f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate=""
        >
          <div id="mc_embed_signup_scroll">
            <h1 className="signUp">SIGN UP FOR OUR NEWSLETTER</h1>
            <div className="indicates-required">
              <span className="asterisk">*</span>{" "}
              <span style={{ color: "#042F4A" }}>INDICATES REQUIRED</span>
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                <span style={{ color: "#042F4A" }}>EMAIL ADDRESS</span>{" "}
                <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                defaultValue=""
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required=""
              />
            </div>
            <div hidden={true}>
              <input type="hidden" name="tags" defaultValue="94275,14431" />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              />
            </div>{" "}
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_8cbc5704103be947583a230a3_a951d36437"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="SUBMIT"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
      {/*End mc_embed_signup*/}
    </>
  )
}

export default Newsletter
