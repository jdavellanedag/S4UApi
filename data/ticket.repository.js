const Ticket = require('../models/ticket.model');

/** Create document ticket */

const createTicket = async(data) => {
    return new Promise((resolve, reject) => {
        let ticket = new Ticket({
            title: data.title,
            description: data.description,
            priority: data.priority,
            status: data.status,
            type: data.type,
            category: data.category
        });
        ticket.save((err, ticketDB) => {
            if (err) reject({
                code: 405,
                err
            });
            resolve(ticketDB);
        })
    });
}

/** Return ticket documents */

const getTickets = async(options) => {
    let count = await Ticket.find({}).countDocuments();
    return new Promise((resolve, reject) => {
        if (options) {
            Ticket.find({}).skip(options.page * options.limit).limit(options.limit).lean().exec((err, res) => {
                if (err) return reject({ code: 405, err });
                if (!res.length) return reject({ code: 404, err: 'Data not Found' });
                resolve({
                    tickets: res,
                    pageable: {
                        page: options.page,
                        size: count
                    }
                });
            });
        } else {
            Ticket.find({}).lean().exec((err, res) => {
                if (err) return reject({ code: 405, err });
                if (!res.length) return reject({ code: 404, err: 'Data not Found' });
                resolve(res);
            });
        }
    });
}

/** Return ticket by id */

const getTicketById = async(id) => {
    return new Promise((resolve, reject) => {
        Ticket.findById(id).lean().exec((err, res) => {
            if (err) return reject({ code: 405, err });
            if (!res) return reject({ code: 404, err: 'Ticket not found' })
            resolve(res);
        });
    });
}

const getTicketByOwnerUser = async(id) => {

}

const getTicketByAssignedUser = async(id) => {

}

module.exports = {
    createTicket,
    getTickets,
    getTicketById
}