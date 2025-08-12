"use client";
import TypeWriter from "@/components/common/TypeWriter";
import Image from "next/image";
export default function Hero1() {
  return (
    <>
      {/* End Background Shape */}
      <div className="container position-relative min-height-100vh d-flex align-items-center pt-100 pb-100 pt-md-120 pb-md-120">
        {/* Home Section Content */}
        <div className="home-content text-start">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-0 d-flex align-items-center mb-md-60 mb-sm-30">
              <div className="w-100 text-center text-lg-start">
                <h1 className="hs-title-10 mb-40 mb-sm-20 wow fadeInUp">
                  Launch Fast. Scale Smart. Your MVP, Ready in 60 Days
                </h1>
                <div className="row">
                  <div className="col-lg-10">
                    <p
                      className="section-descr mb-50 mb-sm-40 wow fadeInUp"
                      data-wow-delay="0.15s"
                    >
                      AI helps you start. We help you grow.
                      At Cookietech, we guide your journey from idea to scalable product—deploying, monitoring, and improving every step of the way
                    </p>
                  </div>
                </div>
                <div
                  className="local-scroll wow fadeInUp wch-unset"
                  data-wow-delay="0.3s"
                  data-wow-offset={0}
                >
                  <a
                    href="#contact"
                    className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10 me-3"
                  >
                    <span>🎯 60-Min Free Call</span>
                  </a>

                  <a
                    href="#ai-builder"
                    className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10"
                  >
                    <span>🤖 Try AI Builder</span>
                  </a>

                </div>
              </div>
            </div>
            {/* End Home Section Text */}
            {/* Images */}
            <div className="col-lg-6 d-flex align-items-center">
              <div
                className="w-100 ps-xl-3 wow fadeInLeft"
                data-wow-delay="0.15s"
              >
                <div className="composition-4">
                  <div className="composition-4-decoration opacity-065">
                    <Image
                      src="/assets/images/demo-slick/decoration-1.svg"
                      alt=""
                      width={228}
                      height={228}
                    />
                  </div>
                  <div className="composition-4-image-1">
                    <div className="composition-4-image-1-inner">
                      <Image
                        src="/assets/images/demo-slick/ct-image-1.jpg"
                        alt="Image Description"
                        width={850}
                        height={834}
                      />
                    </div>
                  </div>
                  <div className="composition-4-image-2">
                    <div className="composition-4-image-2-inner">
                      <Image
                        src="/assets/images/demo-slick/ct-image-2.jpg"
                        alt="Image Description"
                        width={570}
                        height={598}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Images */}
          </div>
        </div>
        {/* End Home Section Content */}
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap-type-1 wow fadeInUp"
          data-wow-offset={0}
        >
          <div className="container text-center text-lg-start">
            <a href="#about" className="scroll-down-1">
              <div className="scroll-down-1-icon">
                <i className="mi-arrow-down" />
              </div>
              <div className="scroll-down-1-text">Scroll Down</div>
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
      </div>
    </>
  );
}
