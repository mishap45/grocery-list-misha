import {bikeConnectFrameDetailType} from './sameTypes'

export type bikeHandleBarType = {
    HandleBar: Array<bikeConnectFrameDetailType>
}

export const BikesHandleBar: bikeHandleBarType = {
    HandleBar: [
        {
            id: 1,
            img: 'https://i1.rozetka.ua/goods/12738929/continental_150158_images_12738929774.jpg',
            component: 'HandleBar',
            price: 37.86,
            material: 'butting, aluminum AL 6061',
            weight: 0.355,
            warranty: 0.2,
            detail: 'FireEye Blaze 733',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 2,
            img: 'https://alantur.ua/assets/cache/images/12ef6dfb8a1b647309df1538ab7451b0.jpeg',
            component: 'HandleBar',
            price: 42.04,
            material: '',
            weight: 0.4,
            warranty: 0,
            detail: 'Race Face CHESTER 35 X 780,35MM RISER',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 3,
            img: 'https://i1.rozetka.ua/goods/1479080/ritchey_30_229_516_images_1479080970.jpg',
            component: 'HandleBar',
            price: 39.59,
            material: '',
            weight: 0,
            warranty: 0,
            detail: 'Ritchey Rizer Comp O/S',
            description: 'gg',
            expDriving: 'Amature',
            connectFrame: ''
        }
    ]
};