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

// Clock Expire Section-2
const clockExpire = document.querySelector("[clock-expire]");
if (clockExpire) {
  const expireDateTimeString = clockExpire.getAttribute("clock-expire");
  console.log(expireDateTimeString);

  //Chuyển đổi chuỗi thời gian thành đối tượng date
  const expireDateTime = new Date(expireDateTimeString);
  const updateClock = () => {
    const now = new Date();
    const remaningTime = expireDateTime - now; //quy về đơn vị mili giây
    if (remaningTime > 0) {
      //Tính số ngày
      const days = Math.floor(remaningTime / (24 * 60 * 60 * 1000));

      //Tính số giờ
      const hours = Math.floor((remaningTime / (60 * 60 * 100)) % 24);

      //Tính số phút
      const minutes = Math.floor((remaningTime / (60 * 100)) % 60);

      //Tính số giây
      const seconds = Math.floor((remaningTime / 1000) % 60);

      const listBoxNumber = clockExpire.querySelectorAll(".inner-number");
      listBoxNumber[0].innerHTML = `${days}`.padStart(2, "0");
      listBoxNumber[1].innerHTML = `${hours}`.padStart(2, "0");
      listBoxNumber[2].innerHTML = `${minutes}`.padStart(2, "0");
      listBoxNumber[3].innerHTML = `${seconds}`.padStart(2, "0");
    } else {
      clearInterval(intervalClock);
    }
  };
  // Gọi hàm cập nhật đồng hồ sau mỗi giây
  const intervalClock = setInterval(updateClock, 1000);
}
//End Clock Expire Section-2

//Box Fitter Mobile Section-9
const buttonFitterMobile = document.querySelector(".section-9 .inner-right .inner-fitter-mobile");
if (buttonFitterMobile) {
  const boxLeft = document.querySelector(".section-9 .inner-left");
  buttonFitterMobile.addEventListener("click", () => {
    boxLeft.classList.add("active");
  });

  const overlay = document.querySelector(".section-9 .inner-left .inner-overlay");
  overlay.addEventListener("click", () => {
    boxLeft.classList.remove("active");
  });
}
//End Box Fitter Mobile Section-9

//Box Tour Infor
const boxTourInfor = document.querySelector(".box-tour-infor");
if (boxTourInfor) {
  const buttonReadMore = boxTourInfor.querySelector(".inner-read-more button");
  buttonReadMore.addEventListener("click", () => {
    if (boxTourInfor.classList.contains("active")) {
      boxTourInfor.classList.remove("active");
      buttonReadMore.innerHTML = `Xem tất cả`;
    } else {
      boxTourInfor.classList.add("active");
      buttonReadMore.innerHTML = `Ẩn bớt`;
    }
  });
}
// End Box Tour Infor

//Khởi tạo thư viện AOS
AOS.init();
