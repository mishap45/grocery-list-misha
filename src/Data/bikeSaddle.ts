import {bikeConnectFrameDetailType} from './sameTypes'

export type bikeSaddleType = {
    Saddle: Array<bikeConnectFrameDetailType>
}

export const BikesSaddle: bikeSaddleType = {
    Saddle: [
        {
            id: 1,
            img: 'https://boomerang-boardshop.ua/wp-content/uploads/2018/07/FATTY-Combo-black.jpg',
            component: 'Saddle',
            price: 24.87,
            material: '',
            weight: 0.356,
            warranty: 0,
            detail: 'Dartmoor FATTY Combo',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 2,
            img: 'https://images.ua.prom.st/2256278144_w640_h640_velosipednoe-sedlo-avanti.jpg',
            component: 'Saddle',
            price: 17.28,
            material: 'Saddle area: plastic, Seatpost: aluminum',
            weight: 0.5,
            warranty: 0,
            detail: 'Saddle area: Avanti, Seatpost: Spelli UNO 40см',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 3,
            img: 'https://images.ua.prom.st/2359341407_w640_h640_sedlo-s-otverstiem.jpg',
            component: 'Saddle',
            price: 24.58,
            material: '',
            weight: 0,
            warranty: 0,
            detail: 'Saddle area: Сr-mo " 273*156 K.San YBT-K040 c logo LEON, Seatpost: Zoom',
            description: 'gg',
            expDriving: 'Amature',
            connectFrame: ''
        }
    ]
};