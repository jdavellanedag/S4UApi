const ticket = require('../data/ticket.repository');
const { ApiResponse, reponseType } = require('../data/ApiResponse');
const apiResponse = new ApiResponse();

/** Process to create a ticket */

const createTicket = async(data, callback) => {
    await ticket.createTicket(data)
        .then(result => {
            let response = apiResponse.createResponse({
                code: 200,
                type: reponseType.success,
                data: result
            });
            callback(null, response);
        })
        .catch(err => {
            let error = apiResponse.createResponse({
                code: err.code,
                type: reponseType.error,
                data: err.err
            });
            callback(error)
        });
}

/** Get tickets */

const getTickets = async(options, callback) => {
    await ticket.getTickets(options)
        .then(result => {
            let response = apiResponse.createResponse({
                code: 200,
                type: reponseType.success,
                data: result
            })
            callback(null, response);
        })
        .catch(err => {
            let error = apiResponse.createResponse({
                code: err.code,
                type: reponseType.error,
                data: err.err
            });
            callback(error)
        });
}

/** Get ticket by id */
const getTicketById = async(id, callback) => {
    await ticket.getTicketById(id)
        .then(result => {
            let response = apiResponse.createResponse({
                code: 200,
                type: reponseType.success,
                data: result
            })
            callback(null, response);
        })
        .catch(err => {
            let error = apiResponse.createResponse({
                code: err.code,
                type: reponseType.error,
                data: err.err
            });
            callback(error);
        });
}

module.exports = {
    createTicket,
    getTickets,
    getTicketById
}