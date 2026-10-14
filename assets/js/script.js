// Menu Menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-menu-mobile");

if (buttonMenuMobile) {
  const menu = document.querySelector("header .inner-menu");
  //Khi click vào button mở menu
  buttonMenuMobile.addEventListener("click", () => {
    menu.classList.add("active");
  });
  //Khi click vào overlay đóng menu
  const overlay = document.querySelector(".header .inner-overlay");
  if (overlay) {
    overlay.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  }
  //Click vào icon mũi tên mở sub menu
  const listButtonSubMenu = menu.querySelectorAll("ul > li > i");
  listButtonSubMenu.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentNode.classList.toggle("active");
    });
  });
}
//End Menu Mobile

// Box Address Section-1
const boxAddressSection1 = document.querySelector(".section-1 .inner-form .inner-address");
if (boxAddressSection1) {
  // Ẩn hiện box suggest
  const input = boxAddressSection1.querySelector(".inner-input");

  input.addEventListener("focus", () => {
    boxAddressSection1.classList.add("active");
  });
  input.addEventListener("blur", () => {
    boxAddressSection1.classList.remove("active");
  });

  //Sự kiện click vào từng tiem
  const listItem = document.querySelectorAll(".section-1 .inner-suggest-list .inner-item");
  listItem.forEach((item) => {
    item.addEventListener("mousedown", () => {
      const title = item.querySelector(".inner-item-title").innerHTML.trim();
      input.value = title;
    });
  });
}

//End Box Address Section-1
