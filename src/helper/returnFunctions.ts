export const badRequest = (msg: any): any => {
  return {
    msg: msg,
    statusCode: 400
  }

}

export const serverError = (msg: any): any => {
  return {
    msg: msg,
    statusCode: 500
  }

}


export const forbidden = (msg: any) => {
  return {
    msg: msg,
    statusCode: 403
  }

}


export const unauthorized = (msg: any): any => {
  return {
    msg: msg,
    statusCode: 401
  }

}

export const success = (msg: any): any => {
  return {
    msg: msg,
    statusCode: 200
  }
}
