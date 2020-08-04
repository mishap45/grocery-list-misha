import {bikeConnectFrameDetailType} from './sameTypes'

export type bikeWheelsType = {
    Wheels: Array<bikeConnectFrameDetailType>
}

export const BikesWheels: bikeWheelsType = {
    Wheels: [
        {
            id: 1,
            img: 'https://images.ua.prom.st/1770793265_w640_h640_komplekt-kolis-shimano.jpg',
            component: 'Wheels',
            price: 378.45,
            material: 'aluminum',
            weight: 1.795,
            warranty: 0,
            detail: 'Shimano Deore XT WH-M8000 МТВ 27.5',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 2,
            img: 'https://images.zakupka.com/i3/firms/27/10961/10961723/pic_fa5159d3c25b2d6_1024x3000.jpg',
            component: 'Wheels',
            price: 202.99,
            material: '',
            weight: 0,
            warranty: 0,
            detail: 'Shimano WH-MT35 МТВ 29',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 3,
            img: 'https://images.zakupka.com/i3/firms/27/10961/10961723/pic_7630f60e5624b7c_1024x3000.jpg',
            component: 'Wheels',
            price: 158.79,
            material: '',
            weight: 0,
            warranty: 0,
            detail: 'Shimano WH-MT15 МТВ 29',
            description: 'gg',
            expDriving: 'Amature',
            connectFrame: ''
        }
    ]
};