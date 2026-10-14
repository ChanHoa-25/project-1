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

// Box User Quannity Section-1
const boxUserSection1 = document.querySelector(".section-1 .inner-form .inner-user");
if (boxUserSection1) {
  //Hiện box quanity
  const input = boxUserSection1.querySelector(".inner-input");
  input.addEventListener("focus", () => {
    boxUserSection1.classList.add("active");
  });
  //Ẩn box quantity
  document.addEventListener("click", (event) => {
    if (!boxUserSection1.contains(event.target)) {
      boxUserSection1.classList.remove("active");
    }
  });
  /* Hàm thêm số lượng vào ô input */
  const updateQuantityInput = () => {
    const listBoxNumber = boxUserSection1.querySelectorAll(".inner-count .inner-number");
    const listNumber = [];

    listBoxNumber.forEach((boxNumber) => {
      const number = parseInt(boxNumber.innerHTML);
      listNumber.push(number);
    });

    const value = `NL: ${listNumber[0]}, TE: ${listNumber[1]}, EB: ${listNumber[2]}`;

    input.value = value;
  };
  //Bắt sự kiện click nút up
  const listButtonUp = boxUserSection1.querySelectorAll(".inner-count .inner-up");
  listButtonUp.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.parentNode;
      const boxNumber = parent.querySelector(".inner-number");
      const number = parseInt(boxNumber.innerHTML);
      const numberUpadte = number + 1;
      boxNumber.innerHTML = numberUpadte;
      updateQuantityInput();
    });
  });
  //Sự kiện nút down
  const listButtonDown = boxUserSection1.querySelectorAll(".inner-count .inner-down");
  listButtonDown.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.parentNode;
      const boxNumber = parent.querySelector(".inner-number");
      const number = parseInt(boxNumber.innerHTML);
      if (number > 0) {
        const numberDown = number - 1;
        boxNumber.innerHTML = numberDown;
        updateQuantityInput();
      }
    });
  });
}

// End Box User Quannity Section-1
