import {bikeConnectFrameDetailType} from './sameTypes'

export type bikeForkType = {
    Forks: Array<bikeConnectFrameDetailType>
}

export const BikesForks: bikeForkType = {
    Forks: [
        {
            id: 1,
            img: 'https://www.veloonline.com/images/catalog/list/big/big_rock-shox-30-silver-tk-r-26-q-cl-100-blk_23343_pic.jpg',
            component: 'Fork',
            price: 216.05,
            material: 'alu 6061 T-6 (aluminum)',
            weight: 2.250,
            warranty: 0,
            detail: 'Rock Shox 30 SILVER TK R 26 Q CL 100 BLK PST AL A3',
            description: 'gg',
            expDriving: 'Amature',
            connectFrame: ''
        },

        {
            id: 2,
            img: 'https://www.veloonline.com/images/catalog/list/big/big_sf14-xcr-air-ds-rl-r_10067_pic.jpg',
            component: 'Fork',
            price: 150.22,
            material: '',
            weight: 2.250,
            warranty: 0,
            detail: 'Suntour XCR-AIR-DS-RL-R SF14 27,5 white',
            description: 'gg',
            expDriving: 'Amature',
            connectFrame: ''
        },

        {
            id: 3,
            img: 'https://www.veloonline.com/images/catalog/list/big/big_rock-shox-judy-silver-tk-27-lb-100-blk-f_23364_pic.jpg',
            component: 'Fork',
            price: 300.41,
            material: 'Aluminum/magnesium',
            weight: 2.298,
            warranty: 0,
            detail: 'Rock Shox JUDY SILVER TK 27 LB 100 BLK FB 42 A2',
            description: 'gg',
            expDriving: 'Amature',
            connectFrame: ''
        }
    ]
};