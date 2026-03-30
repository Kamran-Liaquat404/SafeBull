// warnings.js
const passwordTips = [
    "Do not reuse passwords across different accounts.",
    "Avoid using your name, birthdate, or common words.",
    "Use a mix of uppercase, lowercase, numbers, and symbols.",
    "Change passwords regularly, at least every 3-6 months.",
    "Never share passwords via email or messaging apps.",
    "Beware of phishing links and fake websites.",
    "Use a trusted password manager for storage and generation."
];

const tipsList = document.getElementById("tipsList");
passwordTips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
});
