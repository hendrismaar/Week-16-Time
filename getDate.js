exports.getDate = function() {
    let today = new Date();

    let options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    }

    let day = today.toLocaleDateString("en-US", options);
    return day;
}