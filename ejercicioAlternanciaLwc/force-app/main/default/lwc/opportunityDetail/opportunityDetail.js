import { LightningElement } from 'lwc';

export default class OpportunityDetail extends LightningElement {
    opportunity = {
        name: 'Oportunidad Manu',
        stage: 'En Progreso',
        amount: 5000,
        closeDate: '30/10/2026'
    };
    isDark = false;

    get containerClass() {
        return this.isDark ? 'dark' : 'light';
    }

    get finalClass() {
        return `container ${this.isDark ? 'dark' : 'light'}`;
    }

    toggleMode() {
        this.isDark = !this.isDark;
    }

}