export const lines = [
    [convert2d(0), convert2d(1), convert2d(2)],
    [convert2d(3), convert2d(4), convert2d(5)],
    [convert2d(6), convert2d(7), convert2d(8)],
    [convert2d(0), convert2d(3), convert2d(6)],
    [convert2d(1), convert2d(4), convert2d(7)],
    [convert2d(2), convert2d(5), convert2d(8)],
    [convert2d(0), convert2d(4), convert2d(8)],
    [convert2d(2), convert2d(4), convert2d(6)],
];

function convert2d(i: Number) {
    switch(i) {
        case 0: return [0, 0];
        case 1: return [0, 1];
        case 2: return [0, 2];
        case 3: return [1, 0];
        case 4: return [1, 1];
        case 5: return [1, 2];
        case 6: return [2, 0];
        case 7: return [2, 1];
        case 8: return [2, 2]
    }
}