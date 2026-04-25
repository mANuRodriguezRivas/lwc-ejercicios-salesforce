import { LightningElement } from 'lwc';

export default class HomeGallery extends LightningElement {

    images = [
        'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg',
        'https://cdn.pixabay.com/photo/2013/08/11/03/40/car-171422_1280.jpg',
        'https://cdn.pixabay.com/photo/2024/04/04/03/08/ai-generated-8674235_1280.png'
    ];
    
    get imgClass() {
        return 'thumb';
    }

    selectedImage = this.images[0];

    selectImage(event) {
        this.selectedImage = event.target.dataset.img;
    }

}