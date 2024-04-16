import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { AxiosCollections } from "../models/Collection"
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

// type axiosCollections = { data:}
export const getCollectionAll = async (continuation: string) => {
  const options = createOptions('GET', address + `collections/all${'?continuation=' + continuation}&size=600`, 'application/json', API_KEY_TEST)
  const res: any = await axiosCall(options)
  console.log(res.data)
  return res.data as AxiosCollections
}