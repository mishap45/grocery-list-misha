import {bikeConnectFrameDetailType} from './sameTypes'

export type bikeDerailleurType = {
    Derailleur: Array<bikeConnectFrameDetailType>
}

export const BikesDerailleur: bikeDerailleurType = {
    Derailleur: [
        {
            id: 1,
            img: 'https://i2.rozetka.ua/goods/18204468/shimano_02177_images_18204468205.jpg',
            component: 'Derailleur',
            price: 18.4,
            material: '',
            weight: 0,
            warranty: 0.5,
            detail: 'Rear: Shimano Altus RD-310-S, Front: Shimano Tourney Fd-Ty500',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 2,
            img: 'https://i2.rozetka.ua/goods/18204468/shimano_02875_images_18204468109.jpg',
            component: 'Derailleur',
            price: 35.99,
            material: '',
            weight: 0,
            warranty: 0.5,
            detail: 'Rear: Shimano Acera RD-T3000-SGS, Front: Shimano FD-M310',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 3,
            img: 'https://i1.rozetka.ua/goods/12120065/79820306_images_12120065836.jpg',
            component: 'Derailleur',
            price: 125.97,
            material: '',
            weight: 0,
            warranty: 0,
            detail: 'Rear: Shimano RD-M7000-SGS SLX RD-M7000 Shadow, Front: SHIMANO XTR FD-M9025 2X11 Top-Swing',
            description: 'gg',
            expDriving: 'Amature',
            connectFrame: ''
        }
    ]
};