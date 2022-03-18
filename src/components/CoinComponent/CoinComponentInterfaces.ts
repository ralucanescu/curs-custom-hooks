interface ToggleInterface {
    setIsFlipped: any

}

export interface CoinComponentProps {
    readonly id: string,
    readonly image: string,
    readonly name: string,
    readonly currentPrice: number
}

export interface CoinComponentFrontProps extends Omit<CoinComponentProps, 'id'>, ToggleInterface {
}
export interface CoinComponentBackProps extends ToggleInterface {
    coinDescription: string
}