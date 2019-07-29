import axios from 'axios'
const BASE_URL = 'https://web.unifsa.com.br/billingcycles/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)    
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}