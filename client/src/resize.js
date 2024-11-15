window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 600) {
      document.body.style.fontSize = "12px";
    } else if (screenWidth <= 1024) {
      document.body.style.fontSize = "14px";
    } else {
      document.body.style.fontSize = "16px";
    }
  });