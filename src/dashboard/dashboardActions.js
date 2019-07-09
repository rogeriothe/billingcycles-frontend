import axios from 'axios'
const BASE_URL = 'http://web.unifsa.com.br:3030/api'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}