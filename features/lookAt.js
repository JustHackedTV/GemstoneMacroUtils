function radians_to_degrees(radians) {
    var pi = Math.PI;
    return radians * (180/pi);
}

export default function lookAt(x, y, z) {
    dX = Player.getX() - x - 0.5
    dY = Player.getY() - y + 1 
    dZ = Player.getZ() - z - 0.5

    angulo_dois = radians_to_degrees(Math.atan(dY / Math.sqrt((dX * dX) + (dZ * dZ))))

    if(dX < 0.0 && dZ < 0.0) {
        angulo = radians_to_degrees(Math.atan(dZ/dX)) - 180
    } else if(dZ < 0.0 && dX > 0.0) {
        angulo = radians_to_degrees(Math.atan(dZ/dX)) + 360
    } else if(dZ > 0.0 && dX < 0.0) {
        angulo = radians_to_degrees(Math.atan(dZ/dX)) - 180
    } else if(dZ > 0.0 && dX > 0.0){
        angulo = radians_to_degrees(Math.atan(dZ/dX))
    }

    fixYaw = angulo - Player.getPlayer().field_70177_z
    fixPitch = angulo_dois - Player.getPlayer().field_70125_A

    Player.getPlayer().field_70177_z += fixYaw + 90
    Player.getPlayer().field_70125_A += fixPitch
}