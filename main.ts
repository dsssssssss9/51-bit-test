input.onButtonPressed(Button.A, function () {
    colorbit_51bit.setMultiColor(true)
    colorbit_51bit.showColorIcon(ColorIcon.Ghost, colorbit.colors(BitColors.Black))
    colorbit_51bit.setMultiColor(false)
})
let colorbit_51bit: colorbit.Strip = null
colorbit_51bit = colorbit.initColorBit(DigitalPin.P1, BitColorMode.RGB)
colorbit_51bit.clear()
colorbit_51bit.showScrollStringColor("Hello!", colorbit.colors(BitColors.Red))
colorbit_51bit.setBrightness(32)
