
function generatePassword(keyword, year, activity) {
    const symbols = ["@", "#", "$", "!", "%", "&"];
    const numbers = "0123456789";

    // sanitize inputs
    let name = (keyword || "User").trim();
    let yr = year || Math.floor(Math.random() * 90 + 10); // 2 digit random if empty
    let act = (activity || "").trim();

    name = name.replace(/[^a-zA-Z]/g, ""); // only letters
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    let actShort = act ? act.slice(0, 2).toUpperCase() : "";

    // Random symbol for each password
    const sym1 = symbols[Math.floor(Math.random() * symbols.length)];
    const sym2 = symbols[Math.floor(Math.random() * symbols.length)];

    // Random number for extra entropy
    const randNum = Math.floor(Math.random() * 90 + 10);

    // Password patterns
    const password1 = `${name.slice(0,3)}${sym1}${yr}${name.slice(3)}${sym2}`;
    const password2 = `${name}${sym2}${yr}${actShort}${sym1}${randNum}`;

    return [password1, password2];
}
