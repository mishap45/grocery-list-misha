export type bikeFrameDetailType = {
    id: number
    img: string
    component: string
    price: number
    material: string
    weight: number
    warranty: number
    detail: string
    description: string
    expDriving: 'Beginner' | 'Amature' | 'Advanced' | 'Pro/Racing/Pro Racing'
    appointment: 'Fat Bikes' | 'Downhill(DH)' | 'Cross-Country' | 'Enduro' | 'Cyclocross' | 'Race' | 'Triathlon Bikes' |
        'City Bikes' | 'Touring Bikes' | 'Folding Bikes'
}

export type bikeConnectFrameDetailType = {
    id: number
    img: string
    component: string
    price: number
    material: string
    weight: number
    warranty: number
    detail: string
    description: string
    expDriving: 'Beginner' | 'Amature' | 'Advanced' | 'Pro/Racing/Pro Racing'
    connectFrame: string
}