import Settings from "./config.js"
import lookAt from "./features/lookAt.js"
import rightClickInteractSlot from "./features/RightClickSlot.js"

register("command", () => {
    Settings.openGUI()
}).setName("gmu")

let inFields = false
register("tick", () => {
    if (Settings.toggled) {
        y = Player.getY()
        if (y < 64 && inFields != true) {
            rightClickInteractSlot(Settings.currentSlot)
            inFields = true
        } else if (y >= 64 && inFields) {
            rightClickInteractSlot(Settings.currentSlot)
            inFields = false
        }
    }
})