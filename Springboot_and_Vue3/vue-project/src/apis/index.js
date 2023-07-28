import axios from 'axios'

export const pws = () => {
    return axios.get("/api/show/prewindspeed");
} 
export const wd = () => {
    return axios.get("/api/show/temperature")
} 
export const tpt = () => {
    return axios.get("/api/show/humidity")
} 
export const ps = () => {
    return axios.get("/api/show/pressure")
} 
export const pp = () => {
    return axios.get("/api/show/prepower")
} 
export const aws = () => {
    return axios.get("/api/show/windspeed")
} 
export const rp = () => {
    return axios.get("/api/show/power")
} 

// pws = Predicted_wind_speed  展示预测风速
// wd  = wind_direction        展示风向
// tpt = temperature           展示温度
// ps  = pressure              展示气压
// pp  = Predicted_power       展示预测功率
// aws = Actual_wind_speed     展示实际风速
// rp  = real_power            展示实际功率