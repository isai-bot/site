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
        "font-size": "300%",
      });
      Object.assign(document.getElementById("main-content").style, {
        "max-height": "15em",
        padding: "1em",
        "padding-bottom": "2em",
      });
      setTimeout(() => {
        Object.assign(document.getElementById("rise").style, {
          color: "red",
        });
      }, 1500);
    },
  });
