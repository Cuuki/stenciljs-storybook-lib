import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Event() buttonClicked: EventEmitter;
  @Prop() label: string;

  handleClick(event: UIEvent) {
    this.buttonClicked.emit(event);
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>{this.label}</button>;
  }
}
