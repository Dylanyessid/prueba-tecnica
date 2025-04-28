
// Generate a success or error response object for API responses


export const generateSuscessResponse = (data: any, message: string, statusCode:number) => {
    return {
        status: statusCode,
        data: data,
        message: message
    }
}

export const generateErrorResponse = (message: string, statusCode:number) => {
    return {
        status: statusCode,
       
        message: message
    }
}