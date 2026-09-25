document.addEventListener("DOMContentLoaded", () => {
  const BACKEND_URL = "http://localhost:3000";

  const escrolar = [
    { btnId: "sm", targetId: "saiba" },
    { btnId: "sn", targetId: "sobr" },
    { btnId: "jog", targetId: "jogar" },
    { btnId: "mais", targetId: "saiba" },
    { btnId: "nos", targetId: "sobr" },
    { btnId: "jogue", targetId: "jogar" },
  ];

  escrolar.forEach((item) => {
    const el = document.getElementById(item.btnId);
    const target = document.getElementById(item.targetId);

    if (el && target) {
      el.addEventListener("click", () => {
        target.scrollIntoView({ behavior: "smooth" });
      });
    }
  });

  const btnVer = document.getElementById("ver");
  const cardOculto = document.querySelectorAll(".card-oculto");

  if (btnVer) {
    btnVer.addEventListener("click", () => {
      cardOculto.forEach((card) => {
        card.classList.add("active");
      });
      btnVer.style.display = "none";
    });
  }

  const btnBaixar = document.getElementById("download");

  if (btnBaixar) {
    btnBaixar.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = ".apk/lillium.apk";
      link.download = "Lillium.appk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  const btnWeb = document.getElementById("net");

  if (btnWeb) {
    btnWeb.addEventListener("click", () => {
      window.location.href = "jogarweb.html";
    });
  }

  const redes = [
    { id: "email", url: `${BACKEND_URL}/api/redirect/email`, external: false },
    { id: "insta", url: `${BACKEND_URL}/api/redirect/insta`, external: true },
    { id: "ttk", url: `${BACKEND_URL}/api/redirect/ttk`, external: true },
    { id: "ytb", url: `${BACKEND_URL}/api/redirect/ytb`, external: true },
  ];

  redes.forEach((rede) => {
    const el = document.getElementById(rede.id);
    if (el) {
      el.style.cursor = "pointer";
      el.addEventListener("click", () => {
        if (rede.external) {
          window.open(rede.url, "blank");
        } else {
          window.location.href = rede.url;
        }
      });
    }
  });
});
