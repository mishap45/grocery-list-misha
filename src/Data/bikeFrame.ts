import {bikeFrameDetailType} from './sameTypes'
import ff from './maxresdefault.jpg'

export type bikeFrameType = {
    Frames: Array<bikeFrameDetailType>
}

export const BikesFrames: bikeFrameType = {
    Frames: [
        {
            id: 1,
            img: ff,
            component: 'Frame',
            price: 2699.00,
            material: 'Carbon (CFR)',
            weight: 3.80,
            warranty: 6,
            detail: 'Strive CFR Frameset',
            description: 'gg',
            expDriving: 'Beginner',
            appointment: 'Cross-Country'
        },

        {
            id: 2,
            img: 'https://boomerang-boardshop.ua/wp-content/uploads/2018/06/888-2.jpg',
            component: 'Frame',
            price: 191,
            material: 'alu 6061 (aluminum)',
            weight: 2.12,
            warranty: 2,
            detail: 'Dartmoor Primal',
            description: 'gg',
            expDriving: 'Beginner',
            appointment: 'Cross-Country'
        },

        {
            id: 3,
            img: 'https://images.ua.prom.st/1983220808_w40_h40_rama-votec-vc.jpg',
            component: 'Frame',
            price: 145.5,
            material: 'alu 6061 (aluminum)',
            weight: 1.9,
            warranty: 0,
            detail: 'VOTEC VC Cross Country Hardtail',
            description: 'gg',
            expDriving: 'Beginner',
            appointment: 'Cross-Country'
        }
    ]
};

