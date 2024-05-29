export function getDate () {
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const minute = minutes <= 9 ? `0${minutes}` : minutes;
    const fecha = `${day}/${month}/${year}`
    const hours = `${hour}:${minute}Hs`

    return {fecha, hours};
}