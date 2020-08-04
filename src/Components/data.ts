export type ggType = {
    id: number
    fn: string
    ln: string
    un: string
}

export type MainGGType = {
    one: Array<ggType>
}

export const gg: MainGGType = {
    one: [
        {id: 1, fn: 'one', ln: 'one', un: 'one'},
        {id: 2, fn: 'two', ln: 'two', un: 'two'},
        {id: 3, fn: 'three', ln: 'three', un: 'three'},
        {id: 4, fn: 'four', ln: 'four', un: 'four'},
        {id: 5, fn: 'five', ln: 'five', un: 'five'}
    ]
};