function estimateCrackTime(password) {
    const charset = 94;
    const guessesPerSecond = 1e9;

    const combinations = Math.pow(charset, password.length);
    let seconds = combinations / guessesPerSecond;

    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const year = day * 365;

    if (seconds < minute) return "Few seconds";
    if (seconds < hour) return Math.floor(seconds / minute) + " minutes";
    if (seconds < day) return Math.floor(seconds / hour) + " hours";
    if (seconds < week) return Math.floor(seconds / day) + " days";
    if (seconds < year) return Math.floor(seconds / week) + " weeks";
    if (seconds < year * 10) return Math.floor(seconds / year) + " years";
    if (seconds < year * 100) return Math.floor(seconds / year) + " years";
    
    return "100+ years";
}
