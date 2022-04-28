function distanceFromHqInBlocks(blockDist) {
    if (blockDist > 42)
    return blockDist - 42
    else (blockDist < 42)
    return 42 - blockDist
}

function distanceFromHqInFeet(feetDist) {
    if (feetDist > 42)
    return (feetDist-42)*264
    else (feetDist < 42)
    return (42-feetDist)*264
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock)*264
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs(start - destination) * 264;

    if (distance <= 400){
    return 0; // $0
    }

    else if (distance > 400 && distance < 2000) {
    return (distance - 400)*0.02 // 2 cents per foot, minus first 400 feet.
    }

    else if (distance >= 2001 && distance <= 2500) {
    return 25 // $25
    }
    else if (distance >= 2500)
        return 'cannot travel that far'
    }
