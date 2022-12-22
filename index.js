function scrollHere(id) {
  document
    .getElementById(id)
    .scrollIntoView({ alignToTop: true, behavior: "smooth" });
}

window.addEventListener("load", () => {
  var adjArray = ["Efficient", "Fast", "Secure", "Simple"],
    typed = new Typed("#adj", {
      strings: adjArray,
      typeSpeed: 20,
      showCursor: false,
      onComplete: (self) => {
        Object.assign(document.getElementById("adj").style, {
          color: "gold",
        });
        Object.assign(document.getElementById("title").style, {
          "font-size": "250%",
        });
        scrollHere("q");
        setTimeout(() => {
          Object.assign(document.getElementById("main-content").style, {
            "max-height": "200vh",
          });
          setTimeout(() => {
            scrollHere("head-quote");
            Object.assign(document.getElementById("main-content").style, {
              padding: "1em",
              "padding-bottom": "2em",
            });
            Object.assign(document.getElementById("rise").style, {
              color: "red",
            });
            setTimeout(() => {
              setTimeout(() => {
                scrollHere("look-like");
                anime({
                  targets: "#fsample",
                  width: ["0vw", "35vw"],
                  opacity: ["0", "1"],
                  easing: "easeInOutExpo",
                });
                setTimeout(() => {
                  scrollHere("sample-foot");
                  setTimeout(() => {
                    anime({
                      targets: "#ssample",
                      left: ["-100%", "0%"],
                      opacity: "100%",
                      easing: "easeInOutExpo",
                    });
                    setTimeout(() => {
                      scrollHere("sample-foot");
                      setTimeout(() => {
                        anime({
                          targets: "#ssample",
                          left: ["0%", "-102.8%"],
                          filter: "invert(1)",
                          easing: "easeInOutExpo",
                        });
                        anime({
                          targets: "#ssample p",
                          opacity: "0",
                          easing: "easeInOutExpo",
                        });
                        anime({
                          targets: "#fsample",
                          opacity: ["100%", "70%"],
                          easing: "easeInOutExpo",
                        });
                        setTimeout(() => {
                          anime({
                            targets: "#fsample",
                            opacity: ["70%", "50%"],
                            easing: "easeInOutExpo",
                          });
                          setTimeout(() => {
                            anime({
                              targets: "#fsample",
                              opacity: ["50%", "100%"],
                              easing: "easeInOutExpo",
                            });
                          }, 1000);
                        }, 1500);
                      }, 2500);
                    }, 4500);
                  }, 1200);
                }, 1550);
              }, 1500);

              typed = new Typed("#look-like", {
                strings: [
                  "and they look like...^1000 this.^2000",
                  "Compared to real stuff,^500 they look kinda^1000." +
                    "^1000.^1000. <strike>better</strike> <b>similar</b>,^1000 right?^1000",
                  "So the question is,^1000 how do we <b>differentiate</b> them?",
                ],
                smartBackspace: true,
                showCursor: false,
              });
            }, 1500);
          }, 1500);
        }, 1500);
      },
    });
});
