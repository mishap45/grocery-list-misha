import {bikeConnectFrameDetailType} from './sameTypes'

export type bikeDrivetrainType = {
    Drivetrain: Array<bikeConnectFrameDetailType>
}

export const BikesDrivetrain: bikeDrivetrainType = {
    Drivetrain: [
        {
            id: 1,
            img: 'http://veloplus.com.ua/7035-15552-small/-shimano-deore-m610.jpg',
            component: 'Drivetrain',
            price: 215.95,
            material: '',
            weight: 0,
            warranty: 0,
            detail: 'SHIMANO DEORE M610',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 2,
            img: 'https://images.ua.prom.st/1805487695_grupset-shimano-alivio.jpg',
            component: 'Drivetrain',
            price: 173.30,
            material: '',
            weight: 0,
            warranty: 0,
            detail: 'Shimano Alivio M4000',
            description: 'gg',
            expDriving: 'Beginner',
            connectFrame: ''
        },

        {
            id: 3,
            img: 'https://bestbikes.com.ua/wp-content/uploads/Shimano-105-5800-Groupset-Groupsets-and-Build-kits-Black-5800-grp170-24.jpg',
            component: 'Drivetrain',
            price: 400.00,
            material: '',
            weight: 0,
            warranty: 0,
            detail: 'Shimano 105 5800 11sp',
            description: 'gg',
            expDriving: 'Amature',
            connectFrame: ''
        }
    ]
};