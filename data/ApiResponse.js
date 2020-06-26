class ApiResponse {
    constructor() {
        this.code;
        this.type;
        this.data;
    }

    createResponse(data) {
        this.code = data.code;
        this.type = data.type;
        this.data = data.data;
        return {
            code: this.code,
            type: this.type,
            data: this.data,
        }
    }
}

const reponseType = {
    success: 'Success',
    error: 'Error'
}

module.exports = {
    ApiResponse,
    reponseType
}