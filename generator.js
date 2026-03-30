function generatePassword(keyword, year, activity) {
    const symbols = ["@", "#", "!", "$"];
    const getSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

    let base = keyword || "user";

    // Clean input
    base = base.replace(/\s+/g, "");

    // Capitalize first letter
    base = base.charAt(0).toUpperCase() + base.slice(1).toLowerCase();

    let part1 = base.slice(0, 3);
    let part2 = base.slice(3);

    let num = year ? year : Math.floor(10 + Math.random() * 90);

    let activityPart = activity ? activity.slice(0, 2) : "";

    // Structured password (not random mess)
    let password1 = part1 + getSymbol() + num + part2 + getSymbol();
    let password2 = base + getSymbol() + num + activityPart + "!";

    return [password1, password2];
}
