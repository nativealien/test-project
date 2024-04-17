import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { AxiosCollections } from "../interface/collection"
import { address, API_KEY_TEST } from './rarible-config'

type OptionsCreater = (method: string, url: string, contentType: string, apiKey: string) => AxiosRequestConfig

const createOptions: OptionsCreater = (method: string, url: string, contentType: string, apiKey: string) => {
  return {
    method: method,
    url: url,
    headers: {
      accept: contentType,
      'X-API-KEY': apiKey
    } 
  }
}

const axiosCall = async (options: AxiosRequestConfig): Promise<AxiosResponse<any> | Error> => {
  try {
    const res = await axios.request(options)
    console.log('Axios res: ',res)
    return res
  } catch (error) {
    return error as Error
  }
}

export const getCollectionId = async (id: string) => {
  const options = createOptions('GET', address + `collections/${id}`, 'application/json', API_KEY_TEST)
  const res: any = await axiosCall(options)
  return res.data
}

export const getCollectionAll = async (continuation: string) => {
  const options = createOptions('GET', address + `collections/all${'?continuation=' + continuation}&size=100`, 'application/json', API_KEY_TEST)
  const res: any = await axiosCall(options)
  return res.data as AxiosCollections
}

export const getNftByCollection = async (collId: string) => {
  const option = createOptions('GET', address + 'items/byCollection?collection=' + collId, 'application/json', API_KEY_TEST)
  const res: any = await axiosCall(option)
  console.log(res.data)
  return res.data
}
// 'https://api.rarible.org/v0.1/items/byCollection?collection=ETHEREUM%3A0xd07dc4262bcdbf85190c01c996b4c06a461d2430'
// https://testnet-api.rarible.org/v0.1/items/ETHEREUM:0xb66a603f4cfe17e3d27b87a8bfcad319856518b8:' '32292934596187112148346015918544186536963932779440027682601542850818403729410',