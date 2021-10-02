
/*return string representations of dates based on current date */
const getToday = () => {
    return new Date().toDateString()
}
const getTomorrow = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toDateString();
}

const getYesterday = () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
}

export default { getToday, getTomorrow, getYesterday }