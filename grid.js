const GRID_SIZE = 25

export function randomGridPositon() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function outsideGrid(positon) {
    return (
        positon.x < 1 || positon.x > GRID_SIZE ||
        positon.y < 1 || positon.y > GRID_SIZE
    )
}