const advancedTips = [
    { title: "Two-Factor Authentication (2FA)", description: "Enable 2FA on all accounts. Even if your password is compromised, hackers cannot login without the second factor." },
    { title: "Phishing Link Awareness", description: "Never click on suspicious links. SafeBull alerts you to common phishing patterns and dangerous URLs." },
    { title: "Password Managers", description: "Use a trusted password manager to store all passwords securely and generate unique passwords for each site." },
    { title: "Email Breach Detection", description: "SafeBull will alert you if your email appears in any data breach so you can change passwords immediately." },
    { title: "Regular Updates", description: "Keep all software and apps updated. Vulnerabilities are often exploited when updates are ignored." },
    { title: "Advanced Password Generation", description: "SafeBull generates unpredictable, strong passwords using multiple randomization layers." },
    { title: "Community Support", description: "Join SafeBull official community on Telegram for latest security alerts and pro tips." }
];

function displayTips() {
    const tipsList = document.getElementById("tipsList");
    tipsList.innerHTML = "";
    tips.forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        tipsList.appendChild(li);
    });
}

function loadAdvancedTipsOnScroll() {
    const container = document.getElementById("advancedTipsContainer");
    window.addEventListener("scroll", () => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const threshold = document.body.offsetHeight - 150;
        if (scrollPosition >= threshold && container.children.length === 0) {
            advancedTips.forEach(tip => {
                const div = document.createElement("div");
                div.classList.add("advanced-tip");
                div.innerHTML = `<h3>${tip.title}</h3><p>${tip.description}</p>`;
                container.appendChild(div);
            });
        }
    });
  }
