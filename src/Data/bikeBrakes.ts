import {bikeConnectFrameDetailType} from './sameTypes'

export type bikeBrakesType = {
    Brakes: Array<bikeConnectFrameDetailType>
}

export const BikesBrakes: bikeBrakesType = {
    Brakes: [
        {
            id: 1,
            img: 'https://i2.rozetka.ua/goods/18204467/shimano_03208_images_18204467275.jpg',
            component: 'Brakes',
            price: 127.84,
            material: '',
            weight: 0,
            warranty: 0,
            detail: 'Shift/Brake Lever: Shimano ST-EF51 Altus, Brake Rotor: Shimano SM-RT56-M, ' +
                'Disc Brake: Shimano BL-М445S',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 2,
            img: 'https://bikeshop.com.ua/images/product_images/info_images/avid_00.5016.166.100.jpg',
            component: 'Brakes',
            price: 388.28,
            material: 'Forged aluminum',
            weight: 0.2,
            warranty: 0,
            detail: 'Shift/Brake Lever: Shimano ST-EF51 Altus, Brake Rotor: Shimano SM-RT56-M, ' +
                'Disc Brake: AVID BB7 ROAD SL FR/RR IS/PM 160',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 3,
            img: 'https://frikke.ua/uploads/shop/products/main/a91fe642e63a1dc2ab1754d5a8dba0d8.jpg',
            component: 'Brakes',
            price: 771.94,
            material: 'Aluminum, carbon',
            weight: 0.3,
            warranty: 5,
            detail: 'Shift/Brake Lever: Shimano ST-EF51 Altus, Brake Rotor: Shimano SM-RT56-M, ' +
                'Disc Brake: Magura MT8 Post Mount 6',
            description: 'gg',
            expDriving: 'Amature',
            connectFrame: ''
        }
    ]
};