import { Actor, BaseAlign, Color, Engine, Font, FontUnit, Label, TextAlign, Vector } from "excalibur";

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
        this.on("pointerenter", (event) => this.pointerEnter())
        this.on("pointerleave", (event) => this.pointerLeave())

        this.label = new Label({
            text: this.labelText,
            pos: new Vector(0, 0),
            font: new Font({
                family: 'monospace',
                size: 16,
                unit: FontUnit.Px,
                textAlign: TextAlign.Center,
                baseAlign: BaseAlign.Middle
            }),
            anchor: new Vector(0,0)
        })
        this.addChild(this.label)


    }
    private pointerLeave(): void {
        super.color = Color.Green
    }
    private pointerEnter(): void {
        super.color = Color.Red
    }

    // add on click behaviour
    // add game/engine ref to switch scene? might not be needed for all 
}