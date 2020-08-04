import {bikeConnectFrameDetailType} from './sameTypes'

export type bikePedalsType = {
    Pedals: Array<bikeConnectFrameDetailType>
}

export const BikesSaddle: bikePedalsType = {
    Pedals: [
        {
            id: 1,
            img: 'https://www.veloonline.com/images/catalog/list/big/big_2-chester_32802_pic.jpg',
            component: 'Pedals',
            price: 49.56,
            material: 'composite thermoplastic, Cr-Mo 4130',
            weight: 0.360,
            warranty: 0,
            detail: 'Race Face Chester, green',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 2,
            img: 'https://images.ua.prom.st/1920732043_w640_h640_velosipednye-pedali-na.jpg',
            component: 'Pedals',
            price: 26.72,
            material: 'aluminum AL6061, axis chromium steel Cr-Mo',
            weight: 0.275,
            warranty: 0,
            detail: 'GUB GC-060',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 3,
            img: 'https://i8.rozetka.ua/goods/16641791/179987452_images_16641791328.jpg',
            component: 'Pedals',
            price: 26.09,
            material: '',
            weight: 0,
            warranty: 0,
            detail: 'RockBros (RB-331-R)',
            description: 'gg',
            expDriving: 'Amature',
            connectFrame: ''
        }
    ]
};