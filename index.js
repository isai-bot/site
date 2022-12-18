function scrollHere(id) {
  document
    .getElementById(id)
    .scrollIntoView({ alignToTop: true, behavior: "smooth" });
}

var adjArray = ["Efficient", "Fast", "Secure", "Simple"],
  typed = new Typed("#adj", {
    strings: adjArray,
    typeSpeed: 40,
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
          Object.assign(document.getElementById("main-content").style, {
            padding: "1em",
            "padding-bottom": "2em",
          });
          Object.assign(document.getElementById("rise").style, {
            color: "red",
          });
          scrollHere("rise");
          setTimeout(() => {
            setTimeout(() => {
              // NOTE: First "this."
              scrollHere("look-like");
              setTimeout(() => {
                // NOTE: Then "kinda..."
                setTimeout(() => {
                  // NOTE: Then "similar"
                  scrollHere("look-like");
                }, 1500);
              }, 3500);
            }, 3000);

            typed = new Typed("#look-like", {
              strings: [
                "and they look like...^1000 this.^2000",
                "and they look like... this.<br/>" +
                  " Compared to real stuff,^500 they look kinda^1000." +
                  "^1000.^1000. <b>similar</b>,^1000 right?^1000",
              ],
              smartBackspace: true,
              showCursor: false,
            });
          }, 1500);
        }, 1500);
      }, 1500);
    },
  });
