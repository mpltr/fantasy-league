export const getClosestDate = (dateArray) => {
    var arr = dateArray.map(date => {
        return new Date(date.split("-").join(", "))
    })

    var diffdate = new Date();

    const sorted = arr.sort(function(a, b) {
        var distancea = Math.abs(diffdate - a);
        var distanceb = Math.abs(diffdate - b);
        return distancea - distanceb; // sort a before b when the distance is smaller
    });

    return formatDate(sorted[0]);
}

export const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export default getClosestDate

