import { Component, h, State } from '@stencil/core';

@Component({
    tag: 'limel-example-checkbox',
    shadow: true,
    styleUrl: 'checkbox.scss',
})
export class CheckboxExample {
    @State()
    private disabled: boolean = false;

    @State()
    private required: boolean = false;

    @State()
    private value: boolean = false;

    @State()
    private indeterminate: boolean = false;

    @State()
    private readonly: boolean = false;

    private eventPrinter: HTMLLimelExampleEventPrinterElement;

    public render() {
        return (
            <section>
                <div>
                    <limel-checkbox
                        disabled={this.disabled}
                        label="My fab checkbox"
                        id="fab"
                        checked={this.value}
                        indeterminate={this.indeterminate}
                        required={this.required}
                        onChange={this.handleChange}
                        readonly={this.readonly}
                    />
                </div>
                <p>
                    <limel-flex-container justify="end">
                        <limel-checkbox
                            checked={this.disabled}
                            label="Disabled"
                            onChange={this.setDisabled}
                        />
                        <limel-checkbox
                            checked={this.required}
                            label="Required"
                            onChange={this.setRequired}
                        />
                        <limel-checkbox
                            checked={this.value}
                            label="Checked"
                            onChange={this.setChecked}
                        />
                        <limel-checkbox
                            checked={this.indeterminate}
                            label="Indeterminate"
                            onChange={this.setIndeterminate}
                        />
                        <limel-checkbox
                            checked={this.readonly}
                            label="Readonly"
                            onChange={this.setReadonly}
                        />
                    </limel-flex-container>
                </p>
                <limel-example-value label="Checked" value={this.value} />
                <limel-example-value
                    label="Indeterminate"
                    value={this.indeterminate}
                />
                <limel-example-event-printer
                    ref={(el) => (this.eventPrinter = el)}
                />
            </section>
        );
    }

    private handleChange = (event: CustomEvent<boolean>) => {
        this.value = event.detail;

        // The only way a user can interact with the checkbox is to check it or
        // uncheck it. The indeterminate state can only be set programmatically
        // and will always be unset when the user interacts with the checkbox.
        // Therefore, we must set indeterminate to `false` here.
        this.indeterminate = false;

        this.eventPrinter.writeEvent(event);
    };

    private setDisabled = (event: CustomEvent<boolean>) => {
        event.stopPropagation();
        this.disabled = event.detail;
    };

    private setRequired = (event: CustomEvent<boolean>) => {
        event.stopPropagation();
        this.required = event.detail;
    };

    private setChecked = (event: CustomEvent<boolean>) => {
        event.stopPropagation();
        this.value = event.detail;
    };

    private setIndeterminate = (event: CustomEvent<boolean>) => {
        event.stopPropagation();
        this.indeterminate = event.detail;
    };

    private setReadonly = (event: CustomEvent<boolean>) => {
        event.stopPropagation();
        this.readonly = event.detail;
    };
}
