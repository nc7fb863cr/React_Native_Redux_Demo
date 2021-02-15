import { ADD, EDIT, DELETE } from './Types';

export const addDevice = (device) => ({
  type: ADD,
  payload:device,
})

export const editDevice = (key, device) => ({
  type: EDIT,
  key: key,
  payload: device,
})

export const deleteDevice = (key) => ({
  type: DELETE,
  key: key,
})