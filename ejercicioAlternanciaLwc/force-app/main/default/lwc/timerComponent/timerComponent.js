import { LightningElement } from 'lwc';

export default class TimerComponent extends LightningElement {
    seconds = 0;

    intervalId;

    start() {
        if (this.intervalId) return;
        this.intervalId = setInterval(() => {
            this.seconds++;
        }, 1000);
    }

    pause() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    reset() {
        this.pause();
        this.seconds = 0;
    }
}