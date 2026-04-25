import { LightningElement } from 'lwc';

export default class ContactForm extends LightningElement {
    name = '';

    email = '';
    
    message = '';

    handleChange(event) {
        const field = event.target.dataset.field;
        this[field] = event.target.value;
    }

    validateName(event) {
        const input = event.target;
        if (!this.name) {
            input.setCustomValidity('El nombre es obligatorio');
        } else {
            input.setCustomValidity('');
        }
        input.reportValidity();
    }

    validateEmail(event) {
        const input = event.target;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!this.email) {
            input.setCustomValidity('El email es obligatorio');
        } else if (!emailRegex.test(this.email)) {
            input.setCustomValidity('Formato de email no válido');
        } else {
            input.setCustomValidity('');
        }
        input.reportValidity();
    }

    validateMessage(event) {
        const input = event.target;
        if (!this.message) {
            input.setCustomValidity('El mensaje es obligatorio');
        } else if (this.message.length < 10) {
            input.setCustomValidity('El mensaje debe tener al menos 10 caracteres');
        } else {
            input.setCustomValidity('');
        }
        input.reportValidity();
    }

    handleSubmit() {
        const inputs = this.template.querySelectorAll('lightning-input, lightning-textarea');
        let isValid = true;
        inputs.forEach(input => {
            if (!input.checkValidity()) {input.reportValidity();
                isValid = false;
            }
        });
    }
}