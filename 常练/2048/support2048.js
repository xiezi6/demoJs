function getPosTop(i, j) {
    return 20 + i * 120;
};
function getPosLeft(i, j) {
    return 20 + j * 120;
}

function boardBgColor(board) {
    switch (board) {
        case 2:
            return '#cb6d29';
            break;
        case 4:
            return '#ed891a';
            break; 1
        case 8:
            return '#e27931';
            break;
        case 16:
            return '#c54133';
            break;
        case 32:
            return '#cb6d29';
            break;
        case 64:
            return '#b8924b';
            break;
        case 128:
            return '#b47029';
            break;
        case 256:
            return '#b56331';
            break;
        case 512:
            return '#b85846';
            break;
        case 1024:
            return '#744a28';
            break;
        case 2048:
            return '#6e2d2f';
            break;
        default:
            return '#d72717';
    }
}