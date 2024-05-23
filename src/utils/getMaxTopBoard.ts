import { cellHeight, config } from "../config"

export const getMaxTopBoard = () => {
    return config.height - cellHeight
}