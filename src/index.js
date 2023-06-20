import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!
const colors = ["#F49F0A", "#A9B4C2", "#6689A1"];
const destinations = document.querySelectorAll(".destination");
for (let i = 0; i < colors.length; i++) {
  destinations[i].addEventListener("click", () => {
    destinations[i].style.backgroundColor = colors[i];
  });
  destinations[i].addEventListener("mouseout", () => {
    destinations[i].style.backgroundColor = "white";
  });
}
const boatImg = document.querySelector(".content-destination img");
boatImg.addEventListener("dblclick", () => {
  boatImg.src =
    "https://picsum.photos/id/" + Math.floor(Math.random() * 150) + "/600/200/";
});
const colors2 = [
  "#BBDEF0",
  "#D2F898",
  "#F9C784",
  "#FFBA49",
  "#FFCBDD",
  "#F88DAD",
  "#F9E9EC",
  "#ADA8B6",
  "#D991BA",
  "#D0E1D4",
  "#42CAFD",
  "#9EE493",
  "#9FA0FF",
  "#D1F5BE",
  "#C2948A",
  "#BBB193",
  "#B5F44A",
  "#EFE6DD",
];
const header = document.querySelector(".main-navigation");
document.addEventListener("scroll", () => {
  header.style.backgroundColor = colors2[Math.ceil(Math.random() * 18)];
});
const prices = ["7000₺", "5000₺", "9000₺"];
const satinAl = document.querySelectorAll(".btn");
for (let j = 0; j < prices.length; j++) {
  satinAl[j].addEventListener("mouseover", () => {
    satinAl[j].textContent = prices[j];
  });
  destinations[j].addEventListener("mouseout", () => {
    satinAl[j].textContent = "Beni de Al!";
  });
}
window.addEventListener("load", () => {
  alert("İNDİRİM!!!!");
});
