AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

document.getElementById("sendBtn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("responseText").innerText = "gay";
});
