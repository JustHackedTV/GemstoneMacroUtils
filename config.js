import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
} from 'Vigilance/index';

@Vigilant('GemstoneMacro', 'Gemstone Macro Utils')
class Settings {
	@SwitchProperty({
		name: "Enable Switcher",
		description: "main toggle",
		category: "Pet Switcher",
	})
	toggled = false;

	@SelectorProperty({
		name:"Rod Slot",
		description:"Bal / Scatha switch (requires autopet rule)",
		category: "Pet Switcher",
		options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
	})
	currentSlot = 0;

	@SwitchProperty({
		name: "Enable Mob Killer",
		description: "Not working for now.",
		category: "Mob Killer",
	})
	toggledMob = false;

	constructor() {
		this.initialize(this);
		this.setCategoryDescription('Pet Switcher', 'Pet switcher...');
		this.setCategoryDescription('Mob Killer', 'Mob killer...');
	}
}

export default new Settings();