import { FC } from "react"
type PercentViewType = {
    value: number,
    max: number,
    makeColor: (percent: number) => string
}
const PercentView: FC<PercentViewType> = ({ max, value, makeColor}) => {
    return(
        <div>
            {max}
        </div>
    )
}
export default PercentView