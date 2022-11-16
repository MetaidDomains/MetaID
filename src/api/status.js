export const showMessage = (status) => {
    let message = "";
    switch (status) {
        case 400:
            message = "400";
            break;
        case 401:
            message = "401";
            break;
        case 403:
            message = "403";
            break;
        case 404:
            message = "404";
            break;
        case 408:
            message = "408";
            break;
        case 500:
            message = "500";
            break;
        case 501:
            message = "501";
            break;
        case 502:
            message = "502";
            break;
        case 503:
            message = "503";
            break;
        case 504:
            message = "504";
            break;
        case 505:
            message = "505";
            break;
        default:
            message = `error(${status})!`;
    }
    return `${message}`;
};
