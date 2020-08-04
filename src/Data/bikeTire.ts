import {bikeConnectFrameDetailType} from './sameTypes'

export type bikeTireType = {
    Tire: Array<bikeConnectFrameDetailType>
}

export const BikesTire: bikeTireType = {
    Tire: [
        {
            id: 1,
            img: 'https://i1.rozetka.ua/goods/12738929/continental_150158_images_12738929774.jpg',
            component: 'Tire',
            price: 18.57,
            material: '',
            weight: 0.65,
            warranty: 0,
            detail: 'Continental Race King 27.5" x 2.0 Performance Skin Black',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 2,
            img: 'https://www.bikeinn.com/f/13637/136378964/michelin-country-rock.jpg',
            component: 'Tire',
            price: 13.93,
            material: '',
            weight: 0,
            warranty: 0,
            detail: 'Michelin Country Rock',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 3,
            img: 'https://images.ua.prom.st/870421689_obmotka-rulya-shossejnogo.jpg',
            component: 'Tire',
            price: 29.51,
            material: '',
            weight: 0.81,
            warranty: 0,
            detail: 'Smart Sam Performance 29˝x2.25˝ (57-622) B/CL-SK Addix',
            description: 'gg',
            expDriving: 'Amature',
            connectFrame: ''
        }
    ]
};