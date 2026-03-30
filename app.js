document.getElementById("generateBtn").addEventListener("click", () => {
    const keyword = document.getElementById("keyword").value;
    const year = document.getElementById("year").value;
    const activity = document.getElementById("activity").value;

    const [pw1, pw2] = generatePassword(keyword, year, activity);

    document.getElementById("password1").textContent = pw1 + " | Crack Time: " + estimateCrackTime(pw1);
    document.getElementById("password2").textContent = pw2 + " | Crack Time: " + estimateCrackTime(pw2);
});

document.getElementById("analyzeBtn").addEventListener("click", () => {
    const pwd = document.getElementById("analyzeInput").value;
    document.getElementById("analysisResult").textContent = analyzePassword(pwd) 
        + " | Estimated Crack Time: " + estimateCrackTime(pwd);
});

window.addEventListener("load", displayTips);
window.addEventListener("load", loadAdvancedTipsOnScroll);
