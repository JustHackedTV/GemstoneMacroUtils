const mc = Client.getMinecraft()
const C09PacketHeldItemChange = Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");
const RightClick = new KeyBind(mc.field_71474_y.field_74313_G);

export default function interactSlot(slot) {
    oldItem = Player.getHeldItemIndex()
    Player.setHeldItemIndex(slot)
    RightClick.setState(true)
    setTimeout(() => {
        RightClick.setState(false)
    }, 50)
    setTimeout(() => {
        Player.setHeldItemIndex(oldItem)
    }, 100)
}