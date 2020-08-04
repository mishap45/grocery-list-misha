export type subspeciesBikeType = {
    id: number
    nameBikeType: string
}

export type bikeType = {
    Mountain: Array<subspeciesBikeType>
    Road: Array<subspeciesBikeType>
    City: Array<subspeciesBikeType>
}

export const BikesType: bikeType = {
    Mountain: [
        {id: 1, nameBikeType: 'Fat Bikes'},
        {id: 2, nameBikeType: 'Downhill(DH)'},
        {id: 3, nameBikeType: 'Cross-Country'},
        {id: 4, nameBikeType: 'Enduro'}
    ],
    Road: [
        {id: 1, nameBikeType: 'Cyclocross'},
        {id: 2, nameBikeType: 'Race'},
        {id: 3, nameBikeType: 'Triathlon Bikes'}
    ],
    City: [
        {id: 1, nameBikeType: 'City Bikes'},
        {id: 2, nameBikeType: 'Touring Bikes'},
        {id: 3, nameBikeType: 'Folding Bikes'},
    ]
};