import { Actor, Color, Engine, Font, FontUnit, Label, Vector } from "excalibur";

export class Button extends Actor {
    label: Label
    labelText: string
    enableCapturePointer: boolean;
    onClickCallback:Function

    constructor(onClickCallback:Function, labelText: string, pos: Vector) {
        super({
            width: 200,
            height: 50,
            color: Color.Green,
            pos: pos
        })

        this.onClickCallback = onClickCallback
        this.labelText = labelText
    }

    onInitialize(_engine: Engine): void {
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("pointerup", (event) => this.onClickCallback())

        this.label = new Label({
            text: this.labelText,
            pos: new Vector(0, 0),
            font: new Font({
                family: 'monospace',
                size: 24,
                unit: FontUnit.Px,
            }),
            anchor: new Vector(0,0)
        })
        this.addChild(this.label)
    }

    // add on click behaviour
    // add game/engine ref to switch scene? might not be needed for all 
}