//swiper's Codes
const swiper = new Swiper(".swiper1", {
  loop: true,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 2000
  }
});

const swiper2 = new Swiper(".swiper2", {
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 3000
  }
});

const swiper3 = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper4 = new Swiper(".mySwiper-2", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 90,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

//Hamburger menu
$(document).ready(function () {
  $(".btnmenu").click(function () {
    $(".casecademenu").toggleClass("d-none");
  });
  $(".casecademenu a:not([href])").click(function () {
    event.preventDefault();
    $(this).toggleClass("activea");
    $(this).next().toggleClass("activeul");
  });
});

//Add to basket and SwalAlert
let cartCount = 0;
function addToCart(productNumber) {
  cartCount++;
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.innerText = cartCount;
  Swal.fire({
    title: "به سبد خرید اضافه شد!",
    icon: "success",
    timer: 3000,
    timerProgressBar: true,
    confirmButtonText: "ادامه خرید"
  });
}

//Contact Us submit
document.addEventListener("DOMContentLoaded", function () {
  var submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", function () {
    validateForm();
  });
  function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    var numberInput = document.getElementById("number");

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");
    var numberError = document.getElementById("numberError");

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    numberError.textContent = "";

    // Validate Name
    if (nameInput.value.trim() === "") {
      nameError.textContent = "نام و نام خانوادگی خود را وارد کنید !";
    }
    // Validate Email
    if (emailInput.value.trim() === "") {
      emailError.textContent = "ایمیل خود را وارد کنید";
    } else if (!isValidEmail(emailInput.value)) {
      emailError.textContent = "ایمیل را به شکل صحیح وارد کنید !";
    }
    // Validate Message
    if (messageInput.value.trim() === "") {
      messageError.textContent = "پیام خود را وارد کنید !";
    }
    // Validate Number
    if (numberInput.value.trim() === "") {
        numberError.textContent = "شماره تماس خود را وارد کنید !";
    }

    if (
      nameError.textContent === "" &&
      emailError.textContent === "" &&
      messageError.textContent === "" &&
      numberError.textContent === ""
    ) {
      Swal.fire({
        title: "پیام شما با موفقیت ارسال شد",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        confirmButtonText: "ادامه"
      });
    }
    {
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
      numberInput.value = "";
    }
  }
  // Validation
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

//Login 
async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username: username,
          password: password,
      }),
  });
  const data = await response.json();
  if (response) {
      alert('ورود موفق');
      console.log('User Token:', data.token);

      window.location.href = 'index.html';
  } else {
      alert('نام کاربری یا پسورد اشتباه است !');
      console.error('Error:', data.message);
  }
}