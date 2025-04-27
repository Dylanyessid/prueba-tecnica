export const generateSuscessResponse = (data: any, message: string, statusCode:number) => {
    return {
        status: statusCode,
        data: data,
        message: message
    }
}

export const generateErrorResponse = (error: any, message: string, statusCode:number) => {
    return {
        status: statusCode,
        error: error,
        message: message
    }
}